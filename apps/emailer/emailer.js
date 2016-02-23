'use strict';

var nodemailer = require('nodemailer');
var emailConfig = {
	'service': process.env.EMAIL_SERVICE,
	'username': 'nickzelei@gmail.com',// process.env.EMAIL_USERNAME,
	'passwordToken': 'mlpefvhifpktksms'// process.env.EMAIL_PASSWORDTOKEN
};
console.log("Process", process);
console.log("env", process.env);
module.exports = {
	sendMail: function(data, callback) {
		var transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
            port: 465,
            secure: true,
			auth: {
		        user: emailConfig.username,
		        pass: emailConfig.passwordToken
	    }
		});
		console.log(process.env.EMAIL_USERNAME);
        console.log(process.env.EMAIL_PASSWORDTOKEN);
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