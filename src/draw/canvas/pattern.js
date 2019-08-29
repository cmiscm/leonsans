import {
    PI2
} from '../../core/util.js';

export function Pattern(ctx, data, w, h) {
    const total = Math.round(data.paths.length * data.drawing.value);
    const w2 = w / 2;
    const w3 = w / 3;
    const h2 = h / 2;
    let i, p;
    for (i = 0; i < total; i++) {
        p = data.paths[i];
        if (p.num == 1) {
            ctx.fillStyle = "#ff00c5";
        } else {
            ctx.fillStyle = "#ff95f8";
        }
        if (p.type == 'a') {
            ctx.beginPath();
            ctx.arc(p.x, p.y, w3, 0, PI2);
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillRect(-w2, -h2, w, h);
            ctx.restore();
        }
    }
}