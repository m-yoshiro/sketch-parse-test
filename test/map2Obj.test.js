/* eslint-env mocha */

const { expect } = require('chai');
const map2Obj = require('../lib/map2Obj');

const sampleMap = new Map();
sampleMap.set('key1', 'value1');
sampleMap.set('key2', 'value2');
sampleMap.set('key3', 'value3');

describe('#map2Obj()', () => {
  describe('When convert Map to Object', () => {
    it('File type must be a `Object`', () => {
      const obj = map2Obj(sampleMap);
      expect(obj).to.be.a('object');
    });
  });
});
