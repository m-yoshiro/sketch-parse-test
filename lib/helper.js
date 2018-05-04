'use strict';

function getStylesByAny(any) {
  if (Array.isArray(any) || typeof any === 'string') {
    console.warn('`any` must be Object or must have `style` property.');
    return;
  }
  return any.style;
}

module.exports.getStylesByAny = getStylesByAny;
