var assert = require('assert') 
var index = require('../dist/index');
var sinon = require('sinon');

var base = index.default;

describe('base npm lib', function() {
  it('should log hello name', function() {
    var spy = sinon.spy(console, 'log');
    base.sayHello('name');
    assert(spy.calledWith('hello name'));
    spy.restore();
  });

  it('should log hello world', function() {
    var spy = sinon.spy(console, 'log');
    base.greet();
    assert(spy.calledWith('hello world!!'));
    spy.restore();
  });
});