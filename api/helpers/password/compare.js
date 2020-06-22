const bcrypt = require('bcryptjs');

module.exports = {
  friendlyName: 'Password helper',

  description: 'Compare password',

  inputs: {
    password: {
      description: 'password of user',
      type: 'string',
      required: true
    },
    hashPassword: {
      type: 'string',
      required: true,
      description: 'hash password of user'
    }
  },

  exits: {
    success: {
      description: 'return boolean result'
    },

  },

  // fn: (inputs, exits) => {
  //   const { password } = inputs;
  //   var hash = bcrypt.hashSync(password, 10);
  //   return exits.success(hash);
  // }
  //use for callback
  fn: (inputs, exits) => {
    const {
      password,
      hashPassword
    } = inputs;

    bcrypt.compare(password, hashPassword, (err, res) => {
      if (err) {
        return exits.success(false);
      }
      if (res) {
        return exits.success(true);

      }
      return exits.success(false);
    });
  }
};
