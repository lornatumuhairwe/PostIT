const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const User = require('../server/models').User;


after(() => {
  app.close(() => { console.log('Doh :('); });
});

describe('User authentication', () => {
  describe('User registration', () => {
    // before((done) => {
    //   User.sync({ force: true }).then(() => {
    //     console.log('the user was created at the beginning!!!!!!!!!!!!!!!!!!!!!');
    //     User.create({
    //       username: 'test_user',
    //       email: 'test@mail.com',
    //       password: '1234567890',
    //     });
    //     done();
    //   });
    // });

    beforeEach((done) => {
      User.sync({ force: true }).then(() => {
        console.log('Table recreated at the beginning!!!!!!!!!!!!!!!!!!!!!');
        User.create({
          username: 'test_user',
          email: 'test@mail.com',
          password: '1234567890',
        });
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
    it('returns err when username is already taken', (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'test_user',
          email: 'test@mail.com',
          password: '1234567890',
        }).end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Username is already taken. Please choose another one.');
          done();
        });
    });
    it('returns err when invalid email is used', (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'test',
          email: 'test@ma',
          password: '1234567890',
        }).end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Please enter a valid email.');
          done();
        });
    });
  });

  describe('User login', () => {
    beforeEach((done) => {
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
    it('returns logs in a user with proper inputs', (done) => {
      request(app).post('/api/user/signin')
        .send({
          username: 'test_user',
          password: '1234567890'
        }).end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('Login success!');
          done();
        });
    });
    it('returns error when user does not exist', (done) => {
      request(app).post('/api/user/signin')
        .send({
          username: 'test_us',
          password: '1234567890'
        }).end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('User not found');
          done();
        });
    });
    it('returns error when user tries to login with incorrect password', (done) => {
      request(app).post('/api/user/signin')
        .send({
          username: 'test_user',
          password: 'qwerty'
        }).end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('Invalid password');
          done();
        });
    });
  });
});

