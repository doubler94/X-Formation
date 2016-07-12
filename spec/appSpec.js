describe('TestController', function () {
    var scope, ctrl;
    beforeEach(module('myApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('TestController', {$scope: scope});
        scope.$digest();
    }));
    var fileName = "contributors.json";

    it('should return TRUE and the data has been loaded', function () {
        expect(scope.getMyData(fileName)).toEqual(true);
    });
});