import {
    generateFontData,
    ROTATE_HORIZONTAL,
    ROTATE_VERTICAL,
    ROTATE_NONE,
    getR,
    getCurveR
} from './util.js';
import {
    getLatin1,
    getLatin2,
    getLatin3,
    getLatin4,
    getLatin5,
    getLatin6,
    getLatin7,
    getLatin8,
    getLatin9,
    getLatin10,
    getLatin11,
    getLatin12,
    getLatin13,
    getLatin14
} from './latinutil.js';
import {
    DATA_UA,
    DATA_UC,
    DATA_UD,
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
    DATA_LD,
    DATA_LE,
    DATA_LG,
    DATA_LH,
    DATA_LN,
    DATA_LO,
    DATA_LS,
    DATA_LU,
    DATA_LY
} from './lower.js';

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
        ['b', 84.5 - 115.9, 336.5 + 127, 0, 308.1 + 127, 0, 269.4 + 127, {
            x: 0.4,
            y: 0.63,
            r: ROTATE_HORIZONTAL
        }],
        ['l', 0, 0 + 127 + 3, {
            y: -3
        }],
    ]
}];

export const LATIN = {
    'Æ': generateFontData(
        996, 426, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 426.0, 0.0, {
                    x: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 234.0, 0.0, {
                    x: 0.5,
                    f: 1,
                    r: getR(234.0, 0.0, .0, 352.0),
                }],
                ['l', 0.0, 352.0, {
                    x: 0.5,
                    y: 0.5,
                    f: 1
                }],
            ]
        }, {
            d: -1,
            v: [
                ['m', 234.0, 0.0, {
                    x: 0.5,
                    p: 1,
                }],
                ['l', 234.0, 352.0, {
                    f: 1,
                    x: 0.5
                }],
                ['l', 426.0, 352.0, {
                    f: 1,
                    x: 0
                }]
            ]
        }, {
            d: -1,
            v: [
                ['m', 76.4, 237.0, {
                    r: ROTATE_VERTICAL,
                    p: 1,
                }],
                ['l', 234.0, 237.0, {
                    f: 1,
                    r: ROTATE_VERTICAL,
                    p: 1,
                }]
            ]
        }, {
            d: -1,
            v: [
                ['m', 234.0, 164.0, {
                    r: ROTATE_VERTICAL,
                    p: 1,
                    x: 0.5
                }],
                ['l', 414.0, 164.0, {
                    f: 1,
                    x: 0
                }]
            ]
        }]
    ),
    'æ': generateFontData(
        1000, 232 + 225.5, 232,
        0, 0, -64, -64,
        [{
            d: -1,
            v: [
                ['m', 232, 8, {
                    y: -3.4,
                    r: ROTATE_HORIZONTAL
                }],
                ['l', 232, 116, {
                    r: ROTATE_NONE
                }],
                ['b', 232, 180.1, 180.1, 232, 116, 232, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 51.9, 232, 0, 180.1, 0, 116, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 0, 51.9, 51.9, 0, 116, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 180.1, 0, 232, 51.9, 232, 116, {
                    r: ROTATE_HORIZONTAL
                }],
                ['l', 232, 224, {
                    y: -0.1,
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }]
            ]
        }, {
            d: 1,
            v: [
                ['m', 211.6 + 232, 182.9, {
                    r: getCurveR(211.6 + 232, 182.9, 191.1 + 232, 213.2, 156.1 + 232, 233.1, 116.5 + 232, 233.1, 0),
                    f: 1
                }],
                ['b', 191.1 + 232, 213.2, 156.1 + 232, 233.1, 116.5 + 232, 233.1, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 52.4 + 232, 233.1, 0.5 + 232, 181.2, 0.5 + 232, 117.1, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 0.5 + 232, 53, 52.4 + 232, 1.1, 116.5 + 232, 1.1, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 176.4 + 232, 1.1, 224.9 + 232, 47.2, 225.5 + 232, 106.1, {
                    r: ROTATE_HORIZONTAL
                }],
                ['l', 0.5 + 232, 106.1, {
                    r: ROTATE_HORIZONTAL,
                    p: 1
                }],
            ]
        }]
    ),
    'À': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin1(145, -50))
    ),
    'Á': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin2(145, -50))
    ),
    'Â': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin3(145, -100))
    ),
    'Ã': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin4(145, -90))
    ),
    'Ä': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin5(145, -70))
    ),
    'Å': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin7(0, 0))
    ),
    'Ă': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin6(145, -110))
    ),
    'Ą': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA)).concat(getLatin10(290, 352))
    ),
    'à': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin1(116, -60))
    ),
    'á': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin2(116, -60))
    ),
    'â': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin3(116, -110))
    ),
    'ã': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin4(116, -100))
    ),
    'ä': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin5(116, -80))
    ),
    'å': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin7(-30, 0))
    ),
    'ă': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin6(116, -120))
    ),
    'ą': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA)).concat(getLatin10(232, 224))
    ),
    'Ć': generateFontData(
        700, 293.1, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin1(180, -60))
    ),
    'Ĉ': generateFontData(
        700, 293.1, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin3(180, -110))
    ),
    'Ċ': generateFontData(
        700, 293.1, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin11(180, -80))
    ),
    'Č': generateFontData(
        700, 293.1, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin12(180, -110))
    ),
    'Ç': generateFontData(
        700, 293.1, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UC)).concat(getLatin9(180, 360))
    ),
    'ć': generateFontData(
        520, 212.1, 233.1,
        2, -10, -64, -64,
        JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin1(116.5, 1.1 - 70))
    ),
    'ĉ': generateFontData(
        520, 212.1, 233.1,
        2, -10, -64, -64,
        JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin3(116.5, 1.1 - 120))
    ),
    'ċ': generateFontData(
        520, 212.1, 233.1,
        2, -10, -64, -64,
        JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin11(116.5, 1.1 - 90))
    ),
    'č': generateFontData(
        520, 212.1, 233.1,
        2, -10, -64, -64,
        JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin12(116.5, 1.1 - 120))
    ),
    'ç': generateFontData(
        520, 212.1, 233.1,
        2, -10, -64, -64,
        JSON.parse(JSON.stringify(DATA_LC)).concat(getLatin9(116.5, 233.1))
    ),
    'Đ': generateFontData(
        721, 270, 352,
        -10, -10, 0, 0,
        JSON.parse(JSON.stringify(DATA_UD)).concat(getLatin8(0, 352 / 2))
    ),
    'Ď': generateFontData(
        721, 270, 352,
        -10, -10, 0, 0,
        JSON.parse(JSON.stringify(DATA_UD)).concat(getLatin12(100, -110))
    ),
    'ď': generateFontData(
        600, 232, 352,
        10, 2, 0, 0,
        JSON.parse(JSON.stringify(DATA_LD)).concat(getLatin13(300, 0))
    ),
    'đ': generateFontData(
        600, 232, 352,
        10, 2, 0, 0,
        JSON.parse(JSON.stringify(DATA_LD)).concat(getLatin8(180, 40))
    ),
    'È': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin1(96, -60))
    ),
    'É': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin2(96, -60))
    ),
    'Ê': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin3(96, -110))
    ),
    'Ë': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin5(96, -80))
    ),
    'Ē': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin14(96, -80))
    ),
    'Ĕ': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin6(96, -120))
    ),
    'Ė': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin11(96, -80))
    ),
    'Ě': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE)).concat(getLatin12(96, -110))
    ),
    'è': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin1(112, -60))
    ),
    'é': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin2(112, -60))
    ),
    'ê': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin3(112, -110))
    ),
    'ë': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin5(112, -80))
    ),
    'ē': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin14(112, -80))
    ),
    'ĕ': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin6(112, -120))
    ),
    'ė': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin11(112, -90))
    ),
    'ě': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE)).concat(getLatin12(112, -120))
    ),
    'Ĝ': generateFontData(
        840, 352, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UG)).concat(getLatin3(180, -110))
    ),
    'Ğ': generateFontData(
        840, 352, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UG)).concat(getLatin6(180, -120))
    ),
    'Ġ': generateFontData(
        840, 352, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UG)).concat(getLatin11(180, -80))
    ),
    'Ģ': generateFontData(
        840, 352, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UG)).concat(getLatin9(180, 360))
    ),
    'ĝ': generateFontData(
        600, 232, 338,
        10, 2, -117, -117,
        JSON.parse(JSON.stringify(DATA_LG)).concat(getLatin3(116, 1.1 - 120))
    ),
    'ğ': generateFontData(
        600, 232, 338,
        10, 2, -117, -117,
        JSON.parse(JSON.stringify(DATA_LG)).concat(getLatin6(116, -120))
    ),
    'ġ': generateFontData(
        600, 232, 338,
        10, 2, -117, -117,
        JSON.parse(JSON.stringify(DATA_LG)).concat(getLatin11(116, -90))
    ),
    'ģ': generateFontData(
        600, 232, 338,
        10, 2, -117, -117,
        JSON.parse(JSON.stringify(DATA_LG)).concat(getLatin2(116, -70))
    ),
    'Ĥ': generateFontData(
        684, 232, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UH)).concat(getLatin3(232 / 2, -110))
    ),
    'ĥ': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LH)).concat(getLatin3(182 / 2, -110))
    ),
    'Ì': generateFontData(
        249, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin1(0, -60))
    ),
    'Í': generateFontData(
        249, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin2(0, -60))
    ),
    'Î': generateFontData(
        249, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin3(0, -110))
    ),
    'Ï': generateFontData(
        249, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UI)).concat(getLatin5(0, -80))
    ),
    'ì': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin1(0, -60 + 130))
    ),
    'í': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin2(0, -60 + 130))
    ),
    'î': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin3(0, -120 + 130))
    ),
    'ï': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LI)).concat(getLatin5(0, -80 + 130))
    ),
    'Ĵ': generateFontData(
        472, 172.5, 355.5,
        10, 20, -2, -2,
        JSON.parse(JSON.stringify(DATA_UJ)).concat(getLatin3(172.5, -110))
    ),
    'ĵ': generateFontData(
        220, 115.9, 352,
        -60, -60, 0, 0,
        JSON.parse(JSON.stringify(DATA_LJ)).concat(getLatin3(0, -110 + 130))
    ),
    'Ñ': generateFontData(
        721, 250, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UN)).concat(getLatin4(250 / 2, -100))
    ),
    'ñ': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LN)).concat(getLatin4(182 / 2, -100 + 130))
    ),
    'Ò': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin1(180, -60))
    ),
    'Ó': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin2(180, -60))
    ),
    'Ô': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin3(180, -110))
    ),
    'Õ': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin4(180, -100))
    ),
    'Ö': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO)).concat(getLatin5(180, -80))
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
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin1(116, -60))
    ),
    'ó': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin2(116, -60))
    ),
    'ô': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin3(116, -110))
    ),
    'õ': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin4(116, -100))
    ),
    'ö': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO)).concat(getLatin5(116, -80))
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
    'Ŝ': generateFontData(
        560, 224, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_US)).concat(getLatin3(112.4, -110))
    ),
    'ŝ': generateFontData(
        400, 224 * 0.642, 360 * 0.642,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LS)).concat(getLatin3(112.4 * 0.642, -110))
    ),
    'Ş': generateFontData(
        560, 224, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_US)).concat(getLatin9(110.3, 360))
    ),
    'ş': generateFontData(
        400, 224 * 0.642, 360 * 0.642,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LS)).concat(getLatin9(110.3 * 0.642, 360 * 0.642))
    ),
    'Ù': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin1(125, -50))
    ),
    'Ú': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin2(125, -50))
    ),
    'Û': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin3(125, -100))
    ),
    'Ŭ': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin6(125, -110))
    ),
    'Ü': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU)).concat(getLatin5(125, -70))
    ),
    'ù': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin1(91, -60 + 130))
    ),
    'ú': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin2(91, -60 + 130))
    ),
    'û': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin3(91, -110 + 130))
    ),
    'ŭ': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin6(91, -120 + 130))
    ),
    'ü': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU)).concat(getLatin5(91, -80 + 130))
    ),
    'Ý': generateFontData(
        673, 270, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UY)).concat(getLatin2(135, -60))
    ),
    'ý': generateFontData(
        500, 225.5, 331.5,
        10, 10, -119, -119,
        JSON.parse(JSON.stringify(DATA_LY)).concat(getLatin2(116.3, -60))
    ),
    'ÿ': generateFontData(
        500, 225.5, 331.5,
        10, 10, -119, -119,
        JSON.parse(JSON.stringify(DATA_LY)).concat(getLatin5(116.3, -90))
    ),
};