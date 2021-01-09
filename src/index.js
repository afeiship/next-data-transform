(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxParam = nx.param || require('@jswork/next-param');

  var NxDataTransform = nx.declare('nx.DataTransform', {
    statics: {
      raw: nx.stubValue,
      json: function (inData) {
        return JSON.stringify(inData);
      },
      urlencoded: function (inData) {
        return nxParam(inData);
      },
      multipart: function (inData) {
        var data = new FormData();
        nx.forIn(inData, function (key, value) {
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
