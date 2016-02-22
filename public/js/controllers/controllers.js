app.controller('MainController', ['$scope', function($scope) {
    var vm = this;
}]);

app.controller('ContactController', ['$scope', '$http', 'toastr', function($scope, $http, toastr) {
    var ctvm = this;
    
    ctvm.send = function(isValid) {
  	//Send data   
  	if (isValid) {
      var data = {
        "name": ctvm.contact.fname + ' ' + ctvm.contact.lname,
        "email": ctvm.contact.email,
        "message": ctvm.contact.message
      }
   		$http.post('/api/contactus/', data).then(function(res) {
               res = res || false;
               console.log(res);
               if (res && res.data.success) {
                   toastr.success('Your message was successfully sent.', 'Success!');
               } else {
                   toastr.error('Please try again or come back later.', 'Something went wrong');
               }
                ctvm.contact.fname = "";
                ctvm.contact.lname = "";
                ctvm.contact.email = "";
                ctvm.contact.message = "";
               $scope.contactMe.$setPristine(); 
       });
  	}
  };    
}]);