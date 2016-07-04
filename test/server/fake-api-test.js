var expect = require('chai').expect;
var fakeApi = require('../../fake-api');

describe('fake-api', function() {
  describe('#strContains()', function() {
    var strContains = fakeApi.strContains;
    it('should return true when the second string is anywhere in the first one', function() {
      expect(strContains('hello', 'll')).to.be.true;
      expect(strContains('hello', 'he')).to.be.true;
      expect(strContains('hello', 'llo')).to.be.true;
    });

    it('should return true if the strings are equal', function () {
      expect(strContains('hello', 'hello')).to.be.true;
    });

    it('should return true if the second string is empty', function () {
      expect(strContains('hello', '')).to.be.true;
    });
  });
});
