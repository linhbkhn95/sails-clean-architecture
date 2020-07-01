// ./test/integration/models/User.test.js


describe('Auth (helper)', () => {

  describe('#login username: linhtd, password: 122 helpers()', () => {
    it('should return 1 token', (done) => {
      sails.helpers.auth.login(
                    'linhtd',
                    '122'
      )
                .then((result) => {
                  console.log(result);
                  if (result.code !== 0) {
                    return done(new Error(
                            'Should return exactly 1 result success -- the users '

                    ));
                  } //-•

                  return done();

                })
                .catch(done);
    });
  });

});
