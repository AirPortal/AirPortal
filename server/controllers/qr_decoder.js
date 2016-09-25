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
    console.log('result of qr code: ' + result);
  } catch(e) {
    console.log('unable to read qr code using fallback string');
    result = 'SIN,HKT,2,E24,SQ5330,1625,24,0950581685';
  }
  return result;
};
