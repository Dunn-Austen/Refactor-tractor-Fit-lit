const chai = require('chai');
const expect = chai.expect;


import userData from '../data/users-test-data';
import User from '../src/User';

describe('User', () => {

  let user;
  beforeEach(() => {
    let userID = 0;
    user = new User(userData[userID])
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of the User class', () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have data for a user', () => {
    expect(user).to.deep.equal(userData[0]);
  });

  it('should return the first name of a user', () => {
    expect(user.returnUserName()).to.equal('Luisa');
  });

});