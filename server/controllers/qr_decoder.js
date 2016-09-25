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
    result = 'SIN,SFO,1,14,UA2,1815,3,A,Leisley,Brooks,0950474012';
  }
  return result;
};
