'use strict';

const map2Obj = require('./map2Obj');
const Page = require('./components/page');
const _data = new WeakMap();

class Sketch {
  constructor() {
    _data.set(this, {});
    this._pages = null;
    this._meta = null;
    this._user = null;
  }

  load(data) {
    _data.set(this, data);
  }

  toString() {
    return map2Obj(_data.get(this));
  }

  toJson() {
    return JSON.stringify(map2Obj(_data.get(this)));
  }

  get pages() {
    if (!this._pages) {
      const pageIds = Object.keys(this.meta['pagesAndArtboards']);
      const _pages = [];

      pageIds.forEach(id => {
        const key = `pages/${id}.json`;
        _pages.push(new Page(_data.get(this).get(key)));
      }, this);
      this._pages = _pages;
    }
    return this._pages;
  }

  get user() {
    if (!this._user) {
      this._user = _data.get(this).get('user.json');
    }
    return this._user;
  }

  get meta() {
    if (!this._meta) {
      this._meta = _data.get(this).get('meta.json');
    }
    return this._meta;
  }
}

function create() {
  return new Sketch();
}

module.exports = create;
module.exports.create = create;
