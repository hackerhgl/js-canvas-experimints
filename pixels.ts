import { EMPTY_PIXEL, PIXEL_SIZE, } from "./constants";
import { ChunksOfPixel, Offset, Size } from "./types";

export function getPixelColor(pixels:Uint8ClampedArray,  position: number): number[] {
    const color: number[] = [];
    for (let j=0; j<PIXEL_SIZE; j++) {
        color.push(pixels[position+j]);
    }
    return color;
}

export function getChunksOfPixelColor(pixels:Uint8ClampedArray,  position: number, chunks: Offset, size: Size): ChunksOfPixel {
    const colors: number[] = [];
    let yMax = chunks.y;
    const rendered = {...chunks};
    const index = position / PIXEL_SIZE;
    const indexWidth = Math.floor(index/size.width);
    const indexSizeWidth = indexWidth * size.width;
    const ysMax = yMax + indexWidth;
    if (ysMax > size.height) {
        rendered.y = chunks.y - (ysMax - size.height)
        yMax = rendered.y;
    }

    for (let y = 0; y < yMax; y++) {
        const yPosition = y * size.width * PIXEL_SIZE;
        let xMax = (position + (chunks.x * PIXEL_SIZE));
        const xMaxIndex = xMax / PIXEL_SIZE;
        const xsSafeMaxWidth = Math.floor(xMaxIndex / size.width) * size.width;
        
        if (xsSafeMaxWidth !== indexSizeWidth && xMaxIndex > xsSafeMaxWidth) {
            rendered.x = chunks.x - (xMaxIndex - xsSafeMaxWidth) ;
            xMax = position + (rendered.x * PIXEL_SIZE);
        }

        for (let x = position; x < xMax; x++) {
            const pixel = yPosition+x;
            colors.push(pixels[pixel]);
        }
    }
    return {...rendered,  colors} as ChunksOfPixel;
}


export function isEmptyPixel(array: number[]): boolean {
    for (let i =0; i < EMPTY_PIXEL.length; i++) {
        if (EMPTY_PIXEL[i] !== array[i]) {
            return false;
        }
    }
    return true;
}