(function (exports, require, module, _filename, _dirname) {

    console
  var url = 'http://mylogger.io/log';

  function log(message) {
    // send an HTTP request //
    console.log(message);
  }

  module.exports = log;

  module.exports.log = log;
  exports.log = log;

  // cannot write 
  // exports = log; reference module.exports. can't change that reference. 

})

// node wraps code in a function. function is called Module Wrapper Function.

