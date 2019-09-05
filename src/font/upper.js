import {
    generateFontData,
    ROTATE_HORIZONTAL,
    ROTATE_VERTICAL,
    VERTEX_GAP,
    VERTEX_GAP2,
    getR,
    getCurveR
} from './util.js';

export const DATA_UA = [{
        d: -1,
        v: [
            ['m', 0, 352, {
                x: 0.55,
                y: 0.3,
                r: getR(0, 352, 145 - VERTEX_GAP2, 0),
            }],
            ['l', 145 - VERTEX_GAP2, 0, {
                r: getR(0, 352, 145 - VERTEX_GAP2, 0),
                f: 1
            }],
            ['l', 145 + VERTEX_GAP2, 0, {
                r: getR(290, 352, 145 + VERTEX_GAP2, 0),
                f: 1,
                v: 1
            }],
            ['l', 290, 352, {
                x: 0.55,
                y: 0.3,
                f: 1
            }],
        ]
    },
    {
        d: -1,
        v: [
            ['m', 47, 237, {
                r: ROTATE_VERTICAL,
                p: 1
            }],
            ['l', 243, 237, {
                r: ROTATE_VERTICAL,
                p: 1,
                f: 1,
            }],
        ]
    }
];

export const DATA_UC = [{
    d: 1,
    v: [
        ['m', 293.1, 320.1, {
            r: getCurveR(293.1, 320.1, 262.2, 345, 222.8, 360, 180, 360, 0),
            f: 1
        }],
        ['b', 262.2, 345, 222.8, 360, 180, 360],
        ['b', 80.6, 360, 0, 279.4, 0, 180],
        ['b', 0, 80.6, 80.6, 0, 180, 0],
        ['b', 222.8, 0, 262.2, 15, 293.1, 39.9],
    ]
}];

export const DATA_UE = [{
        d: -1,
        v: [
            ['m', 192, 0, {
                x: 0,
                r: ROTATE_VERTICAL,
            }],
            ['l', 0, 0, {
                r: ROTATE_HORIZONTAL,
                f: 1,
                x: 0.5
            }],
            ['l', 0, 352, {
                f: 1,
                x: 0.5
            }],
            ['l', 192, 352, {
                x: 0,
                r: ROTATE_VERTICAL,
                f: 1
            }],
        ]
    },
    {
        d: -1,
        v: [
            ['m', 0, 164, {
                r: ROTATE_VERTICAL,
                p: 1,
                x: 0.5
            }],
            ['l', 180, 164, {
                x: 0,
                r: ROTATE_VERTICAL,
                f: 1
            }],
        ]
    }
];

export const DATA_UG = [{
    d: 1,
    v: [
        ['m', 202, 180, {
            r: ROTATE_VERTICAL,
            f: 1
        }],
        ['l', 352, 180, {
            f: 1
        }],
        ['b', 352, 279.4, 279.4, 360, 180, 360, {
            r: ROTATE_VERTICAL
        }],
        ['b', 80.6, 360, 0, 279.4, 0, 180, {
            r: ROTATE_HORIZONTAL
        }],
        ['b', 0, 80.6, 80.6, 0, 180, 0, {
            r: ROTATE_VERTICAL
        }],
        ['b', 222.8, 0, 262.1, 14.9, 293, 39.9],
    ]
}];

export const DATA_UH = [{
        d: -1,
        v: [
            ['m', 0, 0, {
                y: 0,
                r: ROTATE_HORIZONTAL
            }],
            ['l', 0, 352, {
                y: 0,
                r: ROTATE_HORIZONTAL,
                f: 1
            }],
        ]
    },
    {
        d: -1,
        v: [
            ['m', 232, 0, {
                y: 0,
                r: ROTATE_HORIZONTAL
            }],
            ['l', 232, 352, {
                y: 0,
                r: ROTATE_HORIZONTAL,
                f: 1
            }],
        ]
    },
    {
        d: -1,
        v: [
            ['m', 0, 164, {
                r: ROTATE_VERTICAL,
                p: 1
            }],
            ['l', 232, 164, {
                r: ROTATE_VERTICAL,
                f: 1,
                p: 1
            }],
        ]
    }
];

export const DATA_UI = [{
    d: 1,
    v: [
        ['m', 0, 352, {
            y: 0,
            r: ROTATE_HORIZONTAL,
            f: 1
        }],
        ['l', 0, 0, {
            y: 0,
            r: ROTATE_HORIZONTAL
        }],
    ]
}];

