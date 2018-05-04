'use strict';

function map2Obj(map) {
  const obj = {};
  for (const [k, v] of map) {
    obj[k] = v;
  }
  return obj;
}

module.exports = map2Obj;
