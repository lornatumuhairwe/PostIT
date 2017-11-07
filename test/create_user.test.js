const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const User = require('../server/models').User;

describe('User authentication', () => {
  describe('User registration', () => {
    beforeEach((done) => {
      User.sync({ force: true }).then(() => {
        console.log('Table recreated at the beginning!!!!!!!!!!!!!!!!!!!!!');
        done();
      });
    });
    it('returns registers a user with proper inputs', (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'meee',
          email: 'me@example.com',
          password: 'myPassword'
        }).end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.username).to.equal('meee');
          done();
        });
    });
  });
});
