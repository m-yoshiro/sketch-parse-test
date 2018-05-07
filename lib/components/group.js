'use strict';

const Layer = require('./layer');
const Dom = require('./dom');

module.exports = class Group extends Layer {
  constructor(data, parent) {
    super(data, parent);
    this._layers = null;
  }

  get layers() {
    if (!this._layers) {
      this._layers = this._data['layers'].map(layer =>
        Dom.setComponentClass(layer)
      );
    }
    return this._layers;
  }
};
