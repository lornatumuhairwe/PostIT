

const expect = require('chai').expect;

describe('models/index', () => {
  it('returns the task model', () => {
    const models = require('../server/models/index');
    expect(models.Group).to.be.ok;
  });

  it('returns the user model', () => {
    const models = require('../server/models/index');
    expect(models.User).to.be.ok;
  });

  it('returns the messages model', () => {
    const models = require('../server/models/index');
    expect(models.Message).to.be.ok;
  });
});

describe('models/task', () => {
  before(() => require('../server/models/index').sequelize.sync());

  beforeEach(function () {
    this.User = require('../server/models/index').User;
    this.Group = require('../server/models/index').Group;
    this.Message = require('../server/models/index').Message;
  });

  describe('create', () => {
    it('creates a user', function () {
      return this.User.create({
        username: 'johndoe',
        email: 'johndoe@gmail.com',
        password: '123'
      }).bind(this).then((user) => {
        expect(user.username).to.equal('johndoe');
      });
    });

    it('creates a group', function () {
      return this.Group.create({
        name: 'first group',
        no_of_members: '1'
      }).bind(this).then((group) => {
        expect(group.name).to.equal('first group');
      });
    });

    // it('creates a message', function () {
    //   return this.Message.create({
    //     body: 'body of my first message',
    //     no_of_members: '1',
    //     group_id: 11,
    //     user_id: 21,
    //   }).bind(this).then((message) => {
    //     console.log(message);
    //     expect(message.body).to.equal('body of my first message');
    //   });
    // });
  });
});
