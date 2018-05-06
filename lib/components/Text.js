'use strict';

const Layer = require('./layer');

module.exports = class Text extends Layer {
  constructor(data) {
    super(data);
    this._text = null;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }
};
