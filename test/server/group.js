const {
  User, Group, GroupMembers, Message
} = require('../../server/models');
const request = require('supertest');
const app = require('../../app');
const { expect } = require('chai');


describe('Group tests', () => {
  let token, userId, groupId, other_userId;
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

  describe('group messages test', () => {
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

    it('should allow authenticated users to get group messages', (done) => {
      request(app).get(`/api/group/${groupId}/messages`)
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should not allow authenticated users to get group messages', (done) => {
      request(app).get(`/api/group/${groupId}/messages`)
        .end((err, res) => {
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should allow group members to post messages to group', (done) => {
      request(app).post(`/api/group/${groupId}/message`)
        .set('Authorization', `Bearer ${token}`)
        .send({ message_body: 'another message' })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          done();
        });
    });

    it('should not allow non members to post message to group', (done) => {
      request(app).post(`/api/group/${groupId}/message`)
        .send({ message_body: 'another message' })
        .end((err, res) => {
          expect(res.status).to.equal(401);
          done();
        });
    });

    it('should allow authenticated users to get their groups', (done) => {
      request(app).get('/api/groups')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should not allow unauthenticated users to get their groups', (done) => {
      request(app).get('/api/groups')
        .end((err, res) => {
          expect(res.status).to.equal(401);
          done();
        });
    });

    describe('add users to group', () => {
      before((done) => {
        User.create({
          username: 'new tester',
          email: 'newtester@mail.com',
          password: '1234567890'
        }).then((user) => {
          other_userId = user.id;
        });
        done();
      });

      it('should allow authenticated group members to add users to group', (done) => {
        request(app).post(`/api/group/${groupId}/user`)
          .set('Authorization', `Bearer ${token}`)
          .send({ user_id: other_userId })
          .end((err, res) => {
            expect(res.status).to.equal(201);
            expect(res.body.message).to.equal('New user added to group');
            done();
          });
      });
    });
  });
});
