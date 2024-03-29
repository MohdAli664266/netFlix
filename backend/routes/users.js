var express = require('express');
const {login, logout, register, deleteUser, allUsers} = require('../controllers/user');

var  router = express.Router();
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/register').post(register);
router.route('/deleteUser').post(deleteUser);
router.route('/allUsers').get(allUsers);

module.exports = router;