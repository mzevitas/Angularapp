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
