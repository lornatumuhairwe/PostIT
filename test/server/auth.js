const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');

describe('Authentication actions', () => {
  describe('user authentication', () => {
    it('should register user with valid credentials', (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'testUser',
          email: 'test@test.lt',
          password: 'password',
          confirmPassword: 'password'
        }).end((err, res) => {
          expect(res.body.message).to.equal('Signup success');
          done();
        });
    });

    it("should not register a user when password doesn't match confirmPassword", (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'testUser',
          email: 'test@test.lt',
          password: 'password',
          confirmPassword: 'passwordD'
        }).end((err, res) => {
          expect(res.body.message).to.equal("Confirmation password doesn't match");
          done();
        });
    });
  });
});
