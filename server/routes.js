const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
});

const userController = require(__dirname + '/controllers/user');
const uploadController = require(__dirname + '/controllers/upload');
const weatherController = require(__dirname + '/controllers/weather');
const bagController = require(__dirname + '/controllers/bag');
const todoController = require(__dirname + '/controllers/todo');

router.post('/login', userController.login);
router.post('/upload', upload.single('profileImage'), uploadController.upload);

router.get('/weather', weatherController.getWeather);
router.get('/getBags', bagController.getBagsForPassenger);
router.get('/getTodo', todoController.getRandomTodo);

module.exports = router;
