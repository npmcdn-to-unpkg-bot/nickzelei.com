var app = angular.module('MySiteApp', ['ngAnimate', 'toastr']);

app.config(['toastrConfig', function(toastrConfig) {
    
    angular.extend(toastrConfig, {
        positionClass: 'toast-bottom-right'
    });
}]);