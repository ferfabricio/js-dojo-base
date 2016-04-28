var test = require('unit.js');
var testObject = require('../');

describe('This is the first test', function() {

  it('Test if true is true', function() {
    test.must(testObject.test()).be.true();
  });
});
