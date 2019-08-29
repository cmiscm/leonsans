export function PixiColor(no, data, color) {
    let c_total = color.length;
    const cur = (no + (c_total * (Math.abs((no / 10) | 0) + 1))) % c_total;
    if (Array.isArray(color[cur])) {
        /*
        c_total = color[cur].length;
        const vv = 1 / (c_total - 1);
        const g = ctx.createLinearGradient(data.rect.x, data.rect.y, data.rect.x, data.rect.y + data.rect.h);
        let i;
        for (i = 0; i < c_total; i++) {
            g.addColorStop(vv * i, color[cur][i]);
        }
        ctx.strokeStyle = g;
        ctx.fillStyle = g;
        */
        /*
        c_total = color[cur].length;
        const vv = 1 / (c_total - 1);
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        const g = ctx.createLinearGradient(0, 0, data.rect.w, data.rect.h);
        let i;
        for (i = 0; i < c_total; i++) {
            g.addColorStop(vv * i, color[cur][i]);
        }
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, data.rect.w, data.rect.h);
        return new PIXI.Texture.from(c);
        */
    } else {
        return color[cur];
    }
}