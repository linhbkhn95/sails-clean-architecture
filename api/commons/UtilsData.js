var crypto = require('crypto');

module.exports = {

  getTokenFromReq: function (req) {
    if (req.headers && req.headers.authorization) {
      //authorization header is present
      var parts = req.headers.authorization.split(' ');
      if (parts.length === 2) {
        var scheme = parts[0];
        var credentials = parts[1];

        if (/^Bearer$/i.test(scheme)) {
          return credentials;
        }
        return null;


      }
      return null;

    }
    return null;
  },

  isVideo(ext) {

    switch (ext.toLowerCase()) {
      case 'm4v':
      case 'avi':
      case 'mpg':
      case 'mp4':
      case 'mp4a':
      case '3gp':
        // etc
        return true;
    }
    return false;
  },
  getHash: (data, len) => {
    var hash = crypto.createHash('md5').update(data).digest('hex');
    if (len && len !== undefined) {
      return hash.substring(0, len);
    }
    return hash;
  }
};
