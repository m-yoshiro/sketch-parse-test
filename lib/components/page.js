'use strict';

const Layer = require('./layer');
const Artboard = require('./artboard');

module.exports = class Page extends Layer {
  constructor(data) {
    super(data);
    this._artboards = null;
  }

  get artboards() {
    if (!this._artboards) {
      this._artboards = this._layers
        .filter(layer => layer['_class'] === 'artboard')
        .map(layer => new Artboard(layer));
    }
    return this._artboards;
  }
};
