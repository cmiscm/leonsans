import {
    ROTATE_HORIZONTAL,
    ROTATE_VERTICAL,
    VERTEX_GAP2,
    getR,
    getCurveR
} from './util.js';

//À
export function getLatin1(x, y) {
    const tx = x;
    const ty = -60 + y;
    return [{
        d: -1,
        v: [
            ['m', -40 + tx, ty, {
                x: 0,
                y: 0,
                r: getR(-40 + tx, ty, 0 + tx, 60 + ty)
            }],
            ['l', 0 + tx, 60 + ty, {
                x: 0,
                y: 0,
                f: 1
            }],
        ]
    }];
}
//Á
export function getLatin2(x, y) {
    const tx = x;
    const ty = -60 + y;
    return [{
        d: -1,
        v: [
            ['m', 40 + tx, ty, {
                x: 0,
                y: 0,
                r: getR(40 + tx, ty, 0 + tx, 60 + ty)
            }],
            ['l', 0 + tx, 60 + ty, {
                x: 0,
                y: 0,
                f: 1
            }],
        ]
    }];
}
//Â
export function getLatin3(x, y) {
    const tx = -68 + x;
    const ty = 0 + y;
    return [{
        d: -1,
        v: [
            ['m', 0 + tx, 50 + ty, {
                r: getR(0 + tx, 50 + ty, 68 - VERTEX_GAP2 + tx, 0 + ty),
                y: 0,
                x: 0
            }],
            ['l', 68 - VERTEX_GAP2 + tx, 0 + ty, {
                r: getR(0 + tx, 50 + ty, 68 - VERTEX_GAP2 + tx, 0 + ty),
                y: 0,
                x: 0,
                f: 1,
            }],
            ['l', 68 + VERTEX_GAP2 + tx, 0 + ty, {
                r: getR(68 + VERTEX_GAP2 + tx, 0 + ty, 68 + 68 + tx, 50 + ty),
                y: 0,
                x: 0,
                f: 1,
                v: 1
            }],
            ['l', 68 + 68 + tx, 50 + ty, {
                y: 0,
                x: 0,
                f: 1
            }]
        ]
    }];
}
//Ã
export function getLatin4(x, y) {
    const tx = x - 76.24;
    const ty = y;
    return [{
        d: 1,
        v: [
            ['m', 159.52 + tx, 16.56 + ty, {
                x: -1,
                y: -0.2,
                r: getCurveR(159.52 + tx, 16.56 + ty, 150.08 + tx, 29.28 + ty, 134.56 + tx, 37.68 + ty, 118.56 + tx, 37.68 + ty, 0),
                f: 1
            }],
            ['b', 150.08 + tx, 29.28 + ty, 134.56 + tx, 37.68 + ty, 118.56 + tx, 37.68 + ty, {
                x: -1,
                y: -0.2,
                r: ROTATE_VERTICAL
            }],
            ['b', 103.28 + tx, 37.68 + ty, 89.68 + tx, 29.28 + ty, 76.24 + tx, 20.4 + ty, {
                x: -1,
                y: -0.2
            }],
            ['b', 61.44 + tx, 10.56 + ty, 47.28 + tx, 0 + ty, 31.68 + tx, 0 + ty, {
                x: -1,
                y: -0.2,
                r: ROTATE_VERTICAL
            }],
            ['b', 17.84 + tx, 0 + ty, 8.72 + tx, 7.12 + ty, 0 + tx, 16 + ty, {
                x: -1,
                y: -0.2
            }],
        ]
    }];
}
//Ä
export function getLatin5(x, y) {
    return [{
        d: 1,
        v: [
            ['a', -50 + x, y, {
                x: 0,
                y: 0
            }],
        ]
    }, {
        d: 1,
        v: [
            ['a', 50 + x, y, {
                x: 0,
                y: 0
            }],
        ]
    }];
}
//Ŭ
export function getLatin6(x, y) {
    const tx = x - 57;
    const ty = y;
    return [{
        d: 1,
        v: [
            ['m', 112.7 + tx, 0.0 + ty, {
                r: getCurveR(112.7 + tx, 0.0 + ty + tx, 10.1 + ty, 110.1 + tx, 19.3 + ty, 105.0 + tx, 27.7 + ty, 0),
                x: 0,
                y: 0,
                f: 1
            }],
            ['b', 112.7 + tx, 10.1 + ty, 110.1 + tx, 19.3 + ty, 105.0 + tx, 27.7 + ty, {
                x: 0,
                y: 0,
            }],
            ['b', 99.8 + tx, 36.1 + ty, 92.9 + tx, 42.8 + ty, 84.3 + tx, 47.7 + ty, {
                x: 0,
                y: 0,
            }],
            ['b', 75.7 + tx, 52.6 + ty, 66.7 + tx, 55.0 + ty, 57.3 + tx, 55.0 + ty, {
                x: 0,
                y: 0,
            }],
            ['b', 47.5 + tx, 55.0 + ty, 38.3 + tx, 52.6 + ty, 29.6 + tx, 47.7 + ty, {
                x: 0,
                y: 0,
            }],
            ['b', 20.8 + tx, 42.8 + ty, 13.8 + tx, 36.1 + ty, 8.5 + tx, 27.7 + ty, {
                x: 0,
                y: 0,
            }],
            ['b', 3.2 + tx, 19.3 + ty, 0.5 + tx, 10.1 + ty, 0.5 + tx, 0.0 + ty, {
                x: 0,
                y: 0,
            }],
        ]
    }];
}
//Å
export function getLatin7(x, y) {
    const tx = 88 + x;
    const ty = -116 + y;
    const scale = 0.5;
    return [{
        d: 1,
        v: [
            ['m', 232 * scale + tx, 116 * scale + ty, {
                r: ROTATE_HORIZONTAL,
                p: 1,
                f: 1
            }],
            ['b', 232 * scale + tx, 180.1 * scale + ty, 180.1 * scale + tx, 232 * scale + ty, 116 * scale + tx, 232 * scale + ty, {
                r: ROTATE_VERTICAL
            }],
            ['b', 51.9 * scale + tx, 232 * scale + ty, 0 * scale + tx, 180.1 * scale + ty, 0 * scale + tx, 116 * scale + ty, {
                r: ROTATE_HORIZONTAL
            }],
            ['b', 0 * scale + tx, 51.9 * scale + ty, 51.9 * scale + tx, 0 * scale + ty, 116 * scale + tx, 0 * scale + ty, {
                r: ROTATE_VERTICAL
            }],
            ['b', 180.1 * scale + tx, 0 * scale + ty, 232 * scale + tx, 51.9 * scale + ty, 232 * scale + tx, 116 * scale + ty, {
                r: ROTATE_HORIZONTAL,
                c: 1
            }],
        ]
    }]
}
//Ð
export function getLatin8(x, y) {
    return [{
        d: 1,
        v: [
            ['m', x - 40, y, {
                x: 0,
                y: 1,
                r: ROTATE_VERTICAL
            }],
            ['l', 100 + x, y, {
                x: 0,
                y: 1,
                f: 1
            }],
        ]
    }]
}
//Ç
export function getLatin9(x, y) {
    return [{
        d: -1,
        v: [
            ['m', x, y, {
                p: 1
            }],
            ['b', 9.3 + x, 11.6 + y, 15.6 + x, 27.1 + y, 15.6 + x, 40.9 + y],
            ['b', 15.6 + x, 83.3 + y, -18.2 + x, 107.8 + y, -59.5 + x, 107.8 + y],
            ['b', -70.9 + x, 107.8 + y, -82.9 + x, 106.2 + y, -93.7 + x, 102.7 + y, {
                x: 0.5,
                f: 1
            }],
        ]
    }]
}
//Ą
export function getLatin10(x, y) {
    return [{
        d: -1,
        v: [
            ['m', x, y, {
                p: 1
            }],
            ['b', 22.6 - 42.2 + x, 14.8 + y, -42.2 + x, 37.9 + y, -42.2 + x, 64.1 + y],
            ['b', -42.2 + x, 100.3 + y, 30.2 - 42.2 + x, 118.8 + y, 63.6 - 42.2 + x, 118.8 + y],
            ['b', 68.3 - 42.2 + x, 118.8 + y, 72.9 - 42.2 + x, 118.4 + y, 77.4 - 42.2 + x, 117.6 + y, {
                x: 0.5,
                f: 1
            }],
        ]
    }]
}

