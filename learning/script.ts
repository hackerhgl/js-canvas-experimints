import { getChunksOfPixelColor, getPixelColor, isEmptyPixel } from "../pixels";
import { drawText, initCanvas } from "../canvas";
import { Offset, Size } from "../types";
import { PIXEL_SIZE } from "../constants";



(function name() {
    const { ctx, h, w } = initCanvas();
    const string = "Hamza Iqbal";
    drawText(ctx, string);

    const size: Size = {width: 80, height: 20};

    var image = ctx.getImageData(0, 0, size.width, size.height);
    var pixels = image.data;
    const limit = size.width*size.height*PIXEL_SIZE; 
    const oo = 200;
    let count = 0;
    const chunks: Offset = {x:9, y:3}; 
    
    function loop() {
        const pixelChunks = getChunksOfPixelColor(pixels, count, chunks, size);
        const p = count/PIXEL_SIZE;
        const y = Math.floor(p/size.width);
        const x = p - (y*size.width);


        const imageData = new ImageData(Uint8ClampedArray.from(pixelChunks.colors), pixelChunks.x, pixelChunks.y);
        ctx.putImageData(imageData, oo+x,oo+y)
        if (count >= limit) {
            console.log(count,limit,pixelChunks.y);
            return;
        }
        count += PIXEL_SIZE * pixelChunks.x;
        const yIndex = Math.floor((count/PIXEL_SIZE)/size.width);
        
        if (count == yIndex*size.width*PIXEL_SIZE) {
            count += size.width * PIXEL_SIZE * (chunks.y-1);
        }

        // while(true) {
        //     if (isEmptyPixel(getPixelColor(pixels, count))) {
        //         count += PIXEL_SIZE;
        //     } else {
        //         break;
        //     }
        // }
        requestAnimationFrame(loop);
    }

    loop();
})();
