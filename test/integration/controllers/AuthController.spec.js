// test/integration/controllers/UserController.test.js
var supertest = require('supertest');
require('../../lifecycle.test');

describe('auth/AuthController.login', () => {

  describe('#login() fail', () => {
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
  describe('#login() fail password', () => {
    it('should respone Fail login', (done) => {
      supertest(sails.hooks.http.app)
        .post('/api/auth/login')
        .send({
          username: 'linhtd',
          password: '1'
        })
        .expect('Content-Type', /json/)

        .expect(400)
        // .then(response => {
        //   assert(response.body.code, -1);
        // })
        .end(done);

    });
  });
  describe('#login() success', () => {
    it('should respone Success login', (done) => {
      supertest(sails.hooks.http.app)
        .post('/api/auth/login')
        .send({
          username: 'linhtd',
          password: '122'
        })
        .expect('Content-Type', /json/)

        .expect(200)
        .end(done);

    });
  });

});
