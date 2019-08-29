import {
    Dispatcher
} from './core/dispatcher.js';
import {
    MIN_FONT_WEIGHT,
    MAX_FONT_WEIGHT,
    shuffle
} from './core/util.js';
import {
    Lines
} from './draw/canvas/lines.js';
import {
    Points
} from './draw/canvas/points.js';
import {
    Grids
} from './draw/canvas/grids.js';
import {
    Wave
} from './draw/canvas/wave.js';
import {
    Pattern
} from './draw/canvas/pattern.js';
import {
    Color
} from './draw/canvas/color.js';
import {
    Colorful
} from './draw/canvas/colorful.js';
import {
    PixiLines
} from './draw/pixi/lines.js';
import {
    PixiColor
} from './draw/pixi/color.js';
import {
    Model
} from './core/model.js';


export default class LeonSans extends Dispatcher {
    constructor({
        text = '',
        size = 500,
        weight = MIN_FONT_WEIGHT,
        color = ['#000000'],
        colorful = ['#c5d73f', '#9d529c', '#49a9db', '#fec330', '#5eb96e', '#fc5356', '#f38f31'],
        tracking = 0,
        leading = 0,
        align = 'left',
        pathGap = 0.5,
        amplitude = 0.5,
        width = 0,
        breakWord = false,
        fps = 30,
        isPath = false,
        isWave = false,
    } = {}) {
        super();

        this.size_ = size;
        this.weight_ = weight;
        this.color_ = color;
        this.colorful_ = shuffle(colorful);
        this.tracking_ = tracking;
        this.leading_ = leading;
        this.pathGap_ = pathGap;
        this.amplitude_ = amplitude;
        this.width_ = width;
        this.breakWord_ = breakWord;
        this.fps_ = fps;
        this.fpsTime_ = 1000 / this.fps_;
        this.isPath_ = isPath;
        this.isWave_ = isWave;

        this.model = new Model();

        this.str_ = null;

        this.time_ = null;
        this.isFps_ = false;
        this.isForceRander_ = false;

        this.updateID_ = 0;
        this.dPathsID_ = null;
        this.pPathsID_ = null;
        this.wPathsID_ = null;
        this.guideID_ = null;

        this.text = text;

        this.model.align = align;
    }

    on(event, callback) {
        super.on(event, callback);
        this.update();
    }

    off(event, callback) {
        super.off(event, callback);
    }

    get text() {
        return this.str_;
    }

    set text(str) {
        if (this.str_ == str) return;
        this.str_ = str;
        this.update();
    }

    get size() {
        return this.size_;
    }

    set size(v) {
        if (this.size_ == v) return;
        this.size_ = v;
        this.update();
        this.isForceRander_ = true;
    }

    get weight() {
        return this.weight_;
    }

    set weight(v) {
        if (v < MIN_FONT_WEIGHT) {
            v = MIN_FONT_WEIGHT;
        } else if (v > MAX_FONT_WEIGHT) {
            v = MAX_FONT_WEIGHT;
        }
        if (this.weight_ == v) return;
        this.weight_ = v;
        this.update();
        this.isForceRander_ = true;
    }

    get color() {
        return this.color_;
    }

    set color(v) {
        if (this.color_ == v) return;
        this.color_ = v;
    }

    get tracking() {
        return this.tracking_;
    }

    set tracking(v) {
        if (this.tracking_ == v) return;
        this.tracking_ = v;
        this.update();
        this.isForceRander_ = true;
    }

    get leading() {
        return this.leading_;
    }

    set leading(v) {
        if (this.leading_ == v) return;
        this.leading_ = v;
        this.update();
        this.isForceRander_ = true;
    }

    get align() {
        return this.model.align;
    }

    set align(v) {
        if (this.model.align != v) {
            this.model.align = v;
            this.updateID_++;
            this.updateSignal();
        }
    }

    get pathGap() {
        return this.pathGap_;
    }

    set pathGap(v) {
        if (this.pathGap_ != v) {
            this.pathGap_ = v;
            this.updatePatternPaths(true);
            this.updateWavePaths(true);
            this.isForceRander_ = true;
        }
    }

    get amplitude() {
        return this.amplitude_;
    }

    set amplitude(v) {
        this.amplitude_ = v;
    }

    get rect() {
        return this.model.rect;
    }

    set maxWidth(v) {
        if (this.width_ == v) return;
        this.width_ = v;
        this.update();
    }

    get maxWidth() {
        return this.width_;
    }

    set breakWord(v) {
        if (this.breakWord_ == v) return;
        this.breakWord_ = v;
        this.update();
    }

    get breakWord() {
        return this.breakWord_;
    }

    get isPath() {
        return this.isPath_;
    }

    set isPath(v) {
        this.isPath_ = v;
        this.updatePatternPaths(true);
    }

    get isWave() {
        return this.isWave_;
    }

    set isWave(v) {
        this.isWave_ = v;
        this.updateWavePaths(true);
    }

    get fps() {
        return this.fps_;
    }

    set fps(v) {
        this.fps_ = v;
        this.fpsTime_ = 1000 / this.fps_;
    }

    get lineWidth() {
        return this.model.lineWidth;
    }

    get scale() {
        return this.model.scale;
    }

    get drawing() {
        return this.model.drawing;
    }

    get data() {
        return this.model.data;
    }

    get paths() {
        return this.model.paths;
    }

    get drawingPaths() {
        return this.model.drawingPaths;
    }

    get wavePaths() {
        return this.model.wavePaths;
    }

    position(x = 0, y = 0) {
        if (this.model.position(x, y)) {
            this.updateID_++;
            this.updateSignal();
        }
    }

