const request = require('request');
 
_EXTERNAL_URL = 'https://developers.coinbase.com/api/v2#get-exchange-rates';

const callExternalApiUsingRequest = (callback) => {
    request(_EXTERNAL_URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

module.exports.callApi = callExternalApiUsingRequest;