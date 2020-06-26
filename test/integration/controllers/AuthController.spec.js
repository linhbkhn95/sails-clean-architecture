// test/integration/controllers/UserController.test.js
var supertest = require('supertest');
require('../../lifecycle.test');

describe('auth/AuthController.login', function () {

    describe('#login()', function () {
        it('should respone badRequest', function (done) {
            supertest(sails.hooks.http.app)
                .post('/api/auth/login')
                .send({
                    username: 'test',
                    password: 'test'
                })
                .expect('Content-Type', /json/)

                .expect(400)
                .end(done);

        });
    });

})