const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
});

const userController = require(path.join(__dirname, '/controllers/user'));
const uploadController = require(path.join(__dirname, '/controllers/upload'));
const weatherController = require(path.join(__dirname, '/controllers/weather'));
const bagController = require(path.join(__dirname, '/controllers/bag'));
const todoController = require(path.join(__dirname, '/controllers/todo'));

router.post('/login', userController.login);
router.post('/upload', upload.single('profileImage'), uploadController.upload);

router.get('/weather', weatherController.getWeather);
router.get('/getBags', bagController.getBagsForPassenger);
router.get('/getTodo', todoController.getRandomTodo);

module.exports = router;
