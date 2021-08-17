const FONT_SIZE = 200;
const EMPTY_PIXEL = [0,0,0,0];
const d = document.getElementById("debug");

function c(...args) {
    d.innerHTML=args.join(', ')
}

let animationId;

(function name() {
    const canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight/2;
    canvas.width = window.innerWidth;
    ctx = canvas.getContext('2d');
    const h = canvas.height;
    const w = canvas.width;
    const ww = w/2;
    const hh = h/2;

    ctx.font = `900 ${FONT_SIZE}px Arial`;
    const string = "Hamza Iqbal";
    ctx.textBaseline = 'middle'; 
    ctx.textAlign = 'center';

    ctx.fillText(string, 0, 0);
    // ctx.fillText(string, ww, hh);

    const o = 40;
    var image = ctx.getImageData(0, 0, o, o);
    var pixels = image.data;

    console.log(image);

    // ctx.putImageData({ ... }, w-100, h-100);
    const limit = o*o*4; 
    const oo = 200;
    count = 0;
    countY = 0;
    
    function loop() {
        const color = getPixelColor(count);
        console.log('trigger', count, limit, color);
        p = count/4;
        y = Math.floor(p/o);
        x = p - (y*o);
        const imageData = new ImageData(Uint8ClampedArray.from(color), 1,1);
        ctx.putImageData(imageData, oo+x,oo+y)
        if (count >= limit) {
            return;
        }
        count += 4;

        while(true) {
            if (isEmptyPixel(getPixelColor(count))) {
                count+=4;
            } else {
                break;
            }
        }
        animationId = requestAnimationFrame(loop);
    }

loop();

function getPixelColor(position) {
    const color = [];
    for (let j=0; j<4; j++) {
        color.push(pixels[position+j]);
    }
    return color;
}

})();

function isEmptyPixel(array) {
    for (let i =0; i < EMPTY_PIXEL.length; i++) {
        if (EMPTY_PIXEL[i] !== array[i]) {
            return false;
        }
    }
    return true;
}