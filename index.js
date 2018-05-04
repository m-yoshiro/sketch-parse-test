'use strict';

const fs = require('fs');
const { extname } = require('path');
const loadSketch = require('./lib/load-sketch');
const Sketch = require('./lib/sketch');

const loadFile = function(path) {
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
};

module.exports = {
  loadFile
};
