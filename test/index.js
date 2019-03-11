
/**
 * Dependencies.
 */

var logit = require('..');
var assert = require('assert');

/**
 * Tests.
 */

describe('logit()', function() {
  it('should be a function', function() {
    assert.equal(typeof logit, 'function');
  });

  it('should calculate the logit into negative numbers', function() {
    assert.equal(logit(0.22618142573054617), -1.2300000000000004);
  });

  it('should calculate the logit into positive numbers', function() {
    assert.equal(logit(0.9608342772032357), 3.2000000000000006);
  });
});
