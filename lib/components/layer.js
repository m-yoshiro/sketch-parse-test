'use strict';

const BaseLayer = require('./baseLayer');

module.exports = class Layer extends BaseLayer {
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
