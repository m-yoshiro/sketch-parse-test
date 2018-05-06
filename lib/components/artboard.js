'use strict';

const Layer = require('./Layer');
const Shape = require('./shape');
const Group = require('./group');

module.exports = class Artboard extends Group {
  constructor(data) {
    super(data);
  }

  get layers() {
    this._layers = this._layers.map(layer => {
      if (layer['_class'] === 'shapeGroup') {
        return new Shape(layer, this);
      }

      if (layer['_class'] === 'group') {
        return new Group(layer, this);
      }

      return new Layer(layer, this);
    });
    return this._layers;
  }
};
