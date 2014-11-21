(function (){

  angular.module('SetList', [])

  .controller('SetOneController', 
    ['$scope', '$http', '$location', '$window', function ($scope, $http, $location, $window) {

    $window.url = 'http://tiy-atl-fe-server.herokuapp.com/collections/mzset/'; 

    $http.get(url).success( function (results){
      $scope.song = results;
    });

    $scope.viewMore = function (songs) {
      $location.path('/' + songs._id);
    };


  }]);

}());