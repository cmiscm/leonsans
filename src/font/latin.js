import {
    generateFontData,
    ROTATE_HORIZONTAL,
    ROTATE_VERTICAL,
    VERTEX_GAP2,
    getR,
    getCurveR
} from './util.js';
import {
    DATA_UA,
    DATA_UC,
    DATA_UE,
    DATA_UG,
    DATA_UH,
    DATA_UI,
    DATA_UJ,
    DATA_UN,
    DATA_UO,
    DATA_US,
    DATA_UU,
    DATA_UY
} from './upper.js';
import {
    DATA_LA,
    DATA_LC,
    DATA_LE,
    DATA_LG,
    DATA_LH,
    DATA_LN,
    DATA_LO,
    DATA_LS,
    DATA_LU,
    DATA_LY
} from './lower.js';

function getLatin1(x, y) {
    const tx = 140 + x;
    const ty = -390 - 78 + y;
    return [{
        d: -1,
        v: [
            ['m', -40 + tx, 350 + ty, {
                x: 0,
                y: 0,
                r: getR(-40 + tx, 350 + ty, 0 + tx, 60 + 350 + ty)
            }],
            ['l', 0 + tx, 60 + 350 + ty, {
                x: 0,
                y: 0,
                f: 1
            }],
        ]
    }];
}

function getLatin2(x, y) {
    const tx = 150 + x;
    const ty = -390 - 78 + y;
    return [{
        d: -1,
        v: [
            ['m', 40 + tx, 350 + ty, {
                x: 0,
                y: 0,
                r: getR(40 + tx, 350 + ty, 0 + tx, 60 + 350 + ty)
            }],
            ['l', 0 + tx, 60 + 350 + ty, {
                x: 0,
                y: 0,
                f: 1
            }],
        ]
    }];
}

