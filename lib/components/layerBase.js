'use strict';

module.exports = class LayerBase {
  constructor(data) {
    this._data = data;
    this._names = null;
    this._style = null;
    this._layers = this._data['layers'];
    this._objectId = null;
    this._class = null;
  }

  get name() {
    if (!this._name) {
      this._name = this._data['name'];
    }
    return this._name;
  }

  get className() {
    if (!this._class) {
      this._class = this._data['_class'];
    }
    return this._class;
  }

  get id() {
    if (!this._objectId) {
      this._objectId = this._data['do_objectID'];
    }
    return this._objectId;
  }

  get style() {
    if (!this._style) {
      this._style = this._data['style'];
    }
    return this._style;
  }

  get backgroundColor() {
    if (!this._backgroudColor) {
      this._backgroudColor = this._data['backgroundColor'];
    }
    return this._backgroudColor;
  }
};
