(function () {
  
  angular.module('SetList')
  .controller('SingleController', 
    ['$scope', '$routeParams', '$http', 'appUrl', function ($scope, $routeParams, $http, appUrl) {

      $http.get(appUrl + $routeParams.sid).success( function (data) {
        $scope.songs = data;
      });

  }]);
  
}());