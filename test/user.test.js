const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const User = require('../server/models').User;


after(() => {
  app.close(() => { console.log('Doh :('); });
});

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

  describe('User login', () => {
    before((done) => {
      User.sync({ force: true }).then(() => {
        console.log('the user was created at the beginning!!!!!!!!!!!!!!!!!!!!!');
        User.create({
          username: 'test_user',
          email: 'test@mail.com',
          password: '1234567890',
        });
        done();
      });
    });
    it('returns registers a user with proper inputs', (done) => {
      request(app).post('/api/user/signin')
        .send({
          username: 'test_user',
          password: '1234567890'
        }).end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('login success!');
          done();
        });
    });
  });
});

