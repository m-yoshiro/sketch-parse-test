'use strict';

class Page {
  constructor(page) {
    this._page = page;
    this._name = null;
    this._objectId = null;
    this._style = null;
    this._layers = null;
  }

  get name() {
    if (!this._name) {
      this._name = this._page['name'];
    }
    return this._name;
  }

  get objectId() {
    if (!this._objectId) {
      this._objectId = this._page['objectId'];
    }
    return this._objectId;
  }

  get style() {
    if (!this._style) {
      this._style = this._page['style'];
    }
    return this._style;
  }

  get layers() {
    if (!this._layers) {
      this._layers = this._page['layers'];
    }
    return this._layers;
  }
}

function create(data) {
  return new Page(data);
}

module.exports = create;
