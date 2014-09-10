var iconv = require('iconv-lite');
var chardet = require('chardet');
var strbuf = require('strbuf');
var fs = require('fs');

module.exports = {
  read: function(path, cb){
    fs.readFile(path, function(error, data){
      if(error){
        cb(error, null)
      }
      cb(null, strbuf(data));
    });
  }
}
