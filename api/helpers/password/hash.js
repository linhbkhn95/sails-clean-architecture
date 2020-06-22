const bcrypt = require('bcryptjs');

module.exports = {
  friendlyName: 'Password helper',

  description: 'Generate hash password',

  inputs: {
    password: {
      description: 'user password',
      type: 'string',
      required: true
    }
  },

  exits: {
    success: {
      description: 'return string hash of password'
    },
    exp: {

    }
  },


  fn: (inputs, exits) => {
    const {
      password
    } = inputs;

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return exits.exp();
      }
      return exits.success(hash);
    });
  }
};
