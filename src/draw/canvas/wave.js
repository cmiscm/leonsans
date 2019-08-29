import {
    PI2,
    getAmplitude
} from '../../core/util.js';

const THIN_LIMIT = 110;
const COS = Math.cos;
const SIN = Math.sin;

export function Wave(ctx, data, scale, amplitude, weight, fps) {
    const total = data.wavePaths.length;
    const m_amplitude = getAmplitude(amplitude, scale);
    let i, p, prev, qx, qy, saveDot = [];

    ctx.beginPath();
    for (i = 0; i < total; i++) {
        p = data.wavePaths[i];
        if (fps) {
            const ranx = (Math.random() * m_amplitude) - (m_amplitude / 2);
            const rany = (Math.random() * m_amplitude) - (m_amplitude / 2);
            p.rx = p.x + ranx * COS(p.rotation);
            p.ry = p.y + ranx * SIN(p.rotation);
            p.sx = p.x + ranx;
            p.sy = p.y + rany;
        }

        if (p.type == 'a') {
            saveDot.push(p);
        } else if (p.start == 1) {
            ctx.moveTo(p.x, p.y);
        } else if (p.fix) {
            ctx.lineTo(p.x, p.y);
        } else {
            if (weight < THIN_LIMIT) {
                prev = data.wavePaths[i - 1];
                if (prev) {
                    qx = prev.x + ((p.x - prev.x) * 0.5);
                    qy = prev.y + ((p.y - prev.y) * 0.5);
                    ctx.quadraticCurveTo(qx, qy, p.rx, p.ry);
                }
            } else {
                ctx.lineTo(p.rx, p.ry);
            }
        }
    }
    ctx.stroke();

    for (i = 0; i < saveDot.length; i++) {
        p = saveDot[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, PI2);
        ctx.fill();
    }
}