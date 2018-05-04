'use strict';

const fs = require('fs');
const { extname } = require('path');
const loadSketch = require('./lib/load-sketch');
const Sketch = require('./lib/sketch');

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
    if (extname(path) !== '.sketch') {
      throw new Error('File must be a sketch file.');
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        throw err;
      }
      loadSketch(data).then(data => {
        return Sketch.setSketchData(data);
      });
    });

    return Sketch;
  }

  filenames() {
    return _data.get(this).keys();
  }

  // Private methods

  _loadSketch(file) {
    loadSketch(file).then(data => {
      Sketch.setSketchData(data);
    });
  }
}

module.exports = new SketchParser();
