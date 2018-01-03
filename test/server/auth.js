const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');
const { User } = require('../../server/models');

describe('Authentication actions', () => {
  before((done) => {
    User.sync({ force: true }).then(() => {
      User.create({
        username: 'tester',
        email: 'test@mail.com',
        password: '1234567890',
      });
      done();
    });
  });

  // signup tests
  describe('user signup', () => {
    it('should register user with valid credentials', (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'testUser',
          email: 'test@test.lt',
          password: 'password',
          confirmPassword: 'password'
        }).end((err, res) => {
          expect(res.status).to.equal(201);
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
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal("Confirmation password doesn't match");
          done();
        });
    });

    it('should not allow the user to register with an invalid email', (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'testuser',
          email: 'test@test',
          password: 'password',
          confirmPassword: 'password'
        }).end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Please enter a valid email.');
          done();
        });
    });

    it('should not allow the user to register with an existing username', (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'tester',
          email: 'test@test.lt',
          password: 'password',
          confirmPassword: 'password'
        }).end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Username is already taken. Please choose another one.');
          done();
        });
    });

    it('should not allow the user to register with an invalid email', (done) => {
      request(app).post('/api/user/signup')
        .send({
          username: 'testuser',
          email: 'test@test',
          password: 'password',
          confirmPassword: 'password'
        }).end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.message).to.equal('Please enter a valid email.');
          done();
        });
    });
  });

  // signin tests
  describe('user login', () => {
    it('should allow user login with correct credentials', (done) => {
      request(app).post('/api/user/signin')
        .send({
          username: 'tester',
          password: '1234567890'
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.message).to.equal('Login success!');
          done();
        });
    });

    it('should not allow user login with incorrect credentials', (done) => {
      request(app).post('/api/user/signin')
        .send({
          username: 'tester',
          password: '12345'
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('Invalid password');
          done();
        });
    });

    it("should not try login user that doesn't exist", (done) => {
      request(app).post('/api/user/signin')
        .send({
          username: '',
          password: '',
        })
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body.message).to.equal('User not found');
          done();
        });
    });
  });
});
