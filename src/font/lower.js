import {
    generateFontData,
    ROTATE_HORIZONTAL,
    ROTATE_VERTICAL,
    ROTATE_NONE,
    VERTEX_GAP,
    VERTEX_GAP2,
    getR,
    getCurveR
} from './util.js';

export const DATA_LA = [{
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
}];

export const DATA_LC = [{
    d: 1,
    v: [
        ['m', 212.1, 182.9, {
            r: getCurveR(212.1, 182.9, 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, 0),
            f: 1
        }],
        ['b', 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, {
            r: ROTATE_VERTICAL
        }],
        ['b', 52.4, 233.1, 0.5, 181.2, 0.5, 117.1, {
            r: ROTATE_HORIZONTAL
        }],
        ['b', 0.5, 53, 52.4, 1.1, 116.5, 1.1, {
            r: ROTATE_VERTICAL
        }],
        ['b', 156.1, 1.1, 191.1, 21, 212.1, 51.3],
    ]
}];

export const DATA_LE = [{
    d: 1,
    v: [
        ['m', 211.6, 182.9, {
            r: getCurveR(211.6, 182.9, 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, 0),
            f: 1
        }],
        ['b', 191.1, 213.2, 156.1, 233.1, 116.5, 233.1, {
            r: ROTATE_VERTICAL
        }],
        ['b', 52.4, 233.1, 0.5, 181.2, 0.5, 117.1, {
            r: ROTATE_HORIZONTAL
        }],
        ['b', 0.5, 53, 52.4, 1.1, 116.5, 1.1, {
            r: ROTATE_VERTICAL
        }],
        ['b', 176.4, 1.1, 224.9, 47.2, 225.5, 106.1, {
            r: ROTATE_HORIZONTAL
        }],
        ['l', 0.5, 106.1, {
            r: ROTATE_HORIZONTAL,
            p: 1
        }],
    ]
}];

