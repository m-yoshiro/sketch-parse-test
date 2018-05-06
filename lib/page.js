'use strict';

const Layer = require('./layer');

class Page extends Layer {
  constructor(data) {
    super(data);
    this._name = null;
    this._objectId = null;
    this._style = null;
    this._layers = null;
  }
}

function create(data) {
  return new Page(data);
}

module.exports = create;
