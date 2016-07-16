describe('TestController', function () {
    var scope, ctrl;
    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('TestController', {$scope: scope});
        scope.$digest();
    }));
    var fileUserName = "contributors.json";
    var fileRepoPath = "https://api.github.com/users/x-formation/repos";

    it('should return TRUE and the data about contributions has been loaded', function () {
        expect(scope.getMyUser(fileUserName)).toEqual(true);
    });

    it('should return TRUE and the data about repositories has been loaded', function () {
        expect(scope.getMyRepo(fileRepoPath)).toEqual(true);
    });
});