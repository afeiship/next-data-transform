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
        return nxParam(inData);
      },
      multipart: function(inData) {
        var data = new FormData();
        nx.forIn(inData, function(key, value) {
          data.append(key, value);
        });
        return data;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxDataTransform;
  }
})();
