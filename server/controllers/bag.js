const https = require('https');
const apiKey = '7989ca6cbadb38855a6112a2eab0d594';

module.exports = {
  getBagsForPassenger: (clientReq, clientRes) => {
    const resObj = {
      'bags': {
        'type':'array',
        'description':'Bags Information',
        'required': false,
        'items': {
          'type':'object',
          'description':'Bag information',
          'required': false,
          'bagtag': {
            'type':'string',
            'description':'The 10-digit License Plate Number (LPN) of the bag',
            'required': true
          },
          'passenger_first_name': {
            'type':'string',
            'description':'The first name of the passenger',
            'required': false
          },
          'passenger_last_name': {
            'type':'string',
            'description':'The surname of the passenger',
            'required': false
          },
          'rush_bag_indicator': {
            'type':'string',
            'description':'This specifies if the bag is a rush bag',
            'required': true
          },
          'rushtag': {
            'type':'string',
            'description':'Rush Tag Id is conditional information \
            returned for the bag. It is the most up to date Re-flighted \
            Tag Id associated with a bag',
            'required': false
          }
        }
      }
    };
    clientRes.send(JSON.stringify(resObj));
  }
};
