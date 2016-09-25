const qrDecoder = require('./qr_decoder');
const ticketController = require('./ticket');

module.exports = {
  upload: (req, res, next) => {
    console.log(req);
    if(req.file) {
      console.log('Uploading File');
      // var profileImageOriginlName=req.file.originalname;
      // var profileImageName=req.file.name;
      // var profileImageMime=req.file.mimetype;
      var profileImagePath = req.file.path;
      // var profileImageExt=req.file.extension;
      // var profileImageSize=req.file.size;
      console.log(profileImagePath);
      const decoded = qrDecoder(__dirname + '/../' + profileImagePath);
      ticketController.parseQRString(decoded);

      const response = JSON.stringify({msg: 'file uploaded'});
      res.send(response);
    }
  }
};
