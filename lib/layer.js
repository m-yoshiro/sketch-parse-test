'use strict';

const LayerBase = require('./layerBase');

module.exports = class Layer extends LayerBase {
  constructor(data, parent) {
    super(data);
    this._parent = parent || null;
  }

  get parent() {
    return this._parent;
  }

  set parent(parent) {
    this._parent = parent;
  }
};
