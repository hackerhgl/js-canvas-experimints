import { EMPTY_PIXEL, PIXEL_SIZE, } from "./constants";
import { minMax } from './utils';
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
    const yMax = Math.min(chunks.y);
    const rendered = {...chunks};
    const index = position / PIXEL_SIZE;
    for (let y = 0; y < yMax; y++) {

        const yPosition = y * size.width * PIXEL_SIZE;
        let xMax = (position + (chunks.x * PIXEL_SIZE));

        const xMaxIndex = xMax /4;
        const sxMax = Math.floor(xMaxIndex/ size.width);
        const sxMaxWidth = sxMax * size.width;
        const xWidth = Math.floor(index/size.width);
        const xMaxWidth = xWidth * size.width;
        // const safeWidth = ;
        console.log('index:', index, xMaxIndex, xMax, size.width, 'w', xMaxWidth,  sxMaxWidth);

        if (sxMaxWidth !== xMaxWidth && xMaxIndex > sxMaxWidth) {
            rendered.x = chunks.x - (xMaxIndex - sxMaxWidth) ;
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