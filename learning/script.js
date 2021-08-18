var FONT_SIZE = 200;
var EMPTY_PIXEL = [0, 0, 0, 0];
var d = document.getElementById("debug");
function c() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    d.innerHTML = args.join(', ');
}
var animationId;
(function name() {
    var canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight / 2;
    canvas.width = window.innerWidth;
    var ctx = canvas.getContext('2d');
    var h = canvas.height;
    var w = canvas.width;
    var ww = w / 2;
    var hh = h / 2;
    ctx.font = "900 " + FONT_SIZE + "px Arial";
    var string = "Hamza Iqbal";
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(string, 0, 0);
    // ctx.fillText(string, ww, hh);
    var o = 100;
    var image = ctx.getImageData(0, 0, o, o);
    var pixels = image.data;
    console.log(image);
    // ctx.putImageData({ ... }, w-100, h-100);
    var limit = o * o * 4;
    var oo = 200;
    var count = 0;
    function loop() {
        var color = getPixelColor(count);
        console.log('trigger', count, limit, color);
        var p = count / 4;
        var y = Math.floor(p / o);
        var x = p - (y * o);
        var imageData = new ImageData(Uint8ClampedArray.from(color), 1, 1);
        ctx.putImageData(imageData, oo + x, oo + y);
        if (count >= limit) {
            return;
        }
        count += 4;
        while (true) {
            if (isEmptyPixel(getPixelColor(count))) {
                count += 4;
            }
            else {
                break;
            }
        }
        animationId = requestAnimationFrame(loop);
    }
    loop();
    function getPixelColor(position) {
        var color = [];
        for (var j = 0; j < 4; j++) {
            color.push(pixels[position + j]);
        }
        return color;
    }
})();

function isEmptyPixel(array) {
    for (var i = 0; i < EMPTY_PIXEL.length; i++) {
        if (EMPTY_PIXEL[i] !== array[i]) {
            return false;
        }
    }
    return true;
}
