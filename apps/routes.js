var path = require('path');
var Emailer = require('./emailer/emailer');
var mongoose = require('mongoose');


module.exports = function(app) {
  app.get('/api', function(req, res) {
      res.json({ message: 'Youve reached the API!'});
  });

  app.post('/api/contactus', function(req, res) {
      var data = req.body || false;
      console.log(data);
      if (data) {
        Emailer.sendMail(data, function(error, greatSuccess) {
          if (error) {
            console.log(error);
          }
          res.json({ success: greatSuccess });
        });
      }
      else {
        res.json({ success: false });
      }
  });
  
  //catch all to handle angular routes
  app.get('*', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public/views/') });
  });
};
