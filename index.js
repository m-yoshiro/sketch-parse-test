'use strict';

const fs = require('fs');
const { extname } = require('path');
const loadSketch = require('./lib/load-sketch');
const Sketch = require('./lib/sketch').create();

const loadFile = function(path) {
  if (extname(path) !== '.sketch') {
    throw new Error('File must be a sketch file.');
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      throw err;
    }
    loadSketch(data).then(data => {
      return Sketch.load(data);
    });
  });

  return Sketch;
};

module.exports = {
  loadFile
};
