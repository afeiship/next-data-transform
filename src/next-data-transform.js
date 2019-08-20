(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxParam = nx.param || require('next-param');

  var NxDataTransform = nx.declare('nx.DataTransform', {
    statics: {
      json: function(inData) {
        return JSON.stringify(inData);
      },
      urlencoded: function(inData) {
        return nx.param(inData);
      },
      multipart: function(inData) {
        return inData;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDataTransform;
  }
})();
