(function (){

angular.module('SetList', ['ngRoute'])

.constant ({
    'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/mzset1/'
  })

.config( function ($routeProvider){


$routeProvider.when('/', {
	templateUrl: 'templates/setlist_template.html',
	controller: 'SetController'

});


$routeProvider.when('/add', {
	templateUrl: 'templates/add_template.html',
	controller: 'AddController'

});

$routeProvider.when('/single/:sid', {
  templateUrl: 'templates/single_template.html',
  controller: 'SingleController'
});



});

}());

(function () {

  angular.module('SetList')
  .controller('AddController', 
    ['$scope', '$http', '$location', 'appUrl', function ($scope, $http, $location, appUrl) {

    $scope.songs = {};

    $scope.addSongs = function () {

      $http.post(appUrl, $scope.songs).success( function (data) {
        $location.path('/');
      });

    };

  }]);


}());
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
(function () {
  
  angular.module('SetList')
  .controller('SingleController', 
    ['$scope', '$routeParams', '$http', 'appUrl', function ($scope, $routeParams, $http, appUrl) {

      $http.get(appUrl + $routeParams.sid).success( function (data) {
        $scope.songs = data;
      });

  }]);
  
}());