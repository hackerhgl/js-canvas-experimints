const FONT_SIZE = 120;

(function name() {
    const canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight/2;
    canvas.width = window.innerWidth;
    ctx = canvas.getContext('2d');
    const h = canvas.height;
    const w = canvas.width;

    ctx.font = FONT_SIZE+"px Arial";
    const name = "Hamza Iqbal";
    // ctx.translate(w/2, h/2);
    ctx.fillText(name, 0, FONT_SIZE);

})();