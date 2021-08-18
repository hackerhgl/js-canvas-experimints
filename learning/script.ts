import { getPixelColor, isEmptyPixel } from "../pixels";
import { drawText, initCanvas } from "../canvas";


(function name() {
    const { ctx, h, w } = initCanvas();
    const string = "Hamza Iqbal";
    drawText(ctx, string);

    const o = 100;

    var image = ctx.getImageData(0, 0, o, o);
    var pixels = image.data;

    const limit = o*o*4; 
    const oo = 200;
    let count = 0;
    
    function loop() {
        const color = getPixelColor(pixels, count);
        console.log('trigger', count, limit, color);
        const p = count/4;
        const y = Math.floor(p/o);
        const x = p - (y*o);
        const imageData = new ImageData(Uint8ClampedArray.from(color), 1,1);
        ctx.putImageData(imageData, oo+x,oo+y)
        if (count >= limit) {
            return;
        }
        count += 4;
        while(true) {
            if (isEmptyPixel(getPixelColor(pixels, count))) {
                count+=4;
            } else {
                break;
            }
        }
        requestAnimationFrame(loop);
    }

    loop();
})();
