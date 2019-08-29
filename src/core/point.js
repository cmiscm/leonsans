export function Point(mp) {
    Object.assign(this, mp);
}

Object.assign(Point.prototype, {
    addRect: function (rect) {
        const vv = new Point(this);
        vv.x = this.x + rect.x;
        vv.y = this.y + rect.y;
        vv.x2 = this.x2 + rect.x;
        vv.y2 = this.y2 + rect.y;
        vv.x3 = this.x3 + rect.x;
        vv.y3 = this.y3 + rect.y;
        vv.rx = this.rx + rect.x;
        vv.ry = this.ry + rect.y;
        vv.sx = this.sx + rect.x;
        vv.sy = this.sy + rect.y;
        if (vv.radius < 0.5) vv.radius = 0.5;
        return vv;
    }
});