
var userController    = require('./api/v1/user');

var router            =  require('express').Router();

router.post('/login', userController.login);
module.exports = router;