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
