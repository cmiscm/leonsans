export function getLengths(item, model) {
    const total = item.typo.p.length;
    let c, p,
        arr = [],
        lt = [],
        max = 0,
        i;
    for (i = 0; i < total; i++) {
        p = item.typo.p[i];
        c = getEachPath(item, p.v, model);
        max += c.l;
        arr.push(c.v);
        lt.push(c.l);
    }
    return {
        max: max,
        lines: arr,
        lengths: lt
    };
}

function getEachPath(item, points, model) {
    const total = points.length;
    let i, p,
        line, cp1, cp2, prev,
        lines = [],
        length = 0;

    for (i = 0; i < total; i++) {
        p = points[i];
        line = {};
        cp2 = p.convert(item, model);

        if (i == 0 || p.type == 'a') {
            line.x1 = cp2.x;
            line.y1 = cp2.y;
            line.distance = 0;
            line.radius = cp2.radius;
        } else {
            cp1 = prev.convert(item, model);

            if (prev.type == 'b') {
                line.x1 = cp1.x3;
                line.y1 = cp1.y3;
            } else {
                line.x1 = cp1.x;
                line.y1 = cp1.y;
            }

            line.x2 = cp2.x;
            line.y2 = cp2.y;

            if (p.type == 'b') {
                line.x3 = cp2.x2;
                line.y3 = cp2.y2;
                line.x4 = cp2.x3;
                line.y4 = cp2.y3;
                line.distance = cubicBezierLength(line.x1, line.y1, line.x2, line.y2, line.x3, line.y3, line.x4, line.y4);
            } else {
                line.distance = distance(line.x1, line.y1, line.x2, line.y2);
            }
        }

        line.type = p.type;
        line.rotation = p.ratio.r;
        line.pat = p.ratio.p;
        line.fix = p.ratio.f;
        line.vt = p.ratio.v;

        lines.push(line);
        length += line.distance;

        prev = p;
    }

    return {
        v: lines,
        l: length
    };
}

export function cubicBezierLength(x1, y1, x2, y2, x3, y3, x4, y4, sampleCount) {
    const ptCount = sampleCount || 40;
    let totDist = 0;
    let lastX = x1;
    let lastY = y1;
    let dx, dy, i, pt;
    for (i = 1; i < ptCount; i++) {
        pt = cubicQxy(i / ptCount, x1, y1, x2, y2, x3, y3, x4, y4);
        dx = pt.x - lastX;
        dy = pt.y - lastY;
        totDist += Math.sqrt(dx * dx + dy * dy);
        lastX = pt.x;
        lastY = pt.y;
    }
    dx = x4 - lastX;
    dy = y4 - lastY;
    totDist += Math.sqrt(dx * dx + dy * dy);
    return totDist;
}

function cubicQxy(t, x1, y1, x2, y2, x3, y3, x4, y4) {
    x1 += (x2 - x1) * t;
    x2 += (x3 - x2) * t;
    x3 += (x4 - x3) * t;
    x1 += (x2 - x1) * t;
    x2 += (x3 - x2) * t;
    y1 += (y2 - y1) * t;
    y2 += (y3 - y2) * t;
    y3 += (y4 - y3) * t;
    y1 += (y2 - y1) * t;
    y2 += (y3 - y2) * t;
    return {
        x: x1 + (x2 - x1) * t,
        y: y1 + (y2 - y1) * t
    };
}

export function distance(x1, y1, x2, y2) {
    const a = (x2 - x1),
        b = (y2 - y1);
    return Math.sqrt(a * a + b * b);
}