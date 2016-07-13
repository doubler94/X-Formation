(function () {

    var app = angular.module('myApp', ['ngRoute']);

    app.controller('TestController', ['$scope', '$http', function ($scope, $http) {
        $scope.getMyUser = function (fileName) {
            $http.get(fileName).success(function (data) {
                $scope.users = data;
            });
            return true;
        };

        $scope.getMyRepo = function (fileName) {
            $http.get(fileName).success(function (data) {
                $scope.repositiories = data;
            });
            return true;
        };
    }]); //TestController

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/index', {
                    templateUrl: 'page/index.html',
                    controller: 'TestController'
                }, null)
                .when('/contributors', {
                    templateUrl: 'page/contributors.html',
                    controller: 'TestController'
                }, null)
                .when('/contributorsTable', {
                    templateUrl: 'page/contributors_table.html',
                    controller: 'TestController'
                }, null)
                .when('/repositories', {
                    templateUrl: 'page/repositories.html',
                    controller: 'TestController'
                }, null)
                .when('/repositoriesTable', {
                    templateUrl: 'page/repositories_table.html',
                    controller: 'TestController'
                }, null)
                .otherwise({
                    redirectTo: '/index'
                });
        }]); // RouteConfig

})();
