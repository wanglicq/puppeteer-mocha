const expect = require('chai').expect;
const addContext = require('mochawesome/addContext');

it('should have context', function () {
    expect(1+1).to.equal(2);
    addContext(this, 'context1');
});