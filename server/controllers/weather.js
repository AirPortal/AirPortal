const https = require('https');

module.exports = {
  getWeather: (clientReq, clientRes) => {
    var options = {
      hostname: 'weather-qa.api.aero',
      port: 443,
      path: '/weather/v1/current/HAM?temperatureScale=C',
      method: 'GET',
      headers: { 'x-apiKey': '89e15931434731aefdaa04920ec60e44' }
    };

    var apiReq = https.request(options, apiRes => {
      console.log('statusCode:', apiRes.statusCode);
      console.log('headers:', apiRes.headers);

      apiRes.on('data', d => {
        // process.stdout.write(d);
        const responseObject = {response: d};
        clientRes.send(JSON.stringify(responseObject));
      });
    });
    apiReq.end();

    apiReq.on('error', e => {
      console.error(e);
    });
  }
};
