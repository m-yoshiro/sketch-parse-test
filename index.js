'use strict';

const fs = require('fs');
const { extname } = require('path');
const JSZip = require('jszip');
const loadSketch = require('./lib/load-sketch');
const {getLayersByClass, getStylesByAny} = require('./lib/helper');

const SKETCH_CLASS_KEYS = {
  'layers': ['page', 'artboard', 'shapeGroup', 'rectangle'],
  'frame': ['rect'],
  'style': ['style']
};

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
      if (err) { throw err; }
      parser._loadSketch(data);
    });
  }

  toString() {
    return _data.get(this);
  }

  filenames() {
    return _data.get(this).keys();
  }

  get(filename) {
    return _data.get(this).get(filename);
  }

  // Getting property by Filetype

  document() {
    return this.get('meta.json');
  }

  pages() {
    const pageIds = Object.keys(this.getMetaProperties('pagesAndArtboards'));
    const _pages = {};

    pageIds.forEach( (id) => {
      const key = `pages/${id}.json`;
      _pages[key] = this.get(key);
    }, this);

    return _pages;
  }

  user() {
    return this.get('user.json');
  }

  meta() {
    return this.get('meta.json');
  }

  // Utility

  getLayersByClass() {
    return getLayersByClass;
  }

  // Private methods

  _loadSketch(file) {
    loadSketch(file).then( (data) => {
      _data.set(this, data);
    });
  }
}

module.exports = new SketchParser();