function getLatin3(x, y) {
    const tx = 77 + x;
    const ty = -30 - 78 + y;
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

function getLatin4(x, y) {
    const tx = 65 + x;
    const ty = -16 - 78 + y;
    const scale = 0.8;
    return [{
        d: 1,
        v: [
            ['m', 199.4 * scale + tx, 20.7 * scale + ty, {
                x: -1,
                y: -0.2,
                r: getCurveR(199.4 * scale + tx, 20.7 * scale + ty, 187.6 * scale + tx, 36.6 * scale + ty, 168.2 * scale + tx, 47.1 * scale + ty, 148.2 * scale + tx, 47.1 * scale + ty, 0),
                f: 1
            }],
            ['b', 187.6 * scale + tx, 36.6 * scale + ty, 168.2 * scale + tx, 47.1 * scale + ty, 148.2 * scale + tx, 47.1 * scale + ty, {
                x: -1,
                y: -0.2,
                r: ROTATE_VERTICAL
            }],
            ['b', 129.1 * scale + tx, 47.1 * scale + ty, 112.1 * scale + tx, 36.6 * scale + ty, 95.3 * scale + tx, 25.5 * scale + ty, {
                x: -1,
                y: -0.2
            }],
            ['b', 76.8 * scale + tx, 13.2 * scale + ty, 59.1 * scale + tx, 0 * scale + ty, 39.6 * scale + tx, 0 * scale + ty, {
                x: -1,
                y: -0.2,
                r: ROTATE_VERTICAL
            }],
            ['b', 22.3 * scale + tx, 0 * scale + ty, 10.9 * scale + tx, 8.9 * scale + ty, 0 * scale + tx, 20 * scale + ty, {
                x: -1,
                y: -0.2
            }],
        ]
    }];
}

function getLatin5(x, y) {
    return [{
        d: 1,
        v: [
            ['a', 145 - 50 + x, -78 + y, {
                x: 0,
                y: 0
            }],
        ]
    }, {
        d: 1,
        v: [
            ['a', 145 + 50 + x, -78 + y, {
                x: 0,
                y: 0
            }],
        ]
    }];
}

function getLatin6(x, y) {
    const tx = x;
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

function getLatin7(x, y) {
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

const DATA_LI = [{
    d: 1,
    v: [
        ['m', 0, 352, {
            y: 0,
            f: 1
        }],
        ['l', 0, 130, {
            y: -3
        }],
    ]
}];

const DATA_LJ = [{
    d: 1,
    v: [
        ['m', 0 - 115.9, 317 + 127, {
            x: 0.4,
            y: 0.63,
            r: getCurveR(0 - 115.9, 317 + 127, 12.6 - 115.9, 327.4 + 127, 29.6 - 115.9, 333.2 + 127, 45.9 - 115.9, 334.2 + 127, 0),
            f: 1
        }],
        ['b', 12.6 - 115.9, 327.4 + 127, 29.6 - 115.9, 333.2 + 127, 45.9 - 115.9, 334.2 + 127, {
            x: 0.4,
            y: 0.63,
            r: ROTATE_VERTICAL
        }],
        ['b', 84.5 - 115.9, 336.5 + 127, 115.9 - 115.9, 308.1 + 127, 115.9 - 115.9, 269.4 + 127, {
            x: 0.4,
            y: 0.63,
            r: ROTATE_HORIZONTAL
        }],
        ['l', 115.9 - 115.9, 0 + 127 + 3, {
            y: -3
        }],
    ]
}];

export const LATIN = {
    'À': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin1(0, 20))
    ),
    'Á': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin2(0, 20))
    ),
    'Â': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin3(0, 0))
    ),
    'Ã': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin4(0, 20))
    ),
    'Ä': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin5(0, 20))
    ),
    'Å': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin7(0, 0))
    ),
    'à': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin1(-29, -15))
    ),
    'á': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin2(-29, -15))
    ),
    'â': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin3(-29, -15))
    ),
    'ã': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin4(-29, -15))
    ),
    'ä': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin5(9, -15))
    ),
    'å': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin7(-30, 0))
    ),
    'È': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin1(-40, 0))
    ),
    'É': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin2(-40, 0))
    ),
    'Ê': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin3(-49, 0))
    ),
    'Ë': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin5(-40, 0))
    ),
    'è': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin1(-28, -14))
    ),
    'é': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin2(-28, -14))
    ),
    'ê': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin3(-28, -14))
    ),
    'ë': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin5(-28, -14))
    ),
    'Ì': generateFontData(
        249, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin1(-145, 0))
    ),
    'Í': generateFontData(
        249, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin2(-145, 0))
    ),
    'Î': generateFontData(
        249, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin3(-145, 0))
    ),
    'Ï': generateFontData(
        249, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin5(-145, 0))
    ),
    'ì': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin1(-145, 109))
    ),
    'í': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin2(-145, 109))
    ),
    'î': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin3(-145, 109))
    ),
    'ï': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin5(-145, 109))
    ),
    'Ñ': generateFontData(
        721, 250, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UN)).concat(getLatin4(-20, 0))
    ),
    'ñ': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LN)).concat(getLatin4(-54, 109))
    ),
    'Ò': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin1(35, 4))
    ),
    'Ó': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin2(35, 4))
    ),
    'Ô': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin3(35, 4))
    ),
    'Õ': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin4(35, 4))
    ),
    'Ö': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin5(35, 4))
    ),
    'Ø': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat([{
            d: 1,
            v: [
                ['m', 0, 360, {
                    r: getR(0, 360, 360, 0),
                    f: 1,
                    x: 0,
                    y: 1
                }],
                ['l', 360, 0, {
                    x: 0,
                    y: 1
                }]
            ]
        }])
    ),
    'ò': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin1(-29, -15))
    ),
    'ó': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin2(-29, -15))
    ),
    'ô': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin3(-29, -15))
    ),
    'õ': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin4(-29, -15))
    ),
    'ö': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin5(-29, -15))
    ),
    'ø': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat([{
            d: 1,
            v: [
                ['m', 0, 232, {
                    r: getR(0, 232, 232, 0),
                    f: 1,
                    x: 0,
                    y: 1
                }],
                ['l', 232, 0, {
                    x: 0,
                    y: 1
                }]
            ]
        }])
    ),
    'Ù': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin1(-20, 1))
    ),
    'Ú': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin2(-20, 1))
    ),
    'Û': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin3(-20, 1))
    ),
    'Ŭ': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin6(69, -107))
    ),
    'Ü': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin5(-20, 1))
    ),
    'ù': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin1(-54, 109))
    ),
    'ú': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin2(-54, 109))
    ),
    'û': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin3(-54, 109))
    ),
    'ŭ': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin6(34, 0))
    ),
    'ü': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin5(-54, 109))
    ),
    'Ý': generateFontData(
        673, 270, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UY)).concat(getLatin2(-10, 0))
    ),
    'ý': generateFontData(
        500, 225.5, 331.5,
        10, 10, -119, -119,
        JSON.parse(JSON.stringify(DATA_LY)).concat(getLatin2(-30, -20))
    ),
    'ÿ': generateFontData(
        500, 225.5, 331.5,
        10, 10, -119, -119,
        JSON.parse(JSON.stringify(DATA_LY)).concat(getLatin5(-30, -20))
    ),
    'Ĉ': generateFontData(
        700, 293.1, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin3(20, 4))
    ),
    'Ĝ': generateFontData(
        840, 352, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UG)).concat(getLatin3(30, 4))
    ),
    'Ĥ': generateFontData(
        684, 232, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UH)).concat(getLatin3(-29, 0))
    ),
    'Ĵ': generateFontData(
        472, 172.5, 355.5,
        10, 20, -2, -2,
        JSON.parse(JSON.stringify(DATA_UJ)).concat(getLatin3(-50, 0))
    ),
    'Ŝ': generateFontData(
        560, 224, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_US)).concat(getLatin3(-30, 4))
    ),
    'ĉ': generateFontData(
        520, 212.1, 233.1,
        2, -10, -64, -64,
        JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin3(-29, -14))
    ),
    'ĝ': generateFontData(
        600, 232, 338,
        10, 2, -117, -117,
        JSON.parse(JSON.stringify(DATA_LG)).concat(getLatin3(-29, -15))
    ),
    'ĥ': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LH)).concat(getLatin3(-52, 9))
    ),
    'ĵ': generateFontData(
        220, 115.9, 352,
        -60, -60, 0, 0,
        JSON.parse(JSON.stringify(DATA_LJ)).concat(getLatin3(-155, 109))
    ),
    'ŝ': generateFontData(
        400, 224 * 0.642, 360 * 0.642,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LS)).concat(getLatin3(-73, -15))
    ),
};