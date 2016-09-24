const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  dest: 'uploads/'
});

const userController = require(__dirname + '/controllers/user');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/upload', upload.single('profileImage'), (req, res, next) => {
  if(req.file) {
    console.log('Uploading File');
    var profileImageOriginlName=req.file.originalname;
    var profileImageName=req.file.name;
    var profileImageMime=req.file.mimetype;
    var profileImagePath=req.file.path;
    var profileImageExt=req.file.extension;
    var profileImageSize=req.file.size;
    console.log(profileImagePath);
  } else {

  }
});

module.exports = router;
