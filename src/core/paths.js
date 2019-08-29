import {
    getCurrent
} from './util.js';
import {
    ROTATE_NONE
} from '../font/util.js';
import {
    Point
} from './point.js';

let prevPoint = null;

/**
 * @name getPaths
 * @property {Model} model - mode.js
 * @property {Object} data - data object
 * @property {Number} pathGap 
 * @returns {Array} Returns paths array
 * @description get a guide pos
 */
export function getPaths(model, data, pathGap, isPattern) {
    const lines = data.pointsLength.lines;
    const scale = model.scale;
    let total = lines.length,
        i, j_total, j,
        line, lg, direction,
        arr = [],
        paths = [],
        paths2 = [];


    for (i = 0; i < total; i++) {
        line = lines[i];
        prevPoint = null;
        arr.push(getDotPos(line, pathGap, scale));
    }

    total = arr.length;
    for (i = 0; i < total; i++) {
        lg = arr[i];
        j_total = lg.length;

        paths2 = [];
        for (j = 0; j < j_total; j++) {
            line = lg[j];
            if (line.rotation != ROTATE_NONE) {
                if (isPattern) {
                    // If the 'p' value of the font data is 1, it's not included in the pattern paths.
                    if (!line.pat) {
                        paths2.push(line);
                    }
                } else {
                    paths2.push(line);
                }
            }
        }
        direction = data.typo.p[i].d;
        if (direction == 1) {
            paths2.reverse();
        }

        if (paths2.length > 0) {
            paths2[0].start = 1;
            Array.prototype.push.apply(paths, paths2);
        }
    }

    return paths;
}

function getDotPos(lines, pathGap, scale) {
    const total = lines.length;
    let i, j, j_total;
    let line;
    let curPoint;
    let num, pp;
    let arr = [];
    let isFirst = 1;
    let pgap = 1;
    if (pathGap > -1) pgap = getCurrent(pathGap, 1, 0, 80, 10) * scale;

    for (i = 0; i < total; i++) {
        line = lines[i];

        if (line.type == 'a') {
            arr.push(new Point({
                x: line.x1,
                y: line.y1,
                rotation: 0,
                type: 'a',
                pat: line.pat,
                fix: line.fix,
                radius: line.radius
            }));
        } else if (line.distance == 0) {
            // it should be type m
            curPoint = new Point({
                x: line.x1,
                y: line.y1,
                rotation: line.rotation,
                type: line.type,
                pat: line.pat,
                fix: line.fix
            });
            pp = setPointValues(curPoint, prevPoint, line, 1);
            if (pp != null) {
                if (isFirst) {
                    pp.type = 'm';
                    isFirst = 0;
                }
                arr.push(pp);
            }
            prevPoint = new Point(curPoint); //Object.assign({}, curPoint)
        } else {
            j_total = Math.ceil(line.distance / pgap);

            if (j_total < 3) j_total = 3;
            if (line.vt) j_total = 2;

            for (j = 1; j < j_total; j++) {
                num = j / (j_total - 1);
                if (line.type == 'b') {
                    curPoint = getCubicBezierXYatT(line, num);
                } else {
                    curPoint = new Point({
                        x: line.x1 + ((line.x2 - line.x1) * num),
                        y: line.y1 + ((line.y2 - line.y1) * num),
                        type: line.type
                    });
                }

                if (line.rotation != 0 && num == 1) curPoint.rotation = line.rotation;

                if (line.pat && num == 1) curPoint.pat = line.pat;

                if (line.fix && num == 1) curPoint.fix = line.fix;

                if (j_total > 0) {
                    pp = setPointValues(curPoint, prevPoint, line, num);
                    if (pp != null) {
                        if (isFirst) {
                            pp.type = 'm';
                            isFirst = 0;
                        }
                        arr.push(pp);
                    }
                }
                prevPoint = new Point(curPoint); //Object.assign({}, curPoint)
            }
        }
    }
    return arr;
}

function setPointValues(cur, prev, line, num) {
    cur.type = line.type;
    cur.distance = line.distance;
    cur.num = num;

    if (!prev || cur.rotation != null) {
        cur.rotation = cur.rotation;
    } else {
        const dx = cur.x - prev.x;
        const dy = cur.y - prev.y;
        const rad = Math.atan2(dx, dy);
        cur.rotation = -rad;
    }

    if (cur.rotation == ROTATE_NONE) {
        return null;
    } else {
        return cur;
    }
}

function getCubicBezierXYatT(line, t) {
    const x = CubicN(line.x1, line.x2, line.x3, line.x4, t);
    const y = CubicN(line.y1, line.y2, line.y3, line.y4, t);
    const tx = bezierTangent(line.x1, line.x2, line.x3, line.x4, t);
    const ty = bezierTangent(line.y1, line.y2, line.y3, line.y4, t);
    const rotation = -Math.atan2(tx, ty);

    return new Point({
        x: x,
        y: y,
        rotation: rotation
    });
}

function CubicN(a, b, c, d, t) {
    const t2 = t * t;
    const t3 = t2 * t;
    return a + (-a * 3 + t * (3 * a - a * t)) * t + (3 * b + t * (-6 * b + b * 3 * t)) * t + (c * 3 - c * 3 * t) * t2 + d * t3;
}

//http://qaru.site/questions/10657973/quadratic-curve-with-rope-pattern
//https://stackoverflow.com/questions/32322966/quadratic-curve-with-rope-pattern
export function bezierTangent(a, b, c, d, t) {
    return (3 * t * t * (-a + 3 * b - 3 * c + d) + 6 * t * (a - 2 * b + c) + 3 * (-a + b));
}