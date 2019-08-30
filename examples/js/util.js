const pixelRatio = 2;
let isDown = false, moveX = 0, moveY = 0, offsetX = 0, offsetY = 0;
let canvas, ctx;
let renderer, stage;
let sw = document.body.clientWidth;
let sh = document.body.clientHeight;

function generateCanvas() {
    canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");

    window.addEventListener('resize', canvasResize, false);
    canvasResize();

    moveEvent(canvas);
}

function canvasResize() {
    sw = document.body.clientWidth;
    sh = document.body.clientHeight;

    canvas.width = sw * pixelRatio;
    canvas.height = sh * pixelRatio;
    canvas.style.width = sw + 'px';
    canvas.style.height = sh + 'px';
    ctx.scale(pixelRatio, pixelRatio);
}

function generatePixi(bgcolor) {
    renderer = new PIXI.Renderer({
        width: sw,
        height: sh,
        antialias: true,
        transparent: false,
        autoDensity: true,
        resolution: pixelRatio,//window.devicePixelRatio > 1 ? 2 : 1,
        powerPreference: "high-performance",
        backgroundColor: bgcolor
    });
    document.body.appendChild(renderer.view);
    stage = new PIXI.Container();

    window.addEventListener('resize', pixiResize, false);
    pixiResize();

    moveEvent(renderer.view);
}

function pixiResize() {
    sw = document.body.clientWidth;
    sh = document.body.clientHeight;

    renderer.resize(sw, sh);
}

function moveEvent(canvas) {
    const hammer = new Hammer(canvas);
    hammer.add(new Hammer.Pan({direction: Hammer.DIRECTION_ALL, threshold: 0}));
    hammer.on("pan", (e) => {                
        moveX = e.deltaX + offsetX;
        moveY = e.deltaY + offsetY;
        if (e.isFinal) {
            offsetX = moveX;
            offsetY = moveY;
        }
    });
}

function getSize(size) {
    let ratio = Math.sqrt(sw * sw + sh * sh) / 1800;
    if (ratio > 1) ratio = 1;
    else if (ratio < 0.5) ratio = 0.5;
    return size * ratio;
}