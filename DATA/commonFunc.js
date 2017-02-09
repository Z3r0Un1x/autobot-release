//Fri Feb, 3 2017 6:40 PM
'use strict'
var fs = require('fs');
var path = require('./const.js').path;
var colors = require('colors');

module.exports = {
	//log function
	log: function(data, option) {
		if(option == 0)
			return console.log('[✓]::'.green+data.white);
		if(option == 1)
			return console.log('[!]::'.red+data.white);
		if(option == -1)
			return console.log('[⚠]::'.yellow+data.white);
		if(option == 2)
			return console.log('[☠]::'.blue+data.white);
		if(option == null || option == undefined)
			return console.log(('[LOGGER] '+data).white);
	},

	//encode/decode functions
	base64_encode: function(data) {
		var encode = new Buffer(data).toString('base64');
		return encode;
	},
	base64_decode: function(data) {
		var decode = new Buffer(data, 'base64').toString('utf8');
		return decode;
	}

}
