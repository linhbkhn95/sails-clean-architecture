/* eslint-disable camelcase */
var OutputUtils = require('../../commons/OutputUtils')
module.exports = {


  friendlyName: 'User',


  description: 'Register account',


  inputs: {
    username: {
      friendlyName: 'username of user',
      description: 'username of user',
      type: 'string',
    },

    password: {
      description: 'password of user',
      type: 'string',
    },
    fullname: {
      description: 'fullname of user',
      type: 'string',
    }
  },


  exits: {

    success: {
      outputFriendlyName: 'user',
      outputDescription: 'A record user when login success.',
    },

    existedAccount: {
      description: 'Could not find any users who logged in during the specified time frame.'
    },
  },


  fn: async (inputs, exits) => {
    // TODO
    const {
      username,
      password,
      fullname
    } = inputs;

    //check user existed!
    let user_existed = await User.findOne({
      username
    });
    if (user_existed) {
      exits.success(OutputUtils.objectError({
        username: 'Username is existed!'
      }));
    }
    let user = await User.create({
      username,
      password,
      fullname
    }).fetch();
    return exits.success(OutputUtils.success(user));

    // If no users were found, trigger the `noUsersFound` exit.

  }


};
