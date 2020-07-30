'use strict';
module.exports = function(app) {
  var users = require('../controllers/users.controller');
   app.route('/users')
    .get(users.getAllUser)
    .post(users.create)
    .patch(users.updateUser);

   app.route('/users/:userId')
       .get(users.getParticularUser)
       .delete(users.delete);
};
