export function setAlignGapX(sw, tw) {
    return {
        c: (sw - tw) / 2,
        r: sw - tw,
        l: 0
    };
}

export function getAlignGapX(align, alignGapX) {
    if (align == 'center') {
        return alignGapX.c;
    } else if (align == 'right') {
        return alignGapX.r;
    } else {
        return alignGapX.l;
    }
}