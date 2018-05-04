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

class SketchParser {
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
}

module.exports = new SketchParser();
