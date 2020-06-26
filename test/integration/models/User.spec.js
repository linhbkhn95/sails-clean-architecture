// ./test/integration/models/User.test.js

var util = require('util');

describe('User (model)', function () {

    describe('#findOne()', function () {
        it('should return 1 users', function (done) {
            User.findOne({
                    username: 'linhtd'
                })
                .then(function (bestStudents) {

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