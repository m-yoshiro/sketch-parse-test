'use strict';

module.exports = class FillType {
  constructor() {
    this._color = null;
    this._gradient = null;
    this._pattern = null;
    this._noise = null;
  }

  get color() {
    return this._color;
  }

  get gradient() {
    return this._gradient;
  }

  get pattern() {
    return this._pattern;
  }

  get noise() {
    return this._noise;
  }

  set color(fillType) {
    this._color = fillType;
  }

  set gradient(fillType) {
    this._gradient = fillType;
  }

  set pattern(fillType) {
    this._pattern = fillType;
  }

  set noise(fillType) {
    this._noise = fillType;
  }
  _clean() {
    this._color = null;
    this._gradient = null;
    this._pattern = null;
    this._noise = null;
  }

  setFillType(fillType) {
    if (this.color || this.gradient || this.pattern || this.noise) {
      this._clean();
    }

    if (fillType === 'color') {
      this.color(fillType);
    } else if (fillType === 'gradient') {
      this.gradient(fillType);
    } else if (fillType === 'pattern') {
      this.pattern(fillType);
    } else if (fillType === 'noise') {
      this.noise(fillType);
    } else {
      return false;
    }
  }
};
