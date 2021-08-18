import { EMPTY_PIXEL, PIXEL_SIZE, } from "./constants";
import { Offset, Size } from "./types";

export function getPixelColor(pixels:Uint8ClampedArray,  position: number): number[] {
    const color: number[] = [];
    for (let j=0; j<PIXEL_SIZE; j++) {
        color.push(pixels[position+j]);
    }
    return color;
}

export function getChunksOfPixelColor(pixels:Uint8ClampedArray,  position: number, chunks: Offset, size: Size): number[] {
    
    const color: number[] = [];
    // const color: number[] = [0,0,0,0];
    const xMax = position+(PIXEL_SIZE*chunks.x);
    
    for (let x = position; x < xMax; x+=PIXEL_SIZE) {
        for (let j=0; j<PIXEL_SIZE; j++) {
            color.push(pixels[position+j]);
        }
    }

    return color;
}


export function isEmptyPixel(array: number[]): boolean {
    for (let i =0; i < EMPTY_PIXEL.length; i++) {
        if (EMPTY_PIXEL[i] !== array[i]) {
            return false;
        }
    }
    return true;
}