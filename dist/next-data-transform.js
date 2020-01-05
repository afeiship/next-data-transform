/*!
 * name: @feizheng/next-data-transform
 * url: https://github.com/afeiship/next-data-transform
 * version: 1.1.0
 * date: 2020-01-05T04:35:10.687Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxParam = nx.param || require('@feizheng/next-param');

  var NxDataTransform = nx.declare('nx.DataTransform', {
    statics: {
      raw: function(inData) {
        return inData;
      },
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

//# sourceMappingURL=next-data-transform.js.map
