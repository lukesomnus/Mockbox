const qs = require('querystring');

const util = {
  isEmpty: (value) => {
    if (typeof value === 'undefined' || value === 'undefined' || value === null) {
      return true;
    } else {
      return false;
    }
  },
  isArray: val => {
    if (typeof Array.isArray === 'function') return Array.isArray(obj);
    return Object.prototype.toString.call(obj) === '[object Array]';
  },
  isString: val => {
    return typeof val === 'string';
  },
  isNumber: val => {
    return typeof val === 'number';
  },
  isObject:val=>{
    if(val instanceof Object){
      if(val instanceof Array){
        return false;
      }else{
        return true
      }
    }
    return false;
  },
  trim: val => {
    return val.replace(/^\s+|\s+$/g, "");
  },
  whichType: val => {
    if (this.isString(val)) return 'string';
    if (this.isArray(val)) return 'array';
    if (this.isNumber(val)) return 'number';
  },
  getQueryArray: (url) => {
    var queryString = url.split('?')[1];
    const queryArr = qs.parse(queryString);
    return queryArr;
  }
};



module.exports = util;