export type CanvasSize = number | null | undefined

export interface Offset {
    x: number,
    y: number,
}

export interface Size {
    height: number,
    width: number,
}

export interface ChunksOfPixel {
    x: number;
    y: number;
    colors: number[];
}