(function (){

angular.module('SetList', ['ngRoute'])

.constant ({
    'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/mzset/'
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
