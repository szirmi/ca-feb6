const chai = require('chai');

const server = require('../src/index');

const { expect } = chai;
chai.should();

describe('Server Test', () => {
  it('should listening on port 5000', () => {
    server.address().port.should.equal(5000);
  });
});
