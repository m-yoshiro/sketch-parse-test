'use strict';

module.exports = class Layer {
  constructor(layer) {
    this._layer = layer;
    this._names = null;
    this._style = null;
    this._layers = null;
  }

  get style() {
    if (!this._style) {
      this._style = this._layer['style'];
    }
    return this._style;
  }

  get backgroundColor() {
    if (!this._backgroudColor) {
      this._backgroudColor = this._layer['backgroundColor'];
    }
    return this._backgroudColor;
  }

  get layers() {
    if (!this._layers) {
      this._layers = this._layer['layers'].map(layer => Layer(layer));
    }
    return this._layers;
  }
};
