'use strict';

const Layer = require('./Layer');
const Group = require('./group');
const Artboard = require('./artboard');
const Page = require('./page');
const Shape = require('./shape');
const Image = require('./image');
const Text = require('./text');

module.exports.Layer = () => new Layer();
module.exports.Group = () => new Group();
module.exports.Artboard = () => new Artboard();
module.exports.Page = () => new Page();
module.exports.Shape = () => new Shape();
module.exports.Image = () => new Image();
module.exports.Text = () => new Text();

module.exports.setComponentClass = function(layer) {
  if (layer['_class'] === 'shapeGroup') {
    return new Shape(layer, this);
  }

  if (layer['_class'] === 'group') {
    return new Group(layer, this);
  }

  if (layer['_class'] === 'artboard') {
    return new Artboard(layer, this);
  }

  if (layer['_class'] === 'page') {
    return new Page(layer, this);
  }

  if (layer['_class'] === 'text') {
    return new Text(layer, this);
  }

  if (layer['_class'] === 'image') {
    return new Image(layer, this);
  }

  return new Layer(layer, this);
};
