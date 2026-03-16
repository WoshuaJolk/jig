import { Effect } from "postprocessing";
import {
  CanvasTexture,
  Color,
  NearestFilter,
  RepeatWrapping,
  Texture,
  Uniform,
} from "three";

const fragment = `
uniform sampler2D uCharacters;
uniform float uCharactersCount;
uniform float uCellSize;
uniform bool uInvert;
uniform vec3 uColor;
uniform vec3 uBackgroundColor;

const vec2 SIZE = vec2(16.);

vec3 greyscale(vec3 color, float strength) {
    float g = dot(color, vec3(0.299, 0.587, 0.114));
    return mix(color, vec3(g), strength);
}

vec3 greyscale(vec3 color) {
    return greyscale(color, 1.0);
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 cell = resolution / uCellSize;
    vec2 grid = 1.0 / cell;
    vec2 pixelizedUV = grid * (0.5 + floor(uv / grid));
    vec4 pixelized = texture2D(inputBuffer, pixelizedUV);
    float greyscaled = greyscale(pixelized.rgb).r;

    if (uInvert) {
        greyscaled = 1.0 - greyscaled;
    }

    float characterIndex = floor((uCharactersCount - 1.0) * greyscaled);
    vec2 characterPosition = vec2(mod(characterIndex, SIZE.x), floor(characterIndex / SIZE.y));
    vec2 offset = vec2(characterPosition.x, -characterPosition.y) / SIZE;
    vec2 charUV = mod(uv * (cell / SIZE), 1.0 / SIZE) - vec2(0., 1.0 / SIZE) + offset;
    vec4 asciiCharacter = texture2D(uCharacters, charUV);

    float charMask = asciiCharacter.r * step(0.01, greyscaled);
    outputColor = vec4(mix(uBackgroundColor, uColor, charMask), 1.0);
}
`;

export interface IASCIIEffectProps {
  characters?: string;
  fontSize?: number;
  cellSize?: number;
  color?: string;
  backgroundColor?: string;
  invert?: boolean;
  fontFamily?: string;
}

export class ASCIIEffect extends Effect {
  public fontFamily: string;

  constructor({
    characters = "    .:,'-^=*+?!|0#X%WM@VERT",
    fontSize = 300,
    cellSize = 2,
    color = "#8a8a8a",
    backgroundColor = "#ffffff",
    invert = false,
    fontFamily = "arial",
  }: IASCIIEffectProps = {}) {
    const uniforms = new Map<string, Uniform>([
      ["uCharacters", new Uniform(new Texture())],
      ["uCellSize", new Uniform(cellSize)],
      ["uCharactersCount", new Uniform(characters.length)],
      ["uColor", new Uniform(new Color(color))],
      ["uBackgroundColor", new Uniform(new Color(backgroundColor))],
      ["uInvert", new Uniform(invert)],
    ]);

    super("ASCIIEffect", fragment, { uniforms });

    this.fontFamily = fontFamily;

    const charactersTextureUniform = this.uniforms.get("uCharacters");
    if (charactersTextureUniform) {
      charactersTextureUniform.value = this.createCharactersTexture(
        characters,
        fontSize
      );
    }
  }

  public createCharactersTexture(characters: string, fontSize: number): Texture {
    const canvas = document.createElement("canvas");
    const size = 1024;
    const maxPerRow = 16;
    const cell = size / maxPerRow;

    canvas.width = canvas.height = size;
    const texture = new CanvasTexture(
      canvas,
      undefined,
      RepeatWrapping,
      RepeatWrapping,
      NearestFilter,
      NearestFilter
    );

    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Context not available");
    }

    context.clearRect(0, 0, size, size);
    context.font = `${fontSize}px ${this.fontFamily}`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = "#fff";

    for (let i = 0; i < characters.length; i += 1) {
      const char = characters[i];
      const x = i % maxPerRow;
      const y = Math.floor(i / maxPerRow);
      context.fillText(char, x * cell + cell / 2, y * cell + cell / 2);
    }

    texture.needsUpdate = true;
    return texture;
  }
}
