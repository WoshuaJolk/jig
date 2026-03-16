"use client";

import { useEffect, useRef, useState } from "react";
import { ASCIIEffect } from "./asciieffect";

export function Statue({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    let renderer: import("three").WebGLRenderer | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let composer: any = null;
    let cleanupScene: (() => void) | undefined;

    const currentRef = mountRef.current;
    if (!currentRef) return;

    const initScene = async () => {
      try {
        if (currentRef.clientWidth < 10 || currentRef.clientHeight < 10) return;

        const THREE = await import("three");
        const STLLoader = await import(
          "three/addons/loaders/STLLoader.js"
        ).then((mod) => mod.STLLoader);
        const OrbitControls = await import(
          "three/addons/controls/OrbitControls.js"
        ).then((mod) => mod.OrbitControls);
        const { EffectComposer, RenderPass, EffectPass } =
          await import("postprocessing");

        if (!isMounted) return;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
          75,
          currentRef.clientWidth / currentRef.clientHeight,
          0.1,
          1000
        );
        camera.position.set(0, 8, 1);

        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          premultipliedAlpha: false,
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.NoToneMapping;
        const gl = renderer.getContext();
        if ("drawingBufferColorSpace" in gl) {
          (gl as unknown as Record<string, string>).drawingBufferColorSpace =
            "srgb";
        }
        currentRef.appendChild(renderer.domElement);
        renderer.domElement.style.touchAction = "none";
        renderer.domElement.style.mixBlendMode = "darken";

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xf0f0f0, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.minPolarAngle = Math.PI / 2;
        controls.maxPolarAngle = Math.PI / 2;
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.enabled = true;

        const handleWheel = (event: WheelEvent) => {
          event.preventDefault();
          event.stopPropagation();
        };
        const handleTouchMove = (event: TouchEvent) => {
          if (event.touches.length > 1) {
            event.preventDefault();
            event.stopPropagation();
          }
        };
        renderer.domElement.addEventListener("wheel", handleWheel, {
          passive: false,
        });
        renderer.domElement.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });

        composer = new EffectComposer(renderer, {
          frameBufferType: THREE.UnsignedByteType,
          alpha: true,
        });
        const renderPass = new RenderPass(scene, camera);
        composer.addPass(renderPass);
        const asciiEffect = new ASCIIEffect({ backgroundColor: "#f7f7f6" });
        const effectPass = new EffectPass(camera, asciiEffect);
        effectPass.renderToScreen = true;
        composer.addPass(effectPass);

        const animate = () => {
          if (!isMounted || !composer) return;
          requestAnimationFrame(animate);
          controls.update();
          composer.render();
        };
        animate();

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
            const boundingBox = geometry.boundingBox;
            if (!boundingBox) return;

            const modelHeight = boundingBox.max.y - boundingBox.min.y;
            mesh.position.set(0, modelHeight * 0.05, 0);

            const maxDim = Math.max(
              boundingBox.max.x - boundingBox.min.x,
              boundingBox.max.y - boundingBox.min.y,
              boundingBox.max.z - boundingBox.min.z
            );
            const scale = 8 / maxDim;
            mesh.scale.set(scale, scale, scale);
            scene.add(mesh);

            const animateModel = () => {
              if (!isMounted || !composer) return;
              requestAnimationFrame(animateModel);
              mesh.rotation.y += 0.005;
              controls.update();
              composer.render();
            };
            animateModel();
          },
          undefined,
          (errorEvent: unknown) => {
            if (!isMounted) return;
            setError(`Failed to load 3D model: ${String(errorEvent)}`);
          }
        );

        const handleResize = () => {
          if (!isMounted || !renderer || !camera || !composer) return;
          camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
          composer.setSize(currentRef.clientWidth, currentRef.clientHeight);
        };

        window.addEventListener("resize", handleResize);
        cleanupScene = () => {
          window.removeEventListener("resize", handleResize);
          renderer?.domElement.removeEventListener("wheel", handleWheel);
          renderer?.domElement.removeEventListener(
            "touchmove",
            handleTouchMove
          );
        };
      } catch (err) {
        if (isMounted) {
          setError(`Failed to initialize 3D viewer: ${String(err)}`);
        }
      }
    };

    void initScene();

    return () => {
      isMounted = false;
      cleanupScene?.();

      if (renderer?.domElement && currentRef.contains(renderer.domElement)) {
        currentRef.removeChild(renderer.domElement);
      }

      renderer?.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className={`overflow-hidden ${className}`}>
      {error ? (
        <div className="flex h-full items-center justify-center text-xs text-red-400">
          {error}
        </div>
      ) : null}
    </div>
  );
}
