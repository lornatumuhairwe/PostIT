const {
  User, Group, GroupMembers, Message
} = require('../../server/models');
const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');


describe('Group tests', () => {
  let token, userId, groupId;
  before((done) => {
    User.sync({ force: true }).then(() => {
      User.create({
        username: 'tester',
        email: 'test@mail.com',
        password: '1234567890'
      }).then((user) => {
        userId = user.id;
        Group.create({ name: 'First Test Group' })
          .then((group) => {
            groupId = group.id;
            GroupMembers.create({
              group_id: group.id,
              user_id: userId
            }).then(() => {
              Message.create({
                GroupId: groupId,
                UserId: userId,
                username: user.username,
                body: 'This is the first test message in this group'
              }).then((message) => {
                console.log(message);
              });
            });
          });
      });
      done();
    });
  });

  describe('create a group tests', () => {
    beforeEach((done) => {
      request(app).post('/api/user/signin')
        .send({
          username: 'tester',
          password: '1234567890'
        })
        .end((err, res) => {
          token = res.body.token;
          done();
        });
    });

    it('should allow a user to create a group', (done) => {
      request(app).post('/api/group')
        .set('Authorization', `Bearer ${token}`)
        .send({ name: 'Test Group' })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.name).to.equal('Test Group');
          done();
        });
    });

    it('should not allow an authenticated user to create a group', (done) => {
      request(app).post('/api/group')
        .send({ name: 'Test Group' })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          done();
        });
    });
  });
});
