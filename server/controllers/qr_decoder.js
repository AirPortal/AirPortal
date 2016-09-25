const Canvas = require('canvas');
const Image = Canvas.Image;
const qrcode = require('jsqrcode')(Canvas);

module.exports = filename => {
  console.log('decoding');
  const image = new Image();
  image.src = filename;
  // image.onload = () => {
  let result = null;
  try {
    result = qrcode.decode(image);
    console.log('result of qr code: ' + result);
  } catch(e) {
    console.log('unable to read qr code');
  }
  return result;
  // };
};
