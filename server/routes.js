const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: __dirname + '/uploads/' }); // for parsing multipart/form-data

const userController = require(__dirname + '/controllers/user');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/upload', upload.array());

module.exports = router;
