var assert = require('assert') 
var baseNpmLib = require('../dist/index');
var sinon = require('sinon');

describe('base npm lib', function() {
  it('should log hello name', function() {
    var spy = sinon.spy(console, 'log');
    baseNpmLib.sayHello('name');
    assert(spy.calledWith('hello name'));
    spy.restore();
  });

  it('should log hello world', function() {
    var spy = sinon.spy(console, 'log');
    baseNpmLib.greet();
    assert(spy.calledWith('hello world!!'));
    spy.restore();
  });
});