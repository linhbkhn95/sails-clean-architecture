module.exports = {
  /*
  code : mã code trả về  client.
  message : message trả về  client thường dùng cho trường hợp có lỗi.
  data : dữ liệu trả về  cho client thường dùng cho trường hợp trả về  khi có kết quả không gặp lỗi.
  */


  jsonAPIOutput: function (res, code, message, errors, data, status) {
    return res.status(status).send({
      code,
      errors,
      data,
      message
    });
  },
  errServer: function (res, message, errors = null, status = 400) {


    return this.jsonAPIOutput(res, -1, message, errors, null, status);
  },
  // errServer: function (res, err_mssage, status = 400) {
  //   return this.jsonAPIOutput(res, -1, "Erorrs", err_mssage, null, status);
  // },
  success: function (res, data, status = 200) {

    return this.jsonAPIOutput(res, 0, 'Success', null, data, status);
  },
  successAdmin: function (res, data, message = 'Success', status = 200) {
    return res.status(status).send({
      success: true,
      data,
      message
    });
  },
  errorAdmin: function (res, message = 'Errors', errors = null, status = 200) {
    return res.status(status).send({
      success: false,
      message
    });
  },
  objectError: function (errors, code = -1) {
    return {
      message: 'Errors',
      errors,
      code,
      data: null
    };
  },
  objectSuccess: function (data, code = 0) {
    return {
      message: 'Success',
      data,
      code
    };
  },
  statusServer: {
    OK: 200,
    SERVER_ERROR: 500,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    UN_AUTHORIZED: 401,

  },
  code: {
    SUCCESS: 0,
    FAIL: -1,
    ERROR: -500
  }
};
