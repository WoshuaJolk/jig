"use client";

import { useEffect, useRef, useState } from "react";

export function Statue({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let renderer: import("three").WebGLRenderer | undefined;
    let animId: number | undefined;
    let cleanupScene: (() => void) | undefined;

    const currentRef = mountRef.current;
    if (!currentRef) return;

    const initScene = async () => {
      try {
        const w = currentRef.clientWidth;
        const h = currentRef.clientHeight;
        if (w < 10 || h < 10) return;

        const THREE = await import("three");
        const { STLLoader } = await import("three/addons/loaders/STLLoader.js");
        const { OrbitControls } =
          await import("three/addons/controls/OrbitControls.js");

        let useAscii = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let composer: any = null;

        if (!isMounted) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
        camera.position.set(0, 8, 1);

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          premultipliedAlpha: false,
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(w, h);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.NoToneMapping;
        const gl = renderer.getContext();
        if ("drawingBufferColorSpace" in gl) {
          (gl as unknown as Record<string, string>).drawingBufferColorSpace =
            "srgb";
        }
        currentRef.appendChild(renderer.domElement);
        renderer.domElement.style.display = "block";
        renderer.domElement.style.touchAction = "none";
        renderer.domElement.style.mixBlendMode = "darken";

        // OrbitControls — horizontal only, no zoom/pan
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.minPolarAngle = Math.PI / 2;
        controls.maxPolarAngle = Math.PI / 2;
        controls.enableZoom = false;
        controls.enablePan = false;

        // Block wheel/pinch on canvas
        const blockWheel = (e: WheelEvent) => {
          e.preventDefault();
          e.stopPropagation();
        };
        const blockPinch = (e: TouchEvent) => {
          if (e.touches.length > 1) {
            e.preventDefault();
            e.stopPropagation();
          }
        };
        renderer.domElement.addEventListener("wheel", blockWheel, {
          passive: false,
        });
        renderer.domElement.addEventListener("touchmove", blockPinch, {
          passive: false,
        });

        scene.add(new THREE.AmbientLight(0xffffff, 0.45));
        const dirLight = new THREE.DirectionalLight(0xf0f0f0, 0.8);
        dirLight.position.set(1, 1, 1);
        scene.add(dirLight);

        // ASCII post-processing
        try {
          try {
            const font = new FontFace("ReceiptASCII", "url(/Receipt.otf)");
            const loaded = await font.load();
            document.fonts.add(loaded);
          } catch {
            /* fallback */
          }

          const { EffectComposer, RenderPass, EffectPass } =
            await import("postprocessing");
          const { ASCIIEffect } = await import("./asciieffect");

          composer = new EffectComposer(renderer, {
            frameBufferType: THREE.UnsignedByteType,
            alpha: true,
          });
          composer.addPass(new RenderPass(scene, camera));

          const ascii = new ASCIIEffect({
            backgroundColor: "#f7f7f6",
            color: "#8a8a8a",
            fontFamily: "ReceiptASCII, monospace",
            cellSize: 2,
          });
          const fxPass = new EffectPass(camera, ascii);
          fxPass.renderToScreen = true;
          composer.addPass(fxPass);
          useAscii = true;
        } catch (e) {
          console.error("[Statue] ASCII effect failed:", e);
        }

        const loader = new STLLoader();
        loader.load(
          "/statue2.stl",
          (geometry: import("three").BufferGeometry) => {
            if (!isMounted) return;

            const material = new THREE.MeshPhongMaterial({
              color: 0xb9b9b9,
              specular: 0x111111,
              shininess: 80,
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.geometry.center();
            geometry.computeBoundingBox();
            const bb = geometry.boundingBox!;
            const modelH = bb.max.y - bb.min.y;
            mesh.position.set(0, modelH * 0.05, 0);
            const maxDim = Math.max(
              bb.max.x - bb.min.x,
              bb.max.y - bb.min.y,
              bb.max.z - bb.min.z,
            );
            mesh.scale.setScalar(8 / maxDim);
            scene.add(mesh);

            const animate = () => {
              if (!isMounted) return;
              animId = requestAnimationFrame(animate);
              mesh.rotation.y += 0.005;
              controls.update();
              if (useAscii && composer) {
                composer.render();
              } else {
                renderer!.render(scene, camera);
              }
            };
            animate();
          },
          undefined,
          (err: unknown) => {
            console.error("[Statue] STL load error:", err);
            if (isMounted) setError(`Model load failed: ${String(err)}`);
          },
        );

        const onResize = () => {
          if (!isMounted || !renderer) return;
          const nw = currentRef.clientWidth;
          const nh = currentRef.clientHeight;
          camera.aspect = nw / nh;
          camera.updateProjectionMatrix();
          renderer.setSize(nw, nh);
          composer?.setSize(nw, nh);
        };
        window.addEventListener("resize", onResize);
        cleanupScene = () => {
          window.removeEventListener("resize", onResize);
          renderer?.domElement.removeEventListener("wheel", blockWheel);
          renderer?.domElement.removeEventListener("touchmove", blockPinch);
        };
      } catch (err) {
        console.error("[Statue] init failed:", err);
        if (isMounted) setError(`Init failed: ${String(err)}`);
      }
    };

    void initScene();

    return () => {
      isMounted = false;
      if (animId) cancelAnimationFrame(animId);
      cleanupScene?.();
      if (renderer?.domElement && currentRef.contains(renderer.domElement)) {
        currentRef.removeChild(renderer.domElement);
      }
      renderer?.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className={`overflow-hidden ${className}`}>
      {error && (
        <div className="flex h-full items-center justify-center text-xs text-red-500">
          {error}
        </div>
      )}
    </div>
  );
}
