var OutputUtils = require('../../commons/OutputUtils')
var jwt = require('jsonwebtoken')

module.exports = {
  friendlyName: 'JSON web token',

  description: 'generate token jwt for user.',
  inputs: {
    username: {
      friendlyName: 'username of users',
      description: 'username of user',
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
      username
    } = inputs;

    var token = jwt.sign({
      username: username
    }, sails.config.jwtSecret, {
      expiresIn: sails.config.jwtExpires
    })

    return exits.success(OutputUtils.objectSuccess(token));

  }


};