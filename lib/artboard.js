'use strict';

const Layer = require('./Layer');
const ShapeGroup = require('./shapeGroup');
const Group = require('./group');
const Rectangle = require('./rectangle');

module.exports = class Artboard extends Group {
  constructor(data) {
    super(data);
  }

  get layers() {
    this._layers = this._layers.map(layer => {
      if (layer['_class'] === 'shapeGroup') {
        return new ShapeGroup(layer, this);
      }

      if (layer['_class'] === 'group') {
        return new Group(layer, this);
      }

      if (layer['_class'] === 'rectangle') {
        return new Rectangle(layer, this);
      }

      return new Layer(layer, this);
    });
    return this._layers;
  }
};
