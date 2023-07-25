import { BooleanResolution, DokAction, NumberResolution, StringResolution, TypedArrayResolution } from "dok-actions";
import { GlBufferTarget, GlType, GlUsage } from "./types";
import { ImageId, Url } from "./ImageId";

export type LocationName = string;
export type LocationResolution = LocationName | StringResolution | [StringResolution<LocationName>, NumberResolution];
export type TextureIndex = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31;

export interface GlAction extends DokAction {
    program?: {
      id: StringResolution;
      vertexShader: StringResolution;
      fragmentShader: StringResolution;  
    };
    bufferData?: {
      target?: StringResolution<GlBufferTarget>;
      location: StringResolution<LocationName>;
      buffer?: TypedArrayResolution;
      length?: NumberResolution;
      usage?: StringResolution<GlUsage>;
      glType?: StringResolution<GlType>;
    };
    bufferSubData?: {
      target?: StringResolution<GlBufferTarget>;
      location?: StringResolution<LocationName>;
      data: TypedArrayResolution;
      dstByteOffset?: NumberResolution;
      srcOffset?: NumberResolution;
      length?: NumberResolution;
      glType?: StringResolution<GlType>;
    };
    updateAttributeBuffer?: {
      target?: StringResolution<GlBufferTarget>;
      location: StringResolution<LocationName>;
    };
    bindVertexArray?: boolean;
    bindBuffer?: {
      target?: StringResolution<GlBufferTarget>;
      location: StringResolution<LocationName>;
    };
    drawArrays?: {
      vertexFirst?: NumberResolution;
      vertexCount?: NumberResolution;
      instanceCount?: NumberResolution;
    };
    drawElements?: {
      count?: NumberResolution;
      glType?: StringResolution<GlType>;
      offset?: NumberResolution;
      instanceCount?: NumberResolution;
    };     
    vertexAttribPointer?: {
      location: LocationResolution;
      size?: NumberResolution<1|2|3|4>;
      glType?: StringResolution<GlType>;
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
      textureId: NumberResolution<TextureIndex>;
      sourceRect?: [NumberResolution, NumberResolution, NumberResolution, NumberResolution];
      destRect?: [NumberResolution, NumberResolution, NumberResolution, NumberResolution];
    };
    video?: {
      src: StringResolution<Url | "webcam">;
      imageId: StringResolution<ImageId>;
      volume?: NumberResolution;
      callback: {
        onLoad?: GlAction[];
      };
    };
    image?: {
      src: StringResolution<Url>;
      imageId: StringResolution<ImageId>;
      callback: {
        onLoad?: GlAction[];
      };
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
      left?: NumberResolution;
      right?: NumberResolution;
      top?: NumberResolution;
      bottom?: NumberResolution;
      zFar?: NumberResolution;
      zNear?: NumberResolution;
    };
};
