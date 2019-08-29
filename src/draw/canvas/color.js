export function Color(ctx, no, data, color) {
    let c_total = color.length;
    const cur = (no + (c_total * (Math.abs((no / 10) | 0) + 1))) % c_total;
    if (Array.isArray(color[cur])) {
        c_total = color[cur].length;
        const vv = 1 / (c_total + 1);
        const g = ctx.createLinearGradient(data.rect.x, data.rect.y, data.rect.x, data.rect.y + data.rect.h);
        let i;
        g.addColorStop(vv, color[cur][0]);
        for (i = 0; i < c_total; i++) {
            g.addColorStop(vv * (i + 1), color[cur][i]);
        }
        g.addColorStop(vv * (c_total + 1), color[cur][c_total - 1]);
        ctx.strokeStyle = g;
        ctx.fillStyle = g;
    } else {
        ctx.strokeStyle = color[cur];
        ctx.fillStyle = color[cur];
    }
}