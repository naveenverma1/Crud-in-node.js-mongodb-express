'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  errorHandler = require('./errors.controller'),
  view = require('../view/responseDTO'),
  message = require('../message/index');

/**
 *  Create User
 */
module.exports.create = function(req, res, next) {
  try {
    var user = mongoose.model('users'),
      doc = new user(req.body);
    doc.save(function(err) {
      if (err) {
        view._view({
          code: 400,
          flag: message._flag.params.flag,
          message: errorHandler.getErrorMessage(err)
        }, res, next);
      } else {
        view._view({
          code: 200,
          message: message._dataGetSuccess,
	     }, res, next);
      }
    });
  } catch (err) {
    view._view({
      code: 500,
      flag: message._flag.database.flag,
      message: err.message
    }, res, next);
  }
};

/**
 *  GET User All Profile
 */
module.exports.getAllUser = function(req, res, next) {
 try{
 var user = mongoose.model('users');
 	 user.find({},function(err,doc){
		if (err) {
        view._view({
          code: 400,
          flag: message._flag.params.flag,
          message: errorHandler.getErrorMessage(err)
        }, res, next);
      } else {
        view._view({
          code: 200,
          message: message._dataGetSuccess,
          users:doc,
       }, res, next);

	}

	})

  } catch (err) {
    view._view({
      code: 500,
      flag: message._flag.database.flag,
      message: err.message
    }, res, next);
  }
};


/**
 *  GET User particular Profile
 */
module.exports.getParticularUser = function(req, res, next) {
 try{
  var user = mongoose.model('users');
  console.log(req.params.userId);
    user.findById(req.params.userId,function(err,doc) {
		if (err) {
        view._view({
          code: 400,
          flag: message._flag.params.flag,
          message: errorHandler.getErrorMessage(err)
        }, res, next);
      } else {
        view._view({
          code: 200,
          message: message._dataGetSuccess,
          user:doc,
       }, res, next);

	}

    });
  } catch (err) {
    view._view({
      code: 500,
      flag: message._flag.database.flag,
      message: err.message
    }, res, next);
  }
};

/**
 *  Update User
 */
module.exports.updateUser = function(req, res, next) {
  try {

    var User = mongoose.model('users');
    User.update({
      _id: req.body.userId
    }, req.body, function(err) {
      if (err) {
        view._view({
          code: 400,
          flag: message._flag.params.flag,
          message: errorHandler.getErrorMessage(err)
        }, res, next);
      } else {
        view._view({
          code: 200,
          flag: message._dataGetSuccess,
          message: message._dataGetSuccess,
        }, res, next);
      }
    });
  } catch (err) {
    view._view({
      code: 500,
      flag: message._flag.database.flag,
      message: err.message
    }, res, next);
  }
};

 /**
 *  GET Delete User Profile
 */
module.exports.delete = function(req, res, next) {
 try{
 var user = mongoose.model('users');
    user.remove({_id:req.params.userId},function(err,doc) {
		if (err) {
        view._view({
          code: 400,
          flag: message._flag.params.flag,
          message: errorHandler.getErrorMessage(err)
        }, res, next);
      } else {
        view._view({
          code: 200,
          flag: message._flag.delete.flag,
          message: message._flag.delete.msg,
       }, res, next);

	}

    });
  } catch (err) {
    view._view({
      code: 500,
      flag: message._flag.database.flag,
      message: err.message
    }, res, next);
  }
};
