const DEFAULT_FONT_SIZE = 500;
export const MIN_FONT_WEIGHT = 1;
export const MAX_FONT_WEIGHT = 900;
const MAX_LINE_WIDTH = 70;
const FONT_WEIGHT_LIMIT = 80;
const FR_1 = 1;
const FR_2 = 0.78;
export const RECT_RATIO = 0.49;
const MAX_SHAKE = 120;
export const PI2 = 2 * Math.PI;

export function getAmplitude(amplitude, scale) {
    return (MAX_SHAKE * amplitude) * scale;
}

export function getFontW(weight) {
    return (MAX_LINE_WIDTH - MIN_FONT_WEIGHT) / (MAX_FONT_WEIGHT - MIN_FONT_WEIGHT) * (weight - MIN_FONT_WEIGHT) + MIN_FONT_WEIGHT;
}

export function getWeightRatio(fontW) {
    return (1) / (FONT_WEIGHT_LIMIT - MIN_FONT_WEIGHT) * (fontW - MIN_FONT_WEIGHT);
}

export function getCircleRound(fontW) {
    return (58 - 4) / (FONT_WEIGHT_LIMIT - MIN_FONT_WEIGHT) * (fontW - MIN_FONT_WEIGHT) + 4;
}

export function getScale(size) {
    return size / DEFAULT_FONT_SIZE;
}

export function getLineW(fontW, scale) {
    let lw = fontW * scale;
    if (lw < 1) lw = 1;
    //if (weight == 1) lw = 1
    return lw;
}

export function getTracking(tracking, scale) {
    return tracking * 50 * scale;
}

export function getLeading(leading, scale) {
    return leading * 50 * scale;
}

export function getFontRatio(weightRatio) {
    return (FR_2 - FR_1) * weightRatio + FR_1;
}

export function getRect(d, scale, x = 0, y = 0) {
    const w = (d.rect.w * RECT_RATIO) * scale;
    const h = ((d.rect.h + 220) * RECT_RATIO) * scale;
    return {
        x: x,
        y: y,
        w: w,
        h: h
    };
}

/**
 * @name getGap
 * @property {Object} - typo data object from 'font/index.js'
 * @property {Number} - weightRatio
 * @returns {Object} the gap x and y
 * @description get a typo gap from thin to bold weight
 */
/*
export function getGap(d, weightRatio) {
    const gx1 = d.ratio.x1
    const gx2 = d.ratio.x2
    const gy1 = d.ratio.y1
    const gy2 = d.ratio.y2
    const x = (gx2 - gx1) * weightRatio + gx1
    const y = (gy2 - gy1) * weightRatio + gy1
    return {
        x: x,
        y: y
    }
}
*/

/**
 * @name getCenter
 * @property {Number} - typo rect width
 * @property {Number} - typo rect height
 * @property {Number} - typo scale
 * @returns {Object} center position x and y
 * @description get a center position of a typo
 */
export function getCenter(w, h, scale) {
    const x = w / 2;
    const y = (h - ((220 - 90) * RECT_RATIO * scale)) / 2;
    return {
        x: x,
        y: y
    };
}

/**
 * @name getRange
 * @property {Object} - typo data object from 'font/index.js'
 * @property {Number} - weightRatio
 * @property {Number} - circleRound
 * @returns {Object} ratio range
 * @description save ratio range to control each line's coordinate 
 */
export function getRange(d, weightRatio, circleRound) {
    const gx1 = d.ratio.x1;
    const gx2 = d.ratio.x2;
    const gy1 = d.ratio.y1;
    const gy2 = d.ratio.y2;
    return {
        r: weightRatio,
        cr: circleRound,
        fr1: FR_1,
        fr2: FR_2,
        gx1: gx1,
        gx2: gx2,
        gy1: gy1,
        gy2: gy2,
    };
}

export function getCurrent(v, vmax, vmin, max, min) {
    let value = (max - min) / (vmax - vmin) * (v - vmin) + min;
    if (value < min) value = min;
    else if (value > max) value = max;
    return value;
}

export function getLines(data) {
    const total = data.typo.p.length;
    const lines = [];
    let i, j, k, j_total;
    let d2, d3, cp, dir, lt, ltRatio, prevRatio;
    for (i = 0; i < total; i++) {
        d2 = data.typo.p[i];
        j_total = d2.cv.length;
        for (j = 0; j < j_total; j++) {
            d3 = d2.cv[j];
            // add current position to all points
            cp = d3.addRect(data.rect);
            dir = d2.d;
            lt = data.pointsLength.lengths[i];
            ltRatio = lt / data.pointsLength.max;
            prevRatio = 0;
            if (i > 0) {
                for (k = 0; k < i; k++) {
                    prevRatio += (data.pointsLength.lengths[k] / data.pointsLength.max);
                }
            }
            ltRatio += prevRatio;

            lines.push({
                pos: cp,
                drawing: data.drawing,
                direction: dir,
                lengths: lt,
                maxDrawing: ltRatio,
                minDrawing: prevRatio,
                closePath: d3.ratio.c,
                stroke: (ctx, d) => {
                    let dv = getCurrent(d.drawing.value, d.maxDrawing, d.minDrawing, 1, 0);
                    //if (d.direction == 1) {
                    //    dv = getCurrent(1 - d.drawing.value, d.minDrawing, d.maxDrawing, 1, 0);
                    //}
                    if (dv > 0 && d.pos.type != 'a') {
                        const frac = d.lengths * dv;
                        ctx.setLineDash([d.lengths]);
                        ctx.lineDashOffset = d.direction * (frac + d.lengths);
                        ctx.stroke();
                    }
                },
            });
        }
    }

    return lines;
}


export function addRectToPaths(path, data) {
    const total = path.length;
    const arr = [];
    let i, cp, p;
    for (i = 0; i < total; i++) {
        p = path[i];
        cp = p.addRect(data.rect);
        arr.push(cp);
    }
    return arr;
}

export function randomBrightColor() {
    return "hsl(" + 360 * Math.random() + ',' +
        '100%,' +
        '50%)';
}

export function shuffle(oldArray) {
    let newArray = oldArray.slice(),
        len = newArray.length,
        i = len,
        p, t;
    while (i--) {
        p = (Math.random() * len) | 0;
        t = newArray[i];
        newArray[i] = newArray[p];
        newArray[p] = t;
    }
    return newArray;
}