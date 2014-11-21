(function () {

  angular.module('SetList', [])
  .controller('AddController', 
    ['$scope', '$http', '$location', '$window', function ($scope, $http, $location, $window) {

    $scope.song = {};

    $scope.addSong = function () {

      $http.post($window.url, $scope.song).success( function (data) {
        $location.path('/setone');
      });

    };

  }]);


}());