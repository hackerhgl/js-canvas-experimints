import { EMPTY_PIXEL } from "./constants";

export function getPixelColor(pixels:Uint8ClampedArray,  position: number): number[] {
    const color: number[] = [];
    for (let j=0; j<4; j++) {
        color.push(pixels[position+j]);
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