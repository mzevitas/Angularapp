(function () {

  angular.module('SetList')
  .controller('AddController', 
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $scope.songs = {};

    $scope.addSongs = function () {

      $http.post(appUrl, $scope.songs).success( function (data) {
        $location.path('#/');
      });

    };

  }]);


}());