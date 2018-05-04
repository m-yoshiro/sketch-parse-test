'use strict';

function getLayersByClass(name, targetLayers, defaultBooks) {
  let n = name;
  let layers = targetLayers;
  let books = defaultBooks || [];

  if (Array.isArray(layers)) {
    layers.forEach(l => {
      if (l['_class'] !== n) {
        return getLayersByClass(name, l['layers'], books);
      }
      books.push(l);
    });
  }

  return books;
}

module.exports.getLayersByClass = getLayersByClass;

function getStylesByAny(any) {
  if (Array.isArray(any) || typeof any === 'string') {
    console.warn('`any` must be Object or must have `style` property.');
    return;
  }
  return any.style;
}

module.exports.getStylesByAny = getStylesByAny;