export const DATA_UJ = [{
    d: 1,
    v: [
        ['m', 0, 310.5 + 0.5, {
            r: getCurveR(0, 310.5 + 0.5, 16.2, 341.1 + 0.5, 49.3, 355.5 + 0.5, 86, 355.5 + 0.5, 0),
            f: 1
        }],
        ['b', 16.2, 341.1 + 0.5, 49.3, 355.5 + 0.5, 86, 355.5 + 0.5, {
            r: ROTATE_VERTICAL
        }],
        ['b', 133.5, 355.5 + 0.5, 172, 317 + 0.5, 172, 269.5 + 0.5],
        ['l', 172.5, 0, {
            y: 0,
            r: ROTATE_HORIZONTAL
        }],
    ]
}];

export const DATA_UN = [{
    d: -1,
    v: [
        ['m', 0, 352, {
            y: 0,
            r: ROTATE_HORIZONTAL
        }],
        ['l', 0, 0, {
            r: ROTATE_HORIZONTAL,
            f: 1
        }],
        ['l', 0 + VERTEX_GAP, 0, {
            r: ROTATE_HORIZONTAL,
            p: 1,
            f: 1,
            v: 1
        }],
        ['l', 250 - VERTEX_GAP, 351, {
            r: ROTATE_HORIZONTAL,
            p: 1,
            f: 1
        }],
        ['l', 250, 351, {
            r: ROTATE_HORIZONTAL,
            f: 1,
            v: 1
        }],
        ['l', 250, 0, {
            y: 0,
            r: ROTATE_HORIZONTAL,
            f: 1
        }],
    ]
}];

export const DATA_UO = [{
    d: 1,
    v: [
        ['m', 360, 180, {
            r: ROTATE_HORIZONTAL,
            p: 1,
            f: 1
        }],
        ['b', 360, 279.4, 279.4, 360, 180, 360, {
            r: ROTATE_VERTICAL
        }],
        ['b', 80.6, 360, 0, 279.4, 0, 180, {
            r: ROTATE_HORIZONTAL
        }],
        ['b', 0, 80.6, 80.6, 0, 180, 0, {
            r: ROTATE_VERTICAL
        }],
        ['b', 279.4, 0, 360, 80.6, 360, 180, {
            r: ROTATE_HORIZONTAL,
            c: 1
        }],
    ]
}];

export const DATA_US = [{
    d: 1,
    v: [
        ['m', 0, 295.4, {
            r: getCurveR(0, 295.4, 17.6, 332.1, 58.3, 360, 110.3, 360, 0),
            f: 1
        }],
        ['b', 17.6, 332.1, 58.3, 360, 110.3, 360],
        ['b', 173.9, 360, 223.8, 329.6, 224, 271],
        ['b', 224.2, 214.7, 180.7, 189.6, 112.4, 173.3],
        ['b', 47.3, 157.7, 10.9, 130.6, 12, 84.4],
        ['b', 13.3, 29.8, 57.3, 0, 114.8, 0],
        ['b', 158.4, 0, 196.5, 20.5, 212, 51.3],
    ]
}];

export const DATA_UU = [{
    d: 1,
    v: [
        ['m', 250, 0, {
            y: 0,
            r: ROTATE_HORIZONTAL
        }],
        ['l', 250, 230 + 1, {
            r: ROTATE_HORIZONTAL
        }],
        ['b', 250, 299 + 1, 194, 355 + 1, 125, 355 + 1, {
            r: ROTATE_VERTICAL
        }],
        ['b', 56, 355 + 1, 0, 299 + 1, 0, 230 + 1, {
            r: ROTATE_HORIZONTAL
        }],
        ['l', 0, 0, {
            y: 0,
            r: ROTATE_HORIZONTAL
        }],
    ]
}];

export const DATA_UY = [{
        d: -1,
        v: [
            ['m', 0, 0, {
                x: 0.6,
                y: 0.3,
                r: getR(0, 0, 135, 186),
            }],
            ['l', 135, 186, {
                r: ROTATE_HORIZONTAL,
                f: 1
            }],
            ['l', 270, 0, {
                x: 0.6,
                y: 0.3,
                f: 1
            }]
        ]
    },
    {
        d: -1,
        v: [
            ['m', 135, 186, {
                r: ROTATE_HORIZONTAL,
                p: 1
            }],
            ['l', 135, 352, {
                y: 0,
                f: 1
            }],
        ]
    }
];

