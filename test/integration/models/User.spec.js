// ./test/integration/models/User.test.js

var util = require('util');

describe('User (model)', () => {

  describe('#findOne()', () => {
    it('should return 1 users', (done) => {
      User.findOne({
        username: 'linhtd'
      })
                .then((bestStudents) => {

                  if (!bestStudents) {
                    return done(new Error(
                            'Should return exactly 1 users -- the users ' +
                            'from our test fixtures who are considered the "best".  ' +
                            'But instead, got: ' + util.inspect(bestStudents, {
                              depth: null
                            }) + ''
                    ));
                  } //-•

                  return done();

                })
                .catch(done);
    });
  });

});
