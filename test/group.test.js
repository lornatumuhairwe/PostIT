const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const User = require('../server/models').User;
const Group = require('../server/models').Group;
const Message = require('../server/models/message');

describe('group tests', () => {
  describe('user can create group', () => {
    let user_id, group_id;
    before((done) => {
      User.sync({ force: true }).then(() => {
        console.log('Table recreated at the beginning!!!!!!!!!!!!!!!!!!!!!');
        User.create({
          username: 'test_user',
          email: 'test@mail.com',
          password: '1234567890',
        }).then(
          ((user) => {
            user_id = user.id;
            // Group
            //   .create({
            //     name: 'before defined group',
            //   }).then((group) => { group_id = group.id; });
          }),
          done()
        );
      });
    });
    it('authenticated user can create a group', (done) => {
      request(app)
        .post('/api/group')
        .set('Authorization', 'Basic dGVzdF91c2VyOjEyMzQ1Njc4OTA=')
        .send({
          name: 'test group'
        })
      // .expect(201) coverage doesn't get this
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.name).to.equal('test group');
        });
      done();
    });
    it('authenticated user can post message to a group', (done) => {
      Group
        .create({
          name: 'before defined group',
        }).then((group) => {
          group_id = group.id;
        });
      request(app)
        .post(`/api/${group_id}/message`)
        .set('Authorization', 'Basic dGVzdF91c2VyOjEyMzQ1Njc4OTA=')
        .send({
          GroupId: group_id,
          UserId: user_id,
          body: 'Hello there!'
        })
        .end((err, res) => {
          expect(res.status).to.equal(201);
          expect(res.body.message).to.equal('New message sent to group');
        });
      console.log('Group id: ', group_id);
      console.log('User id: ', user_id);
      done();
    });
  });
});
