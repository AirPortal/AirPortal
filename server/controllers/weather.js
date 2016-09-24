const https = require('https');

module.exports = {
  getWeather: () => {
    var options = {
      hostname: 'weather-qa.api.aero',
      port: 443,
      path: '/weather/v1/current/HAM?temperatureScale=C',
      method: 'GET',
      headers: { 'x-apiKey': '89e15931434731aefdaa04920ec60e44' }
    };

    var req = https.request(options, res => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);

      res.on('data', d => {
        process.stdout.write(d);
      });
    });
    req.end();

    req.on('error', e => {
      console.error(e);
    });
  }
};
