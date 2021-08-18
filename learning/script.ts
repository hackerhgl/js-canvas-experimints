import { getPixelColor, isEmptyPixel } from "../pixels";
import { drawText, initCanvas } from "../canvas";

const PIXEL_SIZE = 4;


(function name() {
    const { ctx, h, w } = initCanvas();
    const string = "Hamza Iqbal";
    drawText(ctx, string);

    const offset = {x: 20, y: 100};

    var image = ctx.getImageData(0, 0, offset.x, offset.y);
    console.log(image);
    
    var pixels = image.data;

    const limit = offset.x*offset.y*PIXEL_SIZE; 
    const oo = 200;
    let count = 0;
    const chunks = {x:1, y: 1}; 
    
    function loop() {
        const color = getPixelColor(pixels, count);
        const p = count/4;
        const y = Math.floor(p/offset.x);
        const x = p - (y*offset.x);
        const imageData = new ImageData(Uint8ClampedArray.from(color), 1, 1);
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
        // requestAnimationFrame(loop);
    }

    loop();
})();
