import {
    PI2
} from '../../core/util.js';

export function Lines(ctx, data) {
    const total = data.lines.length;
    let i, d, pos;
    for (i = 0; i < total; i++) {
        d = data.lines[i];
        pos = d.pos;
        if (pos.type == 'a') {
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, pos.radius * d.drawing.value, 0, PI2);
            ctx.fill();
            ctx.closePath();
        } else if (pos.type == 'm') {
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        } else if (pos.type == 'l') {
            ctx.lineTo(pos.x, pos.y);
        } else if (pos.type == 'b') {
            ctx.bezierCurveTo(pos.x, pos.y, pos.x2, pos.y2, pos.x3, pos.y3);
        }
        d.stroke(ctx, d);
    }
}