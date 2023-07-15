import { BooleanResolution, DokAction, NumberResolution, StringResolution, TypedArrayResolution } from "dok-actions";
import { GlBufferTarget, GlDepthFunction, GlType, GlUsage } from "./types";
import { ImageId, TextureId, Url } from "./ImageId";
export declare type LocationName = string;
export declare type LocationResolution = LocationName | StringResolution | [StringResolution<LocationName>, NumberResolution];
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
        size?: NumberResolution<1 | 2 | 3 | 4>;
        glType?: StringResolution<GlType>;
        normalized?: BooleanResolution;
        stride?: NumberResolution;
        offset?: NumberResolution;
        rows?: NumberResolution<1 | 2 | 3 | 4>;
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
    enableDepth?: {
        enable?: BooleanResolution;
        depthFunc?: StringResolution<GlDepthFunction>;
    };
}
