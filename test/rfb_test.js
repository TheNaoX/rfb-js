var RFB = require('../lib/rfb');
var assert = require('assert');
var expect = require('expect.js');

describe('RFB', function(){
  describe('function', function(){
    it('creates a new instance from RFB function', function(){
      expect(RFB).to.be.a('function');
    });
  });
});
