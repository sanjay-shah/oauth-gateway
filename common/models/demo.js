var request = require('request');

var client_id = '1986438338253957';
var client_secret = '8ed343daa0814218b145b0fb954db249';
var redirect_uri = 'http://107.170.193.26:3000/api/Demos/get_accesstoken';

module.exports = function(Demo) {
  Demo.authcode_callback = function(code, cb) {
	  code = code || '_empty_';
	  cb(null, code);
  };
  Demo.get_accesstoken = function(code, cb) {
  	code = code || '_empty_token_';
  	request({
  		method: 'GET',
    	uri: 'https://graph.facebook.com/v2.9/oauth/access_token',
    	qs: {
    		client_id: client_id,
    		redirect_uri: redirect_uri,
    		client_secret: client_secret,
    		code: code
    	}
  	}, function (error, response, body) {
			  body_object = JSON.parse(body);
			  cb(null, body_object);
		});
  };
};
