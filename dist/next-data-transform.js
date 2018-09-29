(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  require('next-param');

  var NxDataTransform = nx.declare('nx.DataTransform', {
    statics: {
      json: function (inData) {
        return JSON.stringify(inData);
      },
      urlencoded: function (inData) {
        return nx.param(inData);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDataTransform;
  }

}());
