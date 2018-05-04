'use strict';

const JSZip = require('jszip');
const { extname } = require('path');

async function loadSketch(f) {
  const _data = new Map();

  await JSZip.loadAsync(f).then((zip, err) => {
    if (err) {
      throw err;
    }

    zip.forEach((relativePath, file) => {
      if (/\.png/.test(extname(relativePath))) {
        return;
      }

      file.async('string').then(str => {
        _data.set(relativePath, JSON.parse(str));
      });
    });
  });
  return _data;
}

module.exports = loadSketch;
