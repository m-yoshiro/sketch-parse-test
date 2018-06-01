/* eslint-env mocha */

const { expect } = require('chai');
const FillType = require('../lib/util/fillType');

// const sample = {
//   color: {
//     r: 1,
//     g: 1,
//     b: 1,
//     alpha: 1
//   }
// };

describe('#Class FillType()', () => {
  describe('When fire setFillType()', () => {
    it('If empty, File type must return `Null`', () => {
      const testFillType = new FillType.setFillType();
      expect(testFillType).to.be.null;
    });
  });
});
