const qs = require('querystring');
const util = {
};
util.isEmpty = (value)=> {
  if(typeof value === 'undefined' || value ==='undefined' || value === null){
    return true;
  }else{
    return false;
  }
};

util.getQueryArray= (url)=>{
  var queryString = url.split('?')[1];
  const queryArr = qs.parse(queryString);
  return queryArr;
};

module.exports = util;
