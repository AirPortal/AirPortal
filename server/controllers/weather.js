const https = require('https');
const apiKey = '89e15931434731aefdaa04920ec60e44';

module.exports = {
  getWeather: (clientReq, clientRes) => {
    var options = {
      hostname: 'weather-qa.api.aero',
      port: 443,
      path: '/weather/v1/current/HAM?temperatureScale=C',
      method: 'GET',
      headers: { 'x-apiKey': apiKey }
    };

    var apiReq = https.request(options, apiRes => {
      console.log('statusCode:', apiRes.statusCode);
      console.log('headers:', apiRes.headers);

      apiRes.on('data', d => {
        clientRes.send(d);
      });
    });
    apiReq.end();

    apiReq.on('error', e => {
      console.error(e);
    });
  }
};
