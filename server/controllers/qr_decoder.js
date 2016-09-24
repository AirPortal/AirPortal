const Canvas = require('canvas');
const Image = Canvas.Image;
const qrcode = require('jsqrcode')(Canvas);

// const filename = __dirname + '/qrcode.png';

module.exports = filename => {
  const image = new Image();
  image.onload = () => {
    var result;
    try {
      result = qrcode.decode(image);
      console.log('result of qr code: ' + result);
    } catch(e) {
      console.log('unable to read qr code');
    }
  };
  image.src = filename;
};
