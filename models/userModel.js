'use strict';

/**
 * Module dependencies.
 */
module.exports = function(mongoose) {
 var Schema = mongoose.Schema,
 validation = require('./validationModel'),
  UserSchema = new Schema({


  userName: {
    type: String,
    required: 'User name cannot be blank',
  },
  userAddress: {
    type: String,
    required: 'User address cannot be blank',
  },
  userEmail: {
    type: String,
    lowercase: true,
    trim: true,  unique: true,
    required: 'Email address is required',
    validate: [validation.validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  dateTime:{
    type: Date,
    default : Date.now
  }


});
mongoose.model('users', UserSchema);
};
