var OutputUtils = require('../../commons/OutputUtils');

module.exports = {
  friendlyName: 'User',

  description: 'Get Desc for user something.',
  inputs: {
    username: {
      friendlyName: 'username of users',
      description: 'username of user',
      type: 'string',
    },


  },


  exits: {

    success: {
      outputFriendlyName: 'user',
      outputDescription: 'A record user when login success.',
    },


  },


  fn: async (inputs, exits) => {
    // TODO
    const {
      username,
    } = inputs;

    let user = await User.findOne({
      username
    });
    if (!user) {
      return exits.success(OutputUtils.objectError({
        username: 'User is not existed in system!'
      }));
    }

    return exits.success(OutputUtils.objectSuccess(user));
  }


};
