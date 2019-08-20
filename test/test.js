(function() {
  var nx = require('next-js-core2');
  var NxDataTransform = require('../src/next-data-transform');

  describe('NxDataTransform.methods', function() {
    test('json/urlencoded', function() {
      var data1 = {
        key: 1,
        value: 2
      };

      var rs1 = NxDataTransform.json(data1);
      var rs2 = NxDataTransform.urlencoded(data1);

      // console.log(rs1, rs2);
      expect(rs1).toBe('{"key":1,"value":2}');
      expect(rs2).toBe('key=1&value=2');
    });
  });
})();
