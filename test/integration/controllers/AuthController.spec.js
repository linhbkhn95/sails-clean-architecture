// test/integration/controllers/UserController.test.js
var supertest = require('supertest');
require('../../lifecycle.test');

describe('auth/AuthController.login', () => {

  describe('#login()', () => {
    it('should respone badRequest', (done) => {
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

});