export const DATA_LG = [{
    d: -1,
    v: [
        ['m', 232, 5, {
            y: -2.8
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
        ['l', 232, 222],
        ['b', 234.5, 300.3, 180.2, 338.5, 116, 338, {
            y: 0.64,
            r: ROTATE_VERTICAL
        }],
        ['b', 76.2, 337.7, 36.6, 320.7, 15.7, 290.1, {
            y: 0.64,
            f: 1
        }],
    ]
}];

export const DATA_LH = [{
    d: -1,
    v: [
        ['m', 0, 0, {
            y: 0,
            r: ROTATE_HORIZONTAL
        }],
        ['l', 0, 352, {
            y: 0,
            f: 1
        }],
    ]
}, {
    d: -1,
    v: [
        ['m', 0, 91 + 123, {
            r: ROTATE_NONE
        }],
        ['b', 0, 40.7 + 123, 40.7, 0 + 123, 91, 0 + 123, {
            r: ROTATE_VERTICAL
        }],
        ['b', 141.3, 0 + 123, 182, 40.7 + 123, 182, 91 + 123, {
            r: ROTATE_HORIZONTAL
        }],
        ['l', 182, 352, {
            y: 0,
            f: 1
        }],
    ]
}];


export const DATA_LN = [{
    d: -1,
    v: [
        ['m', 0, 130, {
            y: -3.3
        }],
        ['l', 0, 352, {
            y: 0,
            f: 1
        }],
    ]
}, {
    d: -1,
    v: [
        ['m', 0, 91 + 123, {
            y: 0,
            r: ROTATE_HORIZONTAL,
            p: 1
        }],
        ['b', 0, 40.7 + 123, 40.7, 0 + 123, 91, 0 + 123, {
            r: ROTATE_VERTICAL
        }],
        ['b', 141.3, 0 + 123, 182, 40.7 + 123, 182, 91 + 123, {
            r: ROTATE_HORIZONTAL
        }],
        ['l', 182, 352, {
            y: 0,
            f: 1
        }],
    ]
}];

export const DATA_LO = [{
    d: 1,
    v: [
        ['m', 232, 116, {
            r: ROTATE_HORIZONTAL,
            p: 1,
            f: 1
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
            r: ROTATE_HORIZONTAL,
            c: 1
        }],
    ]
}];

export const DATA_LS = [{
    d: 1,
    v: [
        ['m', 0 * 0.642, 295.4 * 0.642, {
            r: getCurveR(0 * 0.642, 295.4 * 0.642, 17.6 * 0.642, 332.1 * 0.642, 58.3 * 0.642, 360 * 0.642, 110.3 * 0.642, 360 * 0.642, 0),
            f: 1
        }],
        ['b', 17.6 * 0.642, 332.1 * 0.642, 58.3 * 0.642, 360 * 0.642, 110.3 * 0.642, 360 * 0.642],
        ['b', 173.9 * 0.642, 360 * 0.642, 223.8 * 0.642, 329.6 * 0.642, 224 * 0.642, 271 * 0.642],
        ['b', 224.2 * 0.642, 214.7 * 0.642, 180.7 * 0.642, 189.6 * 0.642, 112.4 * 0.642, 173.3 * 0.642],
        ['b', 47.3 * 0.642, 157.7 * 0.642, 10.9 * 0.642, 130.6 * 0.642, 12 * 0.642, 84.4 * 0.642],
        ['b', 13.3 * 0.642, 29.8 * 0.642, 57.3 * 0.642, 0 * 0.642, 114.8 * 0.642, 0 * 0.642],
        ['b', 158.4 * 0.642, 0 * 0.642, 196.5 * 0.642, 20.5 * 0.642, 212 * 0.642, 51.3 * 0.642],
    ]
}];

export const DATA_LU = [{
        d: -1,
        v: [
            ['m', 0, 130, {
                y: -3
            }],
            ['l', 0, 0 + 265, {
                r: ROTATE_HORIZONTAL
            }],
            ['b', 0, 50.3 + 265, 40.7, 91 + 265, 91, 91 + 265, {
                r: ROTATE_VERTICAL
            }],
            ['b', 141.3, 91 + 265, 182, 50.3 + 265, 182, 0 + 265, {
                r: ROTATE_HORIZONTAL,
                p: 1,
                f: 1,
            }],
        ]
    },
    {
        d: -1,
        v: [
            ['m', 182, 130, {
                y: -3
            }],
            ['l', 182, 352, {
                y: 0,
                f: 1
            }],
        ]
    }
];

export const DATA_LY = [{
        d: -1,
        v: [
            ['m', 225.5, 0, {
                y: -3,
                r: getR(225.5, 0, 116.3, 248.8)
            }],
            ['l', 116.3, 248.8, {
                x: 0.5,
                y: 0.64
            }],
            ['b', 71.8, 349.6, 0, 331.5, 0, 331.5, {
                x: 0.5,
                y: 0.64,
                r: getCurveR(0, 331.5, 71.8, 349.6, 116.3, 248.8, 0, 331.5, 0),
                f: 1
            }],
        ]
    },
    {
        d: -1,
        v: [
            ['m', 3.2, 0, {
                y: -3,
                r: getR(3.2, 0, 125.7, 226.6)
            }],
            ['l', 125.7, 226.6, {
                p: 1,
                f: 1
            }],
        ]
    }
];

export const LOWER = {
    'a': generateFontData(
        600, 232, 232,
        10, 2, -64, -64,
        JSON.parse(JSON.stringify(DATA_LA))
    ),
    'b': generateFontData(
        600, 232, 352,
        -10, -2, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    y: 0,
                    r: ROTATE_HORIZONTAL
                }],
                ['l', 0, 116 + 123, {
                    r: ROTATE_NONE
                }],
                ['b', 0, 180.1 + 123, 51.9, 232 + 123, 116, 232 + 123, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 180.1, 232 + 123, 232, 180.1 + 123, 232, 116 + 123, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 232, 51.9 + 123, 180.1, 0 + 123, 116, 0 + 123, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 51.9, 0 + 123, 0, 51.9 + 123, 0, 116 + 123, {
                    r: ROTATE_HORIZONTAL
                }],
                ['l', 0, 352, {
                    y: 0,
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }]

            ]
        }, ]
    ),
    'c': generateFontData(
        520, 212.1, 233.1,
        2, -10, -64, -64,
        JSON.parse(JSON.stringify(DATA_LC))
    ),
    'd': generateFontData(
        600, 232, 352,
        10, 2, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 232, 0, {
                    y: 0
                }],
                ['l', 232, 116 + 123, {
                    r: ROTATE_NONE
                }],
                ['b', 232, 180.1 + 123, 180.1, 232 + 123, 116, 232 + 123, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 51.9, 232 + 123, 0, 180.1 + 123, 0, 116 + 123, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 0, 51.9 + 123, 51.9, 0 + 123, 116, 0 + 123, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 180.1, 0 + 123, 232, 51.9 + 123, 232, 116 + 123, {
                    r: ROTATE_HORIZONTAL
                }],
                ['l', 232, 352, {
                    y: 0,
                    f: 1
                }],
            ]
        }, ]
    ),
    'e': generateFontData(
        570, 225.5, 233.1,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LE))
    ),
    'f': generateFontData(
        356, 232, 352,
        -40, -40, 0, 0,
        [{
                d: -1,
                v: [
                    ['m', 166.6, 33, {
                        x: 0.5,
                        r: getCurveR(166.6, 33, 159.3, 13.1, 139.2, 0, 116.9, 0, 0)
                    }],
                    ['b', 159.3, 13.1, 139.2, 0, 116.9, 0, {
                        r: ROTATE_VERTICAL
                    }],
                    ['b', 88.2, 0, 65, 23.2, 65, 51.9, {
                        r: ROTATE_HORIZONTAL
                    }],
                    ['l', 65, 352, {
                        y: 0,
                        f: 1
                    }],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 0, 130, {
                        x: 0,
                        r: ROTATE_VERTICAL
                    }],
                    ['l', 154, 130, {
                        x: 0,
                        f: 1
                    }],
                ]
            }
        ]
    ),
    'g': generateFontData(
        600, 232, 338,
        10, 2, -117, -117,
        JSON.parse(JSON.stringify(DATA_LG))
    ),
    'h': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LH))
    ),
    'i': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['a', 0, 90, {
                    y: -3
                }],
            ]
        }, {
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
        }]
    ),
    'j': generateFontData(
        220, 115.9, 352,
        -60, -60, 0, 0,
        [{
            d: 1,
            v: [
                ['a', 0, 90, {
                    y: -3
                }],
            ]
        }, {
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
        }]
    ),
    'k': generateFontData(
        450, 164, 352,
        -10, -10, 0, 0,
        [{
                d: -1,
                v: [
                    ['m', 0, 0, {
                        y: 0,
                        r: ROTATE_HORIZONTAL
                    }],
                    ['l', 0, 352, {
                        y: 0,
                        f: 1
                    }],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 160, 130, {
                        x: 0.7,
                        y: 0,
                        r: getR(164, 130, 0, 106 + 130 - VERTEX_GAP2),
                        f: 1
                    }],
                    ['l', 0, 106 + 130 - VERTEX_GAP2, {
                        r: ROTATE_VERTICAL,
                        p: 1
                    }],
                    ['l', 0, 106 + 130 + VERTEX_GAP2, {
                        r: ROTATE_VERTICAL,
                        p: 1,
                        v: 1
                    }],
                    ['l', 164, 352, {
                        x: 0.7,
                        y: 0.7,
                        f: 1
                    }],
                ]
            }
        ]
    ),
    'l': generateFontData(
        200, 0, 352,
        0, 0, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 0, 352, {
                    y: 0,
                    f: 1
                }],
                ['l', 0, 0, {
                    y: 0
                }],
            ]
        }]
    ),
    'm': generateFontData(
        740, 150 + 150, 352,
        0, 0, 0, 0,
        [{
                d: -1,
                v: [
                    ['m', 0, 130, {
                        y: -3.6
                    }],
                    ['l', 0, 352, {
                        y: 0,
                        f: 1
                    }],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 0, 75 + 123, {
                        y: 0,
                        r: ROTATE_HORIZONTAL,
                        p: 1
                    }],
                    ['b', 0, 33.6 + 123, 33.6, 0 + 123, 75, 0 + 123, {
                        r: ROTATE_VERTICAL
                    }],
                    ['b', 116.4, 0 + 123, 150, 33.6 + 123, 150, 75 + 123, {
                        r: ROTATE_HORIZONTAL
                    }],
                    ['l', 150, 352, {
                        y: 0,
                        f: 1
                    }],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 0 + 150, 75 + 123, {
                        y: 0,
                        r: ROTATE_HORIZONTAL,
                        p: 1
                    }],
                    ['b', 0 + 150, 33.6 + 123, 33.6 + 150, 0 + 123, 75 + 150, 0 + 123, {
                        r: ROTATE_VERTICAL
                    }],
                    ['b', 116.4 + 150, 0 + 123, 150 + 150, 33.6 + 123, 150 + 150, 75 + 123, {
                        r: ROTATE_HORIZONTAL
                    }],
                    ['l', 150 + 150, 352, {
                        y: 0,
                        f: 1
                    }],
                ]
            }

        ]
    ),
    'n': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LN))
    ),
    'o': generateFontData(
        580, 232, 232,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LO))
    ),
    'p': generateFontData(
        600, 232, 338,
        -10, -2, -117, -117,
        [{
            d: -1,
            v: [
                ['m', 0, 5, {
                    y: -2.8
                }],
                ['l', 0, 116, {
                    r: ROTATE_NONE
                }],
                ['b', 0, 180.1, 51.9, 232, 116, 232, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 180.1, 232, 232, 180.1, 232, 116, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 232, 51.9, 180.1, 0, 116, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 51.9, 0, 0, 51.9, 0, 116, {
                    r: ROTATE_HORIZONTAL
                }],
                ['l', 0, 338, {
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    'q': generateFontData(
        600, 232, 338,
        10, 2, -117, -117,
        [{
            d: -1,
            v: [
                ['m', 232, 5, {
                    y: -2.8
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
                ['l', 232, 338, {
                    y: 0,
                    f: 1
                }],
            ]
        }]
    ),
    'r': generateFontData(
        340, 119.2, 352,
        -20, -20, 0, 0,
        [{
                d: -1,
                v: [
                    ['m', 0, 130, {
                        y: -3.3
                    }],
                    ['l', 0, 352, {
                        y: 0,
                        f: 1
                    }],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 0, 57 + 124, {
                        r: ROTATE_HORIZONTAL,
                        p: 1,
                    }],
                    ['b', 0, 57 + 124, 41.9, -22.8 + 124, 119.2, 4.5 + 124, {
                        x: 0,
                        y: 2,
                        r: getCurveR(119.2, 4.5 + 124, 41.9, -22.8 + 124, 0, 57 + 124, 119.2, 4.5 + 124, 0),
                        f: 1
                    }],
                ]
            }

        ]
    ),
    's': generateFontData(
        400, 224 * 0.642, 360 * 0.642,
        0, 0, -64, -64,
        JSON.parse(JSON.stringify(DATA_LS))
    ),
    't': generateFontData(
        356, 232, 352,
        -30, -30, 0, 0,
        [{
                d: -1,
                v: [
                    ['m', 65, 0, {
                        y: 0
                    }],
                    ['l', 65, 298.2 + 6],
                    ['b', 65, 326.9 + 6, 88.2, 350.1 + 6, 116.9, 350.1 + 6, {
                        r: ROTATE_VERTICAL
                    }],
                    ['b', 139.2, 350.1 + 6, 159.3, 337 + 6, 166.6, 317.1, {
                        x: 0,
                        f: 1
                    }]
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 0, 130, {
                        x: 0,
                        r: ROTATE_VERTICAL
                    }],
                    ['l', 154, 130, {
                        x: 0,
                        f: 1
                    }],
                ]
            }
        ]
    ),
    'u': generateFontData(
        520, 182, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_LU))
    ),
    'v': generateFontData(
        500, 200, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 130, {
                    x: 0.6,
                    y: -3,
                    r: getR(0, 130, 100 - VERTEX_GAP2, 352)
                }],
                ['l', 100 - VERTEX_GAP2, 352, {
                    r: getR(0, 130, 100 - VERTEX_GAP2, 352),
                    f: 1
                }],
                ['l', 100 + VERTEX_GAP2, 352, {
                    r: getR(100 + VERTEX_GAP2, 352, 200, 130),
                    f: 1,
                    v: 1
                }],
                ['l', 200, 130, {
                    x: 0.6,
                    y: -3,
                    f: 1
                }],
            ]
        }]
    ),
    'w': generateFontData(
        700, 310, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 130, {
                    x: 0.6,
                    y: -3,
                    r: getR(0, 130, 78 - VERTEX_GAP2, 352)
                }],
                ['l', 78 - VERTEX_GAP2, 352, {
                    r: getR(0, 130, 78 - VERTEX_GAP2, 352),
                    f: 1
                }],
                ['l', 78 + VERTEX_GAP2, 352, {
                    r: getR(78 + VERTEX_GAP2, 352, 155 - VERTEX_GAP2, 130),
                    f: 1,
                    v: 1
                }],
                ['l', 155 - VERTEX_GAP2, 130, {
                    y: 1,
                    r: getR(78 + VERTEX_GAP2, 352, 155 - VERTEX_GAP2, 130),
                    f: 1
                }],
                ['l', 155 + VERTEX_GAP2, 130, {
                    y: 1,
                    r: getR(155 + VERTEX_GAP2, 130, 233 - VERTEX_GAP2, 352),
                    f: 1,
                    v: 1
                }],
                ['l', 233 - VERTEX_GAP2, 352, {
                    r: getR(155 + VERTEX_GAP2, 130, 233 - VERTEX_GAP2, 352),
                    f: 1
                }],
                ['l', 233 + VERTEX_GAP2, 352, {
                    r: getR(233 + VERTEX_GAP2, 352, 310, 130),
                    f: 1,
                    v: 1
                }],
                ['l', 310, 130, {
                    x: 0.6,
                    y: -3,
                    f: 1
                }],
            ]
        }]
    ),
    'x': generateFontData(
        490, 210, 352,
        0, 0, 0, -7,
        [{
                d: -1,
                v: [
                    ['m', 10, 130, {
                        x: 0.5,
                        y: -1,
                        r: getR(10, 130, 210, 352)
                    }],
                    ['l', 210, 352, {
                        x: 0.5,
                        y: 0.5,
                        f: 1
                    }]
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 200, 130, {
                        x: 0.5,
                        y: -1,
                        r: getR(200, 130, 0, 352)
                    }],
                    ['l', 0, 352, {
                        x: 0.5,
                        y: 0.5,
                        f: 1
                    }]
                ]
            }
        ]
    ),
    'y': generateFontData(
        500, 225.5, 331.5,
        10, 10, -119, -119,
        JSON.parse(JSON.stringify(DATA_LY))
    ),
    'z': generateFontData( // 232, 224
        420, 172, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 6, 130, {
                    x: -0.5,
                    y: 1,
                    r: ROTATE_VERTICAL,
                }],
                ['l', 166, 130, {
                    x: 1.8,
                    y: 1,
                    r: ROTATE_VERTICAL,
                    f: 1
                }],
                ['l', 166, 130 + VERTEX_GAP, {
                    x: 1.8,
                    y: 1,
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    v: 1
                }],
                ['l', 0, 352 - VERTEX_GAP, {
                    x: 1.7,
                    r: ROTATE_HORIZONTAL,
                    p: 1
                }],
                ['l', 0, 352, {
                    x: 1.7,
                    r: ROTATE_VERTICAL,
                    f: 1,
                    v: 1
                }],
                ['l', 172, 352, {
                    x: -0.4,
                    r: ROTATE_VERTICAL,
                    f: 1
                }]
            ]
        }]
    )
};