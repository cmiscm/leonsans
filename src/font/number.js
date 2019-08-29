import {
    generateFontData,
    ROTATE_HORIZONTAL,
    ROTATE_VERTICAL,
    ROTATE_NONE,
    VERTEX_GAP,
    getR,
    getCurveR
} from './util.js';

export const NUMBER = {
    '0': generateFontData(
        660, 270, 360,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 270, 180, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    f: 1
                }],
                ['b', 270, 279.4, 209.6, 360, 135, 360, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 60.4, 360, 0, 279.4, 0, 180, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 0, 80.6, 60.4, 0, 135, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 209.6, 0, 270, 80.6, 270, 180, {
                    r: ROTATE_HORIZONTAL,
                    c: 1
                }],
            ]
        }]
    ),
    '1': generateFontData(
        380, 76, 352,
        15, 15, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 51, {
                    x: -2,
                    y: 2,
                    r: getR(0, 51, 76 - VERTEX_GAP, 0)
                }],
                ['l', 76 - VERTEX_GAP, 0, {
                    r: ROTATE_HORIZONTAL,
                    p: 1
                }],
                ['l', 76, 0, {
                    r: ROTATE_HORIZONTAL,
                    f: 1,
                    v: 1
                }],
                ['l', 76, 352, {
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    '2': generateFontData(
        580, 210, 356,
        0, 0, 2, 2,
        [{
            d: -1,
            v: [
                ['m', 3.9, 68.8, {
                    x: 1.2,
                    y: 1.2,
                    r: getCurveR(3.9, 68.8, 16.7, 29, 54.2, 3.1, 98.2, 0.2, 0)
                }],
                ['b', 16.7, 29, 54.2, 3.1, 98.2, 0.2],
                ['b', 151.8, -3.3, 208.5, 38.3, 198.9, 100.1],
                ['b', 197.1, 111.8, 196.4, 142.4, 101.5, 235.2],
                ['b', 11.4, 323.2, 0, 356 - VERTEX_GAP, 0, 356 - VERTEX_GAP, {
                    r: ROTATE_NONE
                }],
                ['l', 0, 356 - VERTEX_GAP, {
                    r: ROTATE_VERTICAL,
                    p: 1
                }],
                ['l', 0, 356, {
                    r: ROTATE_VERTICAL,
                    f: 1,
                    v: 1
                }],
                ['l', 210, 356, {
                    x: -0.5,
                    f: 1
                }],
            ]
        }]
    ),
    '3': generateFontData(
        580, 222.1, 360,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 10.7, 66.3, {
                    r: getCurveR(10.7, 66.3, 11.2, 64.8, 11.7, 63.3, 12.3, 61.8, 0)
                }],
                ['b', 11.2, 64.8, 11.7, 63.3, 12.3, 61.8, {
                    r: ROTATE_NONE
                }],
                ['b', 25.8, 25.9, 64.5, 0, 110.1, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 167, 0, 213.1, 40.3, 213.1, 90, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 213.1, 139.7, 167, 180, 110.1, 179.9, {
                    r: ROTATE_VERTICAL,
                    f: 1
                }],
                ['l', 100.1, 179.9, {
                    x: -5,
                    y: 1,
                    r: ROTATE_VERTICAL,
                    f: 1
                }],
                ['l', 110.1, 180, {
                    r: ROTATE_VERTICAL,
                    p: 1
                }],
                ['b', 172, 180, 222.1, 220.3, 222.1, 270, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 222.1, 319.7, 172, 360, 110.1, 360, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 56.9, 360, 12.4, 330.2, 1, 290.3, {
                    f: 1
                }],
            ]
        }]
    ),
    '4': generateFontData(
        596, 236, 352,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 175, 352, {
                    y: 0,
                    f: 1
                }],
                ['l', 175, 0, {
                    f: 1
                }],
                ['l', 175 - VERTEX_GAP, 0, {
                    r: ROTATE_VERTICAL,
                    p: 1,
                    v: 1
                }],
                ['l', 0, 276 - VERTEX_GAP, {
                    r: ROTATE_HORIZONTAL,
                    p: 1
                }],
                ['l', 0, 276, {
                    r: ROTATE_VERTICAL,
                    f: 1,
                    v: 1
                }],
                ['l', 236, 276, {
                    x: -0.5
                }],
            ]
        }]
    ),
    '5': generateFontData(
        596, 208.5, 356,
        0, -5, -2, -2,
        [{
            d: 1,
            v: [
                ['m', 0, 295.7, {
                    r: getCurveR(0, 295.7, 15.3, 333.8, 52.2, 356.2, 97.5, 356, 0),
                    f: 1
                }],
                ['b', 15.3, 333.8, 52.2, 356.2, 97.5, 356, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 159.1, 355.7, 206.1, 306.9, 208.5, 240.8, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 210.9, 173.9, 162.7, 120.8, 97.5, 125.6, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 59.4, 128.4, 25.5, 145.8, 5.6, 176.4, {
                    f: 1
                }],
                ['l', 5.6, 176.4, {
                    r: ROTATE_NONE
                }],
                ['l', 5.6 - VERTEX_GAP, 176.4, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    v: 1
                }],
                ['l', 11.5, 0, {
                    r: ROTATE_VERTICAL,
                    f: 1
                }],
                ['l', 193.5, 0, {
                    x: -0.5
                }],
            ]
        }]
    ),
    '6': generateFontData(
        596, 215.8, 360,
        0, -2, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 7.6, 272.3, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    f: 1
                }],
                ['b', 6.4, 265.8, 5.8, 259.1, 5.8, 252.2, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 5.8, 192.6, 52.8, 144.2, 110.8, 144.2, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 168.7, 144.2, 215.8, 192.6, 215.8, 252.2, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 215.8, 311.9, 168.7, 360, 110.8, 360, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 59.5, 360, 16.8, 322.4, 7.6, 272.4, {
                    r: ROTATE_NONE
                }],
                ['b', 7.6, 272.4, -44.1, 8.8, 122.2, 0.2],
                ['b', 165.5, -2.1, 193.8, 21, 212.1, 56.4],
            ]
        }]
    ),
    '7': generateFontData(
        540, 213, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 213, 0, {
                    r: ROTATE_VERTICAL,
                    f: 1
                }],
                ['l', 213, 0.1, {
                    r: ROTATE_NONE
                }],
                ['l', 72.7, 352, {
                    y: 0.1,
                    f: 1
                }],
            ]
        }]
    ),
    '8': generateFontData(
        596, 224, 360,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 112, 180, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    f: 1
                }],
                ['b', 50.1, 180, 0, 220.3, 0, 270, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 0, 319.7, 50.1, 360, 112, 360, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 173.9, 360, 224, 319.7, 224, 270, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 224, 220.3, 173.9, 180, 112, 180, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 55.1, 180, 9, 139.7, 9, 90, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 9, 40.3, 55.1, 0, 112, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 168.9, 0, 215, 40.3, 215, 90, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 215, 139.7, 168.9, 180, 112, 180, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    f: 1
                }],
            ]
        }]
    ),
    '9': generateFontData(
        596, 215.8, 360,
        0, -2, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 208.2, 88, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    f: 1
                }],
                ['b', 209.4, 94.5, 210, 101.2, 210, 108, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 210, 167.6, 163, 216, 105, 216, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 47, 216, -0, 167.6, 0, 108, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 0, 48.4, 47, -0, 105, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 156.3, 0, 199, 37.8, 208.2, 87.8, {
                    r: ROTATE_NONE
                }],
                ['b', 208.2, 87.8, 259.8, 351.4, 93.5, 360],
                ['b', 50.3, 362.3, 21.9, 339.2, 3.6, 303.8, {
                    f: 1
                }],
            ]
        }]
    )
};