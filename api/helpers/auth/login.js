var OutputUtils = require('../../commons/OutputUtils')

module.exports = {
  friendlyName: 'User',

  description: 'User something.',
  inputs: {
    username: {
      friendlyName: 'Number of users',
      description: 'username of user',
      type: 'string',
    },

    password: {
      description: 'password of user',
      type: 'string',
    }
  },


  exits: {

    success: {
      outputFriendlyName: 'user',
      outputDescription: 'A record user when login success.',
    },

    noUsersFound: {
      description: 'Could not find any users who logged in during the specified time frame.'
    },
    wrongPassword: {
      description: 'Password was wrong!'

    }
  },


  fn: async (inputs, exits) => {
    // TODO
    const {
      username,
      password
    } = inputs;

    let user = await User.findOne({
      username
    });
    if (!user) {
      return exits.success(OutputUtils.objectError({
        username: 'User is not existed in system!'
      }));
    }
    let checkPassword = await sails.helpers.password.compare(password, user.password);
    if (!checkPassword) {
      return exits.success(OutputUtils.objectError({
        password: 'Password was wrong!'
      }));
    }
    let resultGenerate = await sails.helpers.jwt.generate(username);
    if (resultGenerate.code === OutputUtils.code.SUCCESS)
      return exits.success(OutputUtils.objectSuccess(resultGenerate.data));
    return exits.success(OutputUtils.objectError(resultGenerate.message));
  }


};