const https = require('https');
const apiKey = '7989ca6cbadb38855a6112a2eab0d594';

module.exports = {
  getBagsForPassenger: (clientReq, clientRes) => {
    const resObj = {
      // Waiting time in minutes
      waitingTime: 15
    };
    clientRes.send(JSON.stringify(resObj));
  }
};
