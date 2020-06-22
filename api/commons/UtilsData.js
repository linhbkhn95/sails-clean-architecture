var moment = require('moment');
var crypto = require('crypto');

module.exports = {
  JSONparseOject: function (data, type = 'object') {
    try {
      return JSON.parse(data);
    } catch (error) {
      if (type === 'array') {
        return [];
      }
      ////console.log("parse json to object error", error);
      return {};
    }
  },
  JSONparseArray: function (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      return [];

    }
  },
  split: function (data, char) {
    try {
      return data.split(char);
    } catch (error) {
      return [];
    }
  },
  formatDate: function (date, typeFormat) {},
  getTokenFromReq: function (req) {
    if (req.headers && req.headers.authorization) {
      //authorization header is present
      var parts = req.headers.authorization.split(' ');
      if (parts.length == 2) {
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
  getSortFormQuery: function (sort) {
    try {
      var rs = [];
      for (var i = 0; i < sort.length; i++) {
        element = sort[i];
        var dataSort;
        try {
          dataSort = element.split('_');
          if (dataSort.length < 2) {
            return null;
          }

        } catch (error) {
          return null;
        }
        if (['DESC', 'ASC'].includes(dataSort[1].toUpperCase())) {
          rs.push({
            [dataSort[0]]: dataSort[1]
          });
        } else {
          return null;
        }
      }
      return rs;
    } catch (error) {
      ////console.log("TCL: error", error)
      return null;
    }
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
}