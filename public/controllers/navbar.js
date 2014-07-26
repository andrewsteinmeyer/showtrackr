angular.module('myApp')
.controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
  $scope.logout = function() {
    Auth.logout();
  };
}]);