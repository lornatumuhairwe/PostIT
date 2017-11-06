'use strict';

const expect = require('chai').expect;

describe('models/index', function () {
    it('returns the task model', function () {
        let models = require('../server/models/index');
        expect(models.Group).to.be.ok;
    });

    it('returns the user model', function () {
        let models = require('../server/models/index');
        expect(models.User).to.be.ok;
    });

    it('returns the messages model', function () {
        let models = require('../server/models/index');
        expect(models.Message).to.be.ok;
    });
});
