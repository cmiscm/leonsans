export function PixiLines(graphics, data, lineW, color) {
    let total, i;
    if (data.drawing.value == 1) {
        total = data.lines.length;
        for (i = 0; i < total; i++) {
            eachLine_(graphics, data.lines[i], lineW, color);
        }
    } else {
        total = data.drawingPaths.length * data.drawing.value;
        for (i = 0; i < total; i++) {
            
            eachPath_(graphics, data.drawingPaths[i], lineW, color, data.drawing.value);
        }
    }
}

function eachLine_(graphics, data, lineW, color) {
    const pos = data.pos;
    if (pos.type == 'a') {
        graphics.lineStyle(0, color, 0);
        graphics.beginFill(color);
        graphics.drawCircle(pos.x, pos.y, pos.radius);
        graphics.endFill();
    } else if (pos.type == 'm') {
        graphics.lineStyle(lineW, color, 1);
        graphics.moveTo(pos.x, pos.y);
    } else if (pos.type == 'l') {
        graphics.lineTo(pos.x, pos.y);
    } else if (pos.type == 'b') {
        graphics.bezierCurveTo(pos.x, pos.y, pos.x2, pos.y2, pos.x3, pos.y3);
    }
    if (data.closePath) {
        graphics.closePath();
    }
}

function eachPath_(graphics, pos, lineW, color, dValue) {
    if (pos.type == 'a') {
        graphics.lineStyle(0, color, 0);
        graphics.beginFill(color);
        graphics.drawCircle(pos.x, pos.y, pos.radius * dValue);
        graphics.endFill();
    } else {
        if (pos.start == 1) {
            graphics.lineStyle(lineW, color, 1);
            graphics.moveTo(pos.x, pos.y);
        } else {
            graphics.lineTo(pos.x, pos.y, 1);
        }
    }
}