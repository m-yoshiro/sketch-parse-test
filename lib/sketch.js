'use strict';

const map2Obj = require('./map2Obj');
const _data = new WeakMap();

class Sketch {
  constructor() {
    _data.set(this, {});
  }

  setSketchData(data) {
    _data.set(this, data);
  }

  toString() {
    return _data.get(this);
  }

  toJson() {
    return JSON.stringify(map2Obj(_data.get(this)));
  }

  getDocument() {
    return this.get('meta.json');
  }

  getPages() {
    const pageIds = Object.keys(this.getMetaProperties('pagesAndArtboards'));
    const _pages = {};

    pageIds.forEach(id => {
      const key = `pages/${id}.json`;
      _pages[key] = this.get(key);
    }, this);

    return _pages;
  }

  getUser() {
    return this.get('user.json');
  }

  getMeta() {
    return this.get('meta.json');
  }

  getLayersByClassname(name, targetLayers, defaultBooks) {
    let n = name;
    let layers = targetLayers;
    let books = defaultBooks || [];
    const self = this;

    if (Array.isArray(layers)) {
      layers.forEach(l => {
        if (l['_class'] === n) {
          return books.push(l);
        }
        self.getLayersByClassname(name, l['layers'], books);
      });
    }
    return books;
  }
}

module.exports = new Sketch();
