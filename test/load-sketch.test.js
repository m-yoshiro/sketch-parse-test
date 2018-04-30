const { expect } = require('chai');
const { resolve } = require('path');
const fs = require('fs');
const loadSketch = require('../src/load-sketch');

const path = resolve(__dirname, './test.sketch');

describe('#loadSketch()', () => {
  describe('When reading file', () => {

    it('File type must be a `array`', (done) => {
      fs.readFile(path, (err, data) => {
        if (err) { throw err; }
        loadSketch(data).then( (response) => {
          expect(response).to.be.a('array');
          done();
        }).catch(err => done(err));
      });
    });

  });
});