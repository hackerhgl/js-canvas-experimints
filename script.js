const FONT_SIZE = 200;
const d = document.getElementById("debug");

function c(...args) {
    d.innerHTML=args.join(', ')
}

var animation

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

    const o = 100;
    var image = ctx.getImageData(0, 0, o, o);
    var pixels = image.data;

    console.log(image);

    // ctx.putImageData({ ... }, w-100, h-100);
    const oo = 200;
    count = 0;
    countY = 0;

    function loop() {
        console.log('request', count);
        const color = [];
        for (let j=0; j<4; j++) {
            color.push(pixels[count+j]);
        }
        p = count/4;
        y = Math.floor(p/o);
        x =   p- (y*o);
        console.log();
        const imageData = new ImageData(Uint8ClampedArray.from(color), 1,1);
        ctx.putImageData(imageData, oo+x,oo+y)
        if (count >= pixels.length) {
            console.log('count', stop);
            cancelAnimationFrame(animation)
        }
        count += 4;
        animation = requestAnimationFrame(() => loop());
    }

    loop()

    



})();