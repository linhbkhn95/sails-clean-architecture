var AuthRequest = require('../../commons/validators/request/AuthRequest');
var OutputUtils = require('../../commons/OutputUtils');

module.exports = {

  /*
    @api {Post} /api/auth/login
    * @apiParam  {String} [userName] username
    * @apiParam  {String} [password] Password
  */
  login: async (req, res) => {
    try {
      let username = req.body.username;
      let password = req.body.password;
      //validate request data
      AuthRequest.login(req, res);
      let result = await sails.helpers.auth.login(
        username,
        password
      );
      if (result.code !== OutputUtils.code.SUCCESS) {
        return OutputUtils.errServer(res, result.errors);
      }
      return OutputUtils.success(res, result.data);
    } catch (error) {
      console.log('error', error);
      return OutputUtils.errServer(res, 'System error', error.toString(), 500);
    }
  },
  /*
    @api {Post} /api/auth/register
    * @apiParam  {String} [userName] Username
    * @apiParam  {String} [password] Password
    * @apiParam  {String} [fullname] Fullname

  */
  register: async (req, res) => {
    try {
      //validate request data
      const {
        username,
        password,
        fullname
      } = req.body;
      AuthRequest.register(req, res);
      let result = await sails.helpers.auth.register(
        username,
        password,
        fullname
      );
      if (result.code !== OutputUtils.code.SUCCESS) {
        return OutputUtils.errServer(res, 'ERROR', result.errors);
      }
      return OutputUtils.success(res, result.data);

    } catch (error) {
      console.log('error', error);
      return OutputUtils.errServer(res, 'System error', error.toString(), 500);
    }
  },
  getInfor: async (req, res) => {
    try {
      let user = req.user;
      let result = await sails.helpers.auth.me(
        user.username
      );

      if (result.code !== OutputUtils.code.SUCCESS) {
        return OutputUtils.errServer(res, 'ERROR', result.errors);
      }
      return OutputUtils.success(res, result.data);
    } catch (error) {

      return OutputUtils.errServer(res, 'System error', error.toString(), 500);
    }
  }
};