//Ċ
export function getLatin11(x, y) {
    return [{
        d: 1,
        v: [
            ['a', x, y, {
                x: 0,
                y: 0
            }],
        ]
    }];
}

//Č
export function getLatin12(x, y) {
    const tx = -68 + x;
    const ty = y;
    return [{
        d: -1,
        v: [
            ['m', 0 + tx, ty, {
                r: getR(0 + tx, ty, 68 - VERTEX_GAP2 + tx, 50 + ty),
                y: 0,
                x: 0
            }],
            ['l', 68 - VERTEX_GAP2 + tx, 50 + ty, {
                r: getR(0 + tx, ty, 68 - VERTEX_GAP2 + tx, 50 + ty),
                y: 0,
                x: 0,
                f: 1,
            }],
            ['l', 68 + VERTEX_GAP2 + tx, 50 + ty, {
                r: getR(68 + VERTEX_GAP2 + tx, 50 + ty, 68 + 68 + tx, ty),
                y: 0,
                x: 0,
                f: 1,
                v: 1
            }],
            ['l', 68 + 68 + tx, ty, {
                y: 0,
                x: 0,
                f: 1
            }]
        ]
    }];
}

//ď
export function getLatin13(x, y) {
    return [{
        d: -1,
        v: [
            ['m', x, y, {
                x: 0,
                y: 0
            }],
            ['l', x, 80 + y, {
                x: 0,
                y: 0,
                f: 1
            }],
        ]
    }];
}
//Ē
export function getLatin14(x, y) {
    return [{
        d: 1,
        v: [
            ['m', x - 50, y, {
                x: 0,
                y: 0
            }],
            ['l', x + 50, y, {
                x: 0,
                y: 0,
                f: 1
            }],
        ]
    }];
}