export const UPPER = {
    'A': generateFontData(
        620, 290, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UA))
    ),
    'B': generateFontData(
        596, 209, 352,
        -10, -10, 0, 0,
        [{
            d: 1,
            v: [
                ['m', 0, 164, {
                    r: ROTATE_VERTICAL,
                    p: 1
                }],
                ['l', 116, 164, {
                    r: ROTATE_VERTICAL,
                    p: 1,
                    f: 1
                }],
                ['b', 167.4, 164, 209, 205.6, 209, 257, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 209, 308.4, 167.4, 352, 116, 352, {
                    r: ROTATE_VERTICAL
                }],
                ['l', 0, 352, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 0, 0, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 116, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 161.3, 0, 198, 36.7, 198, 82, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 198, 127.3, 161.3, 164, 116, 164, {
                    r: ROTATE_VERTICAL
                }]
            ]
        }]
    ),
    'C': generateFontData(
        700, 293.1, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UC))
    ),
    'D': generateFontData(
        721, 270, 352,
        -10, -10, 0, 0,
        [{
            //c: 'square',
            d: -1,
            v: [
                ['m', 95, 352, {
                    r: ROTATE_VERTICAL,
                    f: 1
                }],
                ['b', 191.6, 352, 270, 271.6, 270, 175, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 270, 78.4, 191.6, 0, 95, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['l', 0, 0, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 0, 352, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 95, 352, {
                    r: ROTATE_VERTICAL,
                    f: 1
                }],
            ]
        }]
    ),
    'E': generateFontData(
        520, 192, 352,
        -5, -80, 0, 0,
        JSON.parse(JSON.stringify(DATA_UE))
    ),
    'F': generateFontData(
        510, 192, 352,
        -5, -80, 0, 0,
        [{
                d: -1,
                v: [
                    ['m', 192, 0, {
                        x: 0,
                        r: ROTATE_VERTICAL,
                    }],
                    ['l', 0, 0, {
                        r: ROTATE_HORIZONTAL,
                        f: 1,
                        x: 0.5
                    }],
                    ['l', 0, 352, {
                        y: 0,
                        f: 1,
                        x: 0.5
                    }],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 0, 164, {
                        r: ROTATE_VERTICAL,
                        p: 1,
                        x: 0.5
                    }],
                    ['l', 180, 164, {
                        x: 0,
                        r: ROTATE_VERTICAL,
                        f: 1
                    }],
                ]
            }
        ]
    ),
    'G': generateFontData(
        840, 352, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UG))
    ),
    'H': generateFontData(
        684, 232, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UH))
    ),
    'I': generateFontData(
        249, 0, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UI))
    ),
    'J': generateFontData(
        472, 172.5, 355.5,
        10, 20, -2, -2,
        JSON.parse(JSON.stringify(DATA_UJ))
    ),
    'K': generateFontData(
        616, 232, 352,
        -10, -20, 0, 0,
        [{
                d: -1,
                v: [
                    ['m', 0, 0, {
                        y: 0,
                        r: ROTATE_HORIZONTAL
                    }],
                    ['l', 0, 352, {
                        y: 0,
                        r: ROTATE_HORIZONTAL,
                        f: 1
                    }],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 212, 0, {
                        x: 0.7,
                        y: 0.7,
                        r: getR(212, 0, 0, 164 - VERTEX_GAP2),
                    }],
                    ['l', 0, 164 - VERTEX_GAP2, {
                        r: ROTATE_VERTICAL,
                        p: 1
                    }],
                    ['l', 0, 164 + VERTEX_GAP2, {
                        r: ROTATE_VERTICAL,
                        p: 1,
                        v: 1
                    }],
                    ['l', 232, 352, {
                        x: 0.7,
                        y: 0.7,
                        f: 1
                    }],
                ]
            }
        ]
    ),
    'L': generateFontData(
        529, 192, 352,
        -10, -20, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    y: 0
                }],
                ['l', 0, 352, {
                    f: 1
                }],
                ['l', 192, 352, {
                    x: 0,
                    f: 1
                }],
            ]
        }]
    ),
    'M': generateFontData(
        885, 330, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 352, {
                    y: 0,
                    r: ROTATE_HORIZONTAL
                }],
                ['l', 0, 0, {
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
                ['l', 0 + VERTEX_GAP, 0, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    f: 1,
                    v: 1
                }],
                ['l', 165 - VERTEX_GAP2, 330, {
                    r: getR(165 - VERTEX_GAP2, 330, 165 - VERTEX_GAP2, 330),
                    f: 1
                }],
                ['l', 165 + VERTEX_GAP2, 330, {
                    r: getR(165 + VERTEX_GAP2, 330, 330 - VERTEX_GAP, 0),
                    f: 1,
                    v: 1
                }],
                ['l', 330 - VERTEX_GAP, 0, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    f: 1
                }],
                ['l', 330, 0, {
                    r: ROTATE_HORIZONTAL,
                    f: 1,
                    v: 1
                }],
                ['l', 330, 352, {
                    y: 0,
                    r: ROTATE_HORIZONTAL,
                    f: 1
                }],
            ]
        }]
    ),
    'N': generateFontData(
        721, 250, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UN))
    ),
    'O': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UO))
    ),
    'P': generateFontData(
        568, 210, 352,
        -10, -10, -0.5, -0.5,
        [{
            d: 1,
            v: [
                ['m', 0, 352, {
                    y: 0,
                    f: 1
                }],
                ['l', 0, 0, {
                    f: 1
                }],
                ['l', 117, 0, {
                    r: ROTATE_VERTICAL
                }],
                ['b', 168.4, 0, 210, 41.6, 210, 93, {
                    r: ROTATE_HORIZONTAL
                }],
                ['b', 210, 144.4, 168.4, 186, 117, 186, {
                    r: ROTATE_VERTICAL
                }],
                ['l', 0, 186, {
                    r: ROTATE_VERTICAL,
                    p: 1
                }],
            ]
        }]
    ),
    'Q': generateFontData(
        850, 360, 360,
        0, 0, 0, 0,
        [{
                d: -1,
                v: [
                    ['m', 360, 180, {
                        r: ROTATE_VERTICAL,
                        p: 1,
                        f: 1
                    }],
                    ['b', 360, 80.6, 279.4, 0, 180, 0, {
                        r: ROTATE_VERTICAL
                    }],
                    ['b', 80.6, 0, 0, 80.6, 0, 180, {
                        r: ROTATE_HORIZONTAL
                    }],
                    ['b', 0, 279.4, 80.6, 360, 180, 360, {
                        r: ROTATE_VERTICAL
                    }],
                    ['b', 279.4, 360, 360, 279.4, 360, 180, {
                        r: ROTATE_HORIZONTAL,
                        c: 1,
                        f: 1
                    }],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 222, 222, {
                        x: 0.5,
                        y: 0.5,
                        r: getR(222, 222, 360, 360),
                    }],
                    ['l', 360, 360, {
                        x: 0.5,
                        y: 0.5,
                        f: 1
                    }]
                ]
            }
        ]
    ),
    'R': generateFontData(
        634, 232, 352,
        -10, -10, -0.5, -0.5,
        [{
                d: -1,
                v: [
                    ['m', 0, 186, {
                        r: ROTATE_VERTICAL,
                        p: 1
                    }],
                    ['l', 139, 186, {
                        r: ROTATE_VERTICAL
                    }],
                    ['b', 190.4, 186, 232, 144.4, 232, 93, {
                        r: ROTATE_HORIZONTAL
                    }],
                    ['b', 232, 41.6, 190.4, 0, 139, 0, {
                        r: ROTATE_VERTICAL
                    }],
                    ['l', 0, 0, {
                        r: ROTATE_HORIZONTAL,
                        f: 1
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
                    ['m', 139, 186, {
                        p: 1,
                        r: getR(139, 186, 232, 352),
                    }],
                    ['l', 232, 352, {
                        x: 0.5,
                        y: 0.39,
                        f: 1
                    }],
                ]
            }
        ]
    ),
    'S': generateFontData(
        560, 224, 360,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_US))
    ),
    'T': generateFontData(
        568, 232, 352,
        0, 0, -0.5, -0.5,
        [{
                d: -1,
                v: [
                    ['m', 0, 0, {
                        x: 0,
                        r: ROTATE_VERTICAL
                    }],
                    ['l', 232, 0, {
                        x: 0,
                        r: ROTATE_VERTICAL,
                        f: 1
                    }],
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 116, 0, {
                        r: ROTATE_HORIZONTAL,
                        p: 1
                    }],
                    ['l', 116, 352, {
                        y: 0,
                        r: ROTATE_HORIZONTAL,
                        f: 1
                    }],
                ]
            }
        ]
    ),
    'U': generateFontData(
        712, 250, 355,
        0, 0, -0.5, -0.5,
        JSON.parse(JSON.stringify(DATA_UU))
    ),
    'V': generateFontData(
        650, 270, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: 0.6,
                    y: 0.1,
                    r: getR(0, 0, 135 - VERTEX_GAP2, 352),
                }],
                ['l', 135 - VERTEX_GAP2, 352, {
                    r: getR(0, 0, 135 - VERTEX_GAP2, 352),
                    f: 1
                }],
                ['l', 135 + VERTEX_GAP2, 352, {
                    r: getR(135 + VERTEX_GAP2, 352, 270, 0),
                    f: 1,
                    v: 1
                }],
                ['l', 270, 0, {
                    x: 0.6,
                    y: 0.1,
                    f: 1
                }],
            ]
        }]
    ),
    'W': generateFontData(
        894, 390, 352,
        0, 0, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 0, 0, {
                    x: 0.6,
                    y: 0.05,
                    r: getR(0, 0, 86 - VERTEX_GAP2, 352),
                }],
                ['l', 86 - VERTEX_GAP2, 352, {
                    r: getR(0, 0, 86 - VERTEX_GAP2, 352),
                    f: 1
                }],
                ['l', 86 + VERTEX_GAP2, 352, {
                    r: getR(86 + VERTEX_GAP2, 352, 195 - VERTEX_GAP2, 0),
                    f: 1,
                    v: 1
                }],
                ['l', 195 - VERTEX_GAP2, 0, {
                    r: getR(86 + VERTEX_GAP2, 352, 195 - VERTEX_GAP2, 0),
                    f: 1
                }],
                ['l', 195 + VERTEX_GAP2, 0, {
                    r: getR(195 + VERTEX_GAP2, 0, 304 - VERTEX_GAP2, 352),
                    f: 1,
                    v: 1
                }],
                ['l', 304 - VERTEX_GAP2, 352, {
                    r: getR(195 + VERTEX_GAP2, 0, 304 - VERTEX_GAP2, 352),
                    f: 1
                }],
                ['l', 304 + VERTEX_GAP2, 352, {
                    r: getR(304 + VERTEX_GAP2, 352, 390, 0),
                    f: 1,
                    v: 1
                }],
                ['l', 390, 0, {
                    x: 0.6,
                    y: 0.05,
                    f: 1
                }],
            ]
        }]
    ),
    'X': generateFontData(
        660, 270, 352,
        0, 0, 0, -7,
        [{
                d: -1,
                v: [
                    ['m', 10, 0, {
                        x: 0.5,
                        y: 0.3,
                        r: getR(10, 0, 270, 352),
                    }],
                    ['l', 270, 352, {
                        x: 0.5,
                        y: 0.5,
                        f: 1
                    }]
                ]
            },
            {
                d: -1,
                v: [
                    ['m', 260, 0, {
                        x: 0.5,
                        y: 0.3,
                        r: getR(260, 0, 0, 352),
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
    'Y': generateFontData(
        673, 270, 352,
        0, 0, 0, 0,
        JSON.parse(JSON.stringify(DATA_UY))
    ),
    'Z': generateFontData(
        558, 232, 352,
        0, -5, 0, 0,
        [{
            d: -1,
            v: [
                ['m', 8, 0, {
                    x: 0,
                    r: ROTATE_VERTICAL
                }],
                ['l', 224, 0, {
                    r: ROTATE_VERTICAL,
                    f: 1
                }],
                ['l', 224, 0 + VERTEX_GAP, {
                    r: ROTATE_HORIZONTAL,
                    p: 1,
                    v: 1
                }],
                ['l', 0, 352 - VERTEX_GAP, {
                    r: ROTATE_HORIZONTAL,
                    p: 1
                }],
                ['l', 0, 352, {
                    r: ROTATE_VERTICAL,
                    f: 1,
                    v: 1
                }],
                ['l', 232, 352, {
                    x: 0,
                    r: ROTATE_VERTICAL,
                    f: 1
                }]
            ]
        }]
    )
};