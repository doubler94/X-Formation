(function () {

    var app = angular.module('myApp', ['ngRoute']);

    app.controller('TestController', ['$scope', '$http', function ($scope, $http) {
        $scope.getMyUser = function (fileName) {
            $http.get(fileName).success(function (data) {
                $scope.users = data;
                console.log(data);
            });
            return true;
        };

        $scope.getMyRepo = function (path) {
            $http.get(path)
                .success(function (data, status, headers, config) {
                    var json = JSON.stringify(data);
                    $scope.repositiories = data;
                    console.log(json);
                })
                .error(function (error, status, headers, config) {
                    console.log(status);
                    console.log("Error occured");
                });
            return true;
        };
    }]); //TestController

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.withCredentials = false;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }]); // httpConfig

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider
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
                });
        }]); // RouteConfig

})();
