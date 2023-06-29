import { BooleanResolution, DokAction, NumberResolution, StringResolution, TypedArrayResolution } from "dok-actions";
import { GlType, GlUsage } from "./types";
import { ImageId, TextureId, Url } from "./ImageId";

export type LocationName = string;
export type LocationResolution = LocationName | StringResolution | [StringResolution<LocationName>, NumberResolution<0|1|2|3>];

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
    bindBuffer: StringResolution<LocationName>;
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
};
