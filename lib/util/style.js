'use strict';

module.exports = class Style {
  constructor() {
    this._borders = null;
    this._fills = null;
    this._FillType = null;
  }

  get fills() {
    if (!this._fills) {
      this._fills = [];
    }
    return this._fills;
  }

  get borders() {
    if (!this._borders) {
      this._borders = [];
    }
    return this._fills;
  }
};
