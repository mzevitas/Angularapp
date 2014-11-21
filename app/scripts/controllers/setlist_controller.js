(function (){

  angular.module('SetList')

  .controller('SetController', 
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {


    $http.get(appUrl).success( function (results){
      $scope.song = results;
    });

    $scope.viewMore = function (songs) {
      $location.path('/single/' + songs._id);
    };


  }]);

}());