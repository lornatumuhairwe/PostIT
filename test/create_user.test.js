const expect = require('chai').expect;
const request = require('supertest');
const requestPromise = require('request-promise');
const app = require('../app');

describe('User authentication', () => {
  describe('User registration', () => {
    it('returns registers a user with proper inputs', (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'me',
          email: 'me@example.com',
          password: 'myPassword'
        }).end((err, res) => {
          console.log(res);
          done();
        });
    });
  });
});
