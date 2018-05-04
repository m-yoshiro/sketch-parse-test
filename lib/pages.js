'use strict';

const Sketch = require('./sketch');

class Pages extends Sketch {
  getPages() {
    // return Page()
  }

  getPageByName() {
    // return Page()
  }

  getPageById() {
    // return Page()
  }
}

class Page extends Pages {
  getName() {
    // return name;
  }

  getLayers() {
    // return layers;
  }

  getLayersByClassname() {
    // return layer;
  }
}

module.exports = Pages;
module.exports = Page;
