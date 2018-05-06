'use strict';

class Pages {
  constructor(pages) {
    this._pages = pages;
    this._names = null;
  }

  getPages() {
    return this._pages;
  }

  get names() {
    if (!this._names) {
      this._names = this._pages.map(page => page.name);
    }
    return this._names;
  }

  getPagesByName(name) {
    return this._pages.filter(page => page.name === name);
  }

  getPageById(id) {
    return this._pages.filter(page => page.objectId === id)[0];
  }
}

function create(data) {
  return new Pages(data);
}

module.exports = create;
