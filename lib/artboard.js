'use strict';

const LayerBase = require('./layerBase');
const Layer = require('./Layer');
const ShapeGroup = require('./shapeGroup');
const Group = require('./group');
const Rectangle = require('./rectangle');

module.exports = class Artboard extends LayerBase {
  constructor(data) {
    super(data);
  }

  get layers() {
    this._layers = this._layers.map(layer => {
      if (layer['_class'] === 'shapeGroup') {
        return new ShapeGroup(layer);
      }

      if (layer['_class'] === 'group') {
        return new Group(layer);
      }

      if (layer['_class'] === 'rectangle') {
        return new Rectangle(layer);
      }

      return new Layer(layer);
    });
    return this._layers;
  }
};
