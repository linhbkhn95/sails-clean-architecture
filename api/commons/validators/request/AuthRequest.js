var {
  checkDataNull
} = require('../../Validate');
var OutputUtils = require('../../OutputUtils');
module.exports = {
  /*
    @api {Post} /api/auth/login
    * @apiParam  {String} [userName] username
    * @apiParam  {String} [password] Password
  */

  login: async (req, res) => {
    try {
      let {
        username,
        password
      } = req.body;
      let errors = {};
      if (checkDataNull(username)) {
        errors['username'] = 'Username is required';
      }
      if (checkDataNull(password)) {
        errors['password'] = 'Passowrd is required';
      }
      if (Object.keys(errors).length >0 && errors.constructor === Object) {
        return OutputUtils.errServer(res,'Validate fail', errors);
      }
    } catch (error) {
      return OutputUtils.errServer(res,'System error', error, 500);
    }

  },

  /*
    @api {Post} /api/auth/login
    * @apiParam  {String} [userName] username
    * @apiParam  {String} [password] Password
  */

  register:async(req,res)=>{
    try {
      let {
        username,
        password,
        fullname
      } = req.body;
      let errors = {};
      if (checkDataNull(username)) {
        errors['username'] = 'Username is required';
      }
      if (checkDataNull(password)) {
        errors['password'] = 'Passowrd is required';
      }
      if (checkDataNull(fullname)) {
        errors['fullname'] = 'Fullname is required';
      }
      if (Object.keys(errors).length >0 && errors.constructor === Object) {
        return OutputUtils.errServer(res,'Validate fail', errors);
      }
    } catch (error) {
      return OutputUtils.errServer(res,'System error', error, 500);
    }
  }
};
