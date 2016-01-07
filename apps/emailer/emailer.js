'use strict';

var nodemailer = require('nodemailer');
var emailConfig = require('../../config/emailerconfig');

module.exports = {
	sendMail: function(data, callback) {
		var transporter = nodemailer.createTransport({
			service: emailConfig.service,
			auth: {
		        user: emailConfig.username,
		        pass: emailConfig.passwordToken
	    }
		});
		
		var subject = "New Inquiry from: " + data.name;
		var text = "Name: " + data.name + "<br><br>" +
					"Phone: " + data.phone + "<br><br>" + 
					"Email: " + data.email + "<br><br>" + 
					"Message: " + data.message;

		var message = {
			from: emailConfig.username,
			to: emailConfig.username,
			subject: subject,
			html: text
		};

		transporter.sendMail(message, function(error, info) {
			if (error) {
				console.log('Error occurred');
				console.log(error);
				console.log(error.message);
				if (callback)
					callback(error.message, false);
				return;
			}

			console.log('Message success!');
			console.log(info);
			console.log('Server responded with "%s"', info.response);

			if (callback)
				callback(null, true);
		});
	}
};