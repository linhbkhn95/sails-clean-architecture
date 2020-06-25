/**
 * isAuthenticated
 *
 * @module      :: Policy
 * @description :: Simple policy to require an authenticated user, or else redirect to login page
 *                 Looks for an Authorization header bearing a valid JWT token
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

var OutputUtils = require('../commons/OutputUtils');
module.exports = async function (req, res, next) {

    try {
        const resultAuthenticate = await sails.helpers.jwt.verify(req);
        if (resultAuthenticate.code !== OutputUtils.code.SUCCESS) {
            return OutputUtils.errServer(res, resultAuthenticate.errors, null, 401);
        };
        return next();
    } catch (error) {
        return OutputUtils.errServer(res, error.toString(), null, 500);
    }
}