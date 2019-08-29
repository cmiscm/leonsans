import {
    PI2
} from '../../core/util.js';

export function Points(ctx, data) {
    ctx.save();
    ctx.lineWidth = 1;
    let total = data.lines.length;
    let i;
    for (i = 0; i < total; i++) {
        eachLine_(ctx, data.lines[i]);
    }
    ctx.restore();

    ctx.save();
    ctx.lineWidth = 1;
    total = data.typo.p.length;
    for (i = 0; i < total; i++) {
        eachPoint_(ctx, data.typo.p[i], data);
    }
    ctx.restore();
}

function eachPoint_(ctx, p, data) {
    const total = p.v.length;
    let i, mp, cp;
    for (i = 0; i < total; i++) {
        mp = p.cv[i];
        cp = mp.addRect(data.rect);
        if (mp.type == 'b') {
            ctx.fillStyle = "#ff2a00";
            ctx.beginPath();
            ctx.arc(cp.x3 + (cp.x3 - cp.x2), cp.y3 + (cp.y3 - cp.y2), 1.5, 0, PI2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(cp.x2, cp.y2, 1.5, 0, PI2);
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(cp.x2, cp.y2);
            ctx.lineTo(cp.x3, cp.y3);
            ctx.lineTo(cp.x3 + (cp.x3 - cp.x2), cp.y3 + (cp.y3 - cp.y2));
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.arc(cp.x3, cp.y3, 2.5, 0, PI2);
            ctx.fill();
            ctx.stroke();
        } else {
            ctx.beginPath();
            ctx.fillStyle = "#ffffff";
            ctx.strokeStyle = "#ff2a00";
            ctx.arc(cp.x, cp.y, 2.5, 0, PI2);
            ctx.fill();
            ctx.stroke();
        }
    }
}

function eachLine_(ctx, d) {
    const pos = d.pos;
    if (pos.type != 'a') {
        if (pos.type == 'm') {
            ctx.strokeStyle = "#ff2a00";
            ctx.beginPath();
            ctx.moveTo(pos.x, pos.y);
        } else if (pos.type == 'l') {
            ctx.lineTo(pos.x, pos.y);
        } else if (pos.type == 'b') {
            ctx.bezierCurveTo(pos.x, pos.y, pos.x2, pos.y2, pos.x3, pos.y3);
        }
        ctx.stroke();
    }
}