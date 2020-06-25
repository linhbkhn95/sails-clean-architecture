var jwt = require('jsonwebtoken')
var OutputUtils = require('../../commons/OutputUtils')

module.exports = {
    friendlyName: 'Verify JWT',
    description: 'Verify a JWT token.',
    inputs: {
        req: {
            type: 'ref',
            friendlyName: 'Request',
            description: 'A reference to the request object (req).',
            required: true
        },
    },
    exits: {
        invalid: {
            description: 'Invalid token or no authentication present.',
        }
    },
    fn: function (inputs, exits) {
        var req = inputs.req
        // first check for a cookie (web client)

        // no? then check for a JWT token in the header
        if (req.header('authorization')) {
            // if one exists, attempt to get the header data
            var token = req.header('authorization').split('Bearer ')[1]
            console.log("token", token)
            // if there's nothing after "Bearer", no go
            if (!token) return exits.success(OutputUtils.objectError('Token is valid !'))
            // if there is something, attempt to parse it as a JWT token
            return jwt.verify(token, sails.config.jwtSecret, async function (err, payload) {
                if (err || !payload.username) return exits.success(OutputUtils.objectError('Token is valid !'))
                var user = await User.findOne({
                    username: payload.username
                })
                if (!user) return exits.success(OutputUtils.objectError('User is not existed in system !'))
                // if it got this far, everything checks out, success
                req.user = user
                return exits.success(OutputUtils.objectSuccess(user))
            })
        }
        // if neither a cookie nor auth header are present, then there was no attempt to authenticate
        return exits.success(OutputUtils.objectError('Token is valid !'))
    }
}