    update() {
        this.updateID_++;

        this.model.update(
            this.str_,
            this.width_,
            this.breakWord_,
            this.weight_,
            this.size_,
            this.tracking_,
            this.leading_
        );

        if (this.isPath_ || this.isWave_) {
            this.updatePatternPaths();
            this.updateWavePaths();
        } else {
            this.updateSignal();
        }
    }

    updateGuide() {
        if (this.guideID_ != this.updateID_) {
            this.guideID_ = this.updateID_;
            this.model.updateGuide();
        }
    }

    /**
     * Update paths for drawing in WebGL (PIXI.js). It's very expensive, only call when it needs.
     */
    updateDrawingPaths() {
        if (this.dPathsID_ != this.updateID_) {
            this.dPathsID_ = this.updateID_;
            this.model.updateDrawingPaths();
        }
    }

    /**
     * Update paths for pattern
     * @param {boolean} force - Force execution
     */
    updatePatternPaths(force) {
        if (this.isPath_ && (force || this.pPathsID_ != this.updateID_)) {
            this.pPathsID_ = this.updateID_;
            this.model.updatePatternPaths(this.pathGap_);
            this.isForceRander_ = true;
            this.updateSignal();
        }
    }

    /**
     * Update paths for wave effect
     * @param {boolean} force - Force execution
     */
    updateWavePaths(force) {
        if (this.isWave_ && (force || this.wPathsID_ != this.updateID_)) {
            this.wPathsID_ = this.updateID_;
            this.model.updateWavePaths(this.pathGap_);
            this.isForceRander_ = true;
            this.updateSignal();
        }
    }

    updateSignal() {
        this.model.updateLinesForRect();
        this.model.updatePathsForRect();
        this.dispatch('update', this.model);
    }

    reset() {
        this.size_ = 500;
        this.weight_ = MIN_FONT_WEIGHT;
        this.color_ = ['#000000'];
        this.tracking_ = 0;
        this.leading_ = 0;
        this.pathGap_ = 0.5;
        this.amplitude_ = 0.5;
        this.width_ = 0;
        this.breakWord_ = false;
        this.fps_ = 30;
        this.fpsTime_ = 1000 / this.fps_;
        this.isPath_ = false;
        this.isWave_ = false;

        this.str_ = null;

        this.time_ = null;
        this.isFps_ = false;
        this.isForceRander_ = false;

        this.updateID_ = 0;
        this.dPathsID_ = null;
        this.pPathsID_ = null;
        this.wPathsID_ = null;
        this.guideID_ = null;

        this.model.reset();
    }

    dispose() {
        this.reset();
        this.model = null;
    }

    /**
     * Draw text in WebGL with PIXI.js
     * @param {PIXI.Graphics} graphics
     */
    drawPixi(graphics) {
        const total = this.model.data.length;
        let i, d, color;
        for (i = 0; i < total; i++) {
            d = this.model.data[i];
            color = PixiColor(i, d, this.color_);
            PixiLines(graphics, d, this.lineWidth, color);
        }
    }

    /**
     * Draw text in the Canvas element.
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        ctx.lineWidth = this.lineWidth;
        const total = this.model.data.length;
        let i, d;
        for (i = 0; i < total; i++) {
            d = this.model.data[i];
            Color(ctx, i, d, this.color_);
            Lines(ctx, d);
        }
    }

    /**
     * Draw the colorful effect.
     * @param {CanvasRenderingContext2D} ctx
     */
    drawColorful(ctx) {
        ctx.lineWidth = this.lineWidth;
        Colorful(ctx, this.model, this.colorful_);
    }

    /**
     * Draw the wave effect.
     * @param {CanvasRenderingContext2D} ctx
     * @param {DOMHighResTimeStamp} t time stemp from requestAnimationFrame()
     */
    wave(ctx, t) {
        ctx.lineWidth = this.lineWidth;

        if (t) {
            if (!this.time_) this.time_ = t;
            const p = t - this.time_;
            if (p > this.fpsTime_ || this.isForceRander_) {
                this.time_ = t;
                this.isFps_ = true;
            } else {
                this.isFps_ = false;
            }
        }
        this.isForceRander_ = false;

        const total = this.model.data.length;
        let i, d;
        for (i = 0; i < total; i++) {
            d = this.model.data[i];
            Color(ctx, i, d, this.color_);
            Wave(ctx, d, this.model.scale, this.amplitude_, this.weight_, this.isFps_);
        }
    }

    /**
     * Draw rectangle shapes at each path point.
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} w pattern width
     * @param {number} h pattern height
     */
    pattern(ctx, w, h) {
        const tw = w * this.model.scale;
        const th = h * this.model.scale;

        const total = this.model.data.length;
        let i, d;
        for (i = 0; i < total; i++) {
            d = this.model.data[i];
            Pattern(ctx, d, tw, th);
        }
    }

    /**
     * Draw grid for each type.
     * @param {CanvasRenderingContext2D} ctx
     */
    grid(ctx) {
        this.updateGuide();

        const total = this.model.data.length;
        let i, d;
        for (i = 0; i < total; i++) {
            d = this.model.data[i];
            Grids(ctx, d);
        }
    }

    /**
     * Draw circles at each drawing point and lines for each type.
     * @param {CanvasRenderingContext2D} ctx
     */
    point(ctx) {
        const total = this.model.data.length;
        let i, d;
        for (i = 0; i < total; i++) {
            d = this.model.data[i];
            Points(ctx, d);
        }
    }

    /**
     * Draw outline box for the text.
     * @param {CanvasRenderingContext2D} ctx
     * @private
     */
    box(ctx) {
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.strokeStyle = "#0b90dc";
        ctx.rect(this.model.rect.x, this.model.rect.y, this.model.rect.w, this.model.rect.h);
        ctx.stroke();
    }
}