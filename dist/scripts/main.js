(function (){

angular.module('SetList', ['ngRoute'])

.config( function ($routeProvider){


$routeProvider.when('/setone', {
	templateUrl: 'templates/setlist_template.html',
	controller: 'SetOneController'

});


$routeProvider.when('/add', {
	templateUrl: 'templates/add_template.html',
	controller: 'AddController'

});


});

}());

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