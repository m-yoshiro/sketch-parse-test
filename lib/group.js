'use strict';

const Layer = require('./layer');

module.exports = class Group extends Layer {
  constructor(data, parent) {
    super(data, parent);
  }
};
