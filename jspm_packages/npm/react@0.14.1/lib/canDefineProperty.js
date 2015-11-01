/* */ 
(function(process) {
  'use strict';
  var canDefineProperty = false;
  if (process.env.NODE_ENV !== 'production') {
    try {
      Object.defineProperty({}, 'x', {});
      canDefineProperty = true;
    } catch (x) {}
  }
  module.exports = canDefineProperty;
})(require('process'));
