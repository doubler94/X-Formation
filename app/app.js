(function () {

    var app = angular.module('myApp', ['ngRoute']);

    app.controller('TestController', ['$scope', '$http', function ($scope, $http) {
        $http.get('contributors.json').success(function (data) { 
            $scope.users = data;
        });
    }]); //TestController

    app.config(['$routeProvider',
        function ($routeProvider, $locationProvider) {
            // $locationProvider.html5Mode(true);
            $routeProvider
                .when('/index', {
                    templateUrl: 'page/index.html',
                    controller: 'TestController'
                }, null)
                .when('/contributions', {
                    templateUrl: 'page/contributions.html',
                    controller: 'TestController'
                }, null)
                .when('/repositories', {
                    templateUrl: 'page/repositories.html',
                    controller: 'TestController'
                }, null)
                .otherwise({
                    redirectTo: '/index'
                });
        }]); // RouteConfig

})();
