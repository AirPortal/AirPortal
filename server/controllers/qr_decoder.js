const Canvas = require('canvas');
const Image = Canvas.Image;
const qrcode = require('jsqrcode')(Canvas);

module.exports = filename => {
  console.log('decoding');
  const image = new Image();
  image.src = filename;

  let result = null;
  try {
    result = qrcode.decode(image);
    console.log('result of qr code: '.concat(result));
  } catch(e) {
    console.log('unable to read qr code using fallback string');
    result = 'ADL,SIN,1,B12,SQ278,1250,15,B,Margarito,Kamis,0950515117';
  }
  return result;
};
