'use strict';

const baseLayer = require('./baseLayer');

module.exports = class Layer extends baseLayer {
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
