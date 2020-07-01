var {
  checkDataNull
} = require('../commons/Validate');
const UserService = {
  // constructor() {

  // }
  findByUsername(username) {
    if (checkDataNull(username)) {
      return null;
    }
    return User.findOne({
      username
    });
  },
  create(data) {
    if (checkDataNull(data)) {
      throw new Err('data insert is not null');
    }
    return User.create(data);
  }
};

module.exports = UserService;
