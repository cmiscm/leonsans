import {
    Vector
} from '../core/vector.js';
import {
    bezierTangent
} from '../core/paths.js';

export const ROTATE_HORIZONTAL = 180 * (Math.PI / 180);
export const ROTATE_VERTICAL = 90 * (Math.PI / 180);
export const ROTATE_NONE = -100;
export const VERTEX_GAP = 3;
export const VERTEX_GAP2 = VERTEX_GAP / 2;
export const TOFU = 'tofu';
const FONT_HEIGHT = 824;

export function generateFontData(w, fw, fh, x1, x2, y1, y2, path) {
    const arr = [];
    const total = path.length;   
    let i; 
    for (i = 0; i < total; i++) {
        arr.push({
            d: path[i].d,
            v: setCenter(path[i].v, fw, fh)
        });
    }

    return {
        rect: {
            w: w,
            h: FONT_HEIGHT,
            fw: fw,
            fh: fh
        },
        ratio: {
            x1: x1,
            x2: x2,
            y1: y1,
            y2: y2,
        },
        p: arr
    };
}

function setCenter(arr, fw, fh) {
    const total = arr.length;
    const cx = fw / 2;
    const cy = fh / 2;
    let mp, i, ct = [];

    for (i = 0; i < total; i++) {
        mp = arr[i];
        mp[1] -= cx;
        mp[2] -= cy;
        if (mp[0] == 'b') {
            mp[3] -= cx;
            mp[4] -= cy;
            mp[5] -= cx;
            mp[6] -= cy;
        }
        ct.push(new Vector(mp));
    }

    return ct;
}

export function getR(x1, y1, x2, y2) {
    const x = x1 - x2;
    const y = y1 - y2;
    return -Math.atan2(x, y);
}

export function getCurveR(x1, y1, x2, y2, x3, y3, x4, y4, t) {
    const x = bezierTangent(x1, x2, x3, x4, t);
    const y = bezierTangent(y1, y2, y3, y4, t);
    return -Math.atan2(x, y);
}