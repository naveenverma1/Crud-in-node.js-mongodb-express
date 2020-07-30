
"use strict";
module.exports = {
  uSERs: {},
  userName: [],
  messagerooms: [],
  _emailSendFrom: "01naveenv@gmail.com",
  _dataGetSuccess: "success",
  _anotherUser:"anotherUser",
  _flag: {

    noexist: {
      flag: "notExist",
      msg: "User does not exist"
    },
    delete: {
      flag: "delete",
      msg: "User delete successfully"
    },
    invalid: {
      flag: "invalid",
      msg: "Invalid Parameter"
    },
    authorization: {
      flag: "authorization",
      msg: "Invalid Authorization-Key"
    },
    contentType: {
      flag: "content-type",
      msg: "Content-Type must be application/json"
    },
    badReqest: {
      flag: "bad-request",
      msg: "Bad Request"
    },
    params: {
      flag: "parameter-error",
    },
    database: {
      flag: "server-error",
      msg: "Server Internal Error"
    }
  },
};
