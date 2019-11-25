/*!
 * name: @feizheng/next-data-transform
 * url: https://github.com/afeiship/next-data-transform
 * version: 1.0.0
 * date: 2019-11-25T07:52:28.729Z
 * license: MIT
 */

(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxParam = nx.param || require('@feizheng/next-param');

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

//# sourceMappingURL=next-data-transform.js.map
