/*!
 * name: @jswork/next-data-transform
 * description: Data transform for next.
 * homepage: https://github.com/afeiship/next-data-transform
 * version: 1.0.0
 * date: 2020-11-19 13:34:33
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
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
