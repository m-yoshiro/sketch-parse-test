'use strict';

const Group = require('./Group');

module.exports = class Page extends Group {
  constructor(data) {
    super(data);
    this._artboards = null;
  }
};
