export function initCanvas(height?: number, width?: number) {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.height = (height || window.innerHeight/2);
    canvas.width = (width || window.innerWidth);
    const ctx = canvas.getContext('2d');
    const h = canvas.height;
    const w = canvas.width;
    const ww = w/2;
    const hh = h/2;
    
    return { canvas, ctx, h, w, hh, ww };
}