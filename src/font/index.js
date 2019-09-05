import {
    UPPER
} from './upper.js';
import {
    LOWER
} from './lower.js';
import {
    NUMBER
} from './number.js';
import {
    SPECIAL
} from './special.js';
import {
    LATIN
} from './latin.js';
import {
    TOFU
} from './util.js';

const DATA = Object.assign({}, UPPER, LOWER, NUMBER, SPECIAL, LATIN);

export function typo(v) {
    var t = DATA[v] || DATA[TOFU];
    t.v = v;
    return t;
}