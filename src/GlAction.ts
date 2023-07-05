import { BooleanResolution, DokAction, NumberResolution, StringResolution, TypedArrayResolution } from "dok-actions";
import { GlType, GlUsage } from "./types";
import { ImageId, TextureId, Url } from "./ImageId";

export type LocationName = string;
export type LocationResolution = LocationName | StringResolution | [StringResolution<LocationName>, NumberResolution];

export interface GlAction extends DokAction {
    program?: {
      id: StringResolution;
      vertexShader: StringResolution;
      fragmentShader: StringResolution;  
    };
    bufferData?: {
      location: StringResolution<LocationName>;
      buffer?: TypedArrayResolution;
      length?: NumberResolution;
      usage?: StringResolution<GlUsage>;
      glType?: GlType;
    };
    bufferSubData?: {
      location?: StringResolution<LocationName>;
      data: TypedArrayResolution;
      dstByteOffset?: NumberResolution;
      srcOffset?: NumberResolution;
      length?: NumberResolution;
      glType?: GlType;
    };
    updateAttributeBuffer?: StringResolution<LocationName>;
    bindVertexArray?: boolean;
    bindBuffer?: StringResolution<LocationName>;
    drawArrays?: {
      vertexFirst?: NumberResolution;
      vertexCount?: NumberResolution;
      instanceCount?: NumberResolution;
    };
    vertexAttribPointer?: {
      location: LocationResolution;
      size?: NumberResolution<1|2|3|4>;
      glType?: GlType;
      normalized?: BooleanResolution;
      stride?: NumberResolution;
      offset?: NumberResolution;
      rows?: NumberResolution<1|2|3|4>;
      divisor?: NumberResolution;
      enable?: BooleanResolution;
    };
    uniform?: {
      location: StringResolution<LocationName>;
      int?: NumberResolution;
      float?: NumberResolution;
      buffer?: TypedArrayResolution;
    };
    clear?: NumberResolution | {
      color?: BooleanResolution;
      depth?: BooleanResolution;
      stencil?: BooleanResolution;  
    };
    activateProgram?: StringResolution;
    loadTexture?: {
      imageId: StringResolution<ImageId>;
      textureId: TextureId;
    };
    video?: {
      src: StringResolution<Url>;
      imageId: StringResolution<ImageId>;
      volume?: NumberResolution;
    };
    image?: {
      src: StringResolution<Url>;
      imageId: StringResolution<ImageId>;
      onLoad?: GlAction[];
    };
    initMatrix?: boolean;
    spriteMatrixTransform?: {
      translate: [NumberResolution, NumberResolution, NumberResolution];
      rotation: [NumberResolution, NumberResolution, NumberResolution];
      scale: [NumberResolution, NumberResolution, NumberResolution];
    };
    bufferSubDataMatrix?: {
      index: NumberResolution;
    };
    perspectiveProjectionMatrixTransform?: {
      viewAngle: NumberResolution;
      zNear?: NumberResolution;
      zFar?: NumberResolution;
      aspect?: NumberResolution;
    };
    orthogonalProjectionMatrixTransform?: {
      viewportLeft?: NumberResolution;
      viewportRight?: NumberResolution;
      viewportTop?: NumberResolution;
      viewportBottom?: NumberResolution;
      zFar?: NumberResolution;
      aspect?: NumberResolution;
    };
};


// setProjectionMatrices(viewAngle, pixelScale) {
//   const gl = this.gl;
//   const uniforms = this.shader.uniforms;
//   const zNear = -100; //0.01;
//   const zFar = 5000;

//   const fieldOfView = (viewAngle || 45) * Constants.DEG_TO_RAD; // in radians
//   const aspect = gl.drawingBufferWidth / gl.drawingBufferHeight;
//   const perspectiveMatrix = mat4.perspective(mat4.create(), fieldOfView, aspect, zNear, zFar);
//   const pixelScaleMultiplier = 1 / pixelScale;

//   const viewportWidth = gl.drawingBufferWidth / pixelScaleMultiplier;
//   const viewportHeight = gl.drawingBufferHeight / pixelScaleMultiplier;
//   const orthoMatrix = mat4.ortho(
//     mat4.create(),
//     -viewportWidth,
//     viewportWidth,
//     -viewportHeight,
//     viewportHeight,
//     zNear,
//     zFar,
//   );
//   gl.uniformMatrix4fv(uniforms.ortho.location, false, orthoMatrix);
//   gl.uniformMatrix4fv(uniforms.perspective.location, false, perspectiveMatrix);
// }