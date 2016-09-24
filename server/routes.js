var express = require('express');
var router = express.Router();

router.post('/register', require(__dirname + '/controllers/user'));

module.exports = router;
