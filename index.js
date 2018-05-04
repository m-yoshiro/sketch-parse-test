'use strict';

const fs = require('fs');
const { extname } = require('path');
const loadSketch = require('./lib/load-sketch');
const { getLayersByClass } = require('./lib/helper');
const map2Obj = require('./lib/map2Obj');

// const SKETCH_CLASS_KEYS = {
//   layers: ['page', 'artboard', 'shapeGroup', 'rectangle'],
//   frame: ['rect'],
//   style: ['style']
// };

const _data = new WeakMap();

class SketchParser {
  constructor() {
    _data.set(this, {});
  }

  loadSketch(path) {
    const parser = this;

    if (extname(path) !== '.sketch') {
      throw new Error('File must be a sketch file.');
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        throw err;
      }
      parser._loadSketch(data);
    });
  }

  toString() {
    return map2Obj(_data.get(this));
  }

  toJson() {
    return JSON.stringify(map2Obj(_data.get(this)));
  }

  filenames() {
    return _data.get(this).keys();
  }

  getByFilename(filename) {
    return _data.get(this).get(filename);
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

  getLayersByClassname() {
    return getLayersByClass;
  }

  // Private methods

  _loadSketch(file) {
    loadSketch(file).then(data => {
      _data.set(this, data);
    });
  }
}

module.exports = new SketchParser();
