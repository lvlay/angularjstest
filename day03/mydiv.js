/**
 * Created by maggie on 16/11/28.
 */
var app = angular.module('test', []);
app.controller('ctrl1', function ($scope) {
    $scope.show = false;

})
app.directive('mydiv', function () {

    var json = {
        restrict: 'E',
        template: '<div class="{{show?\'box2\':\'box\'}}">\
        <a href="javascript:;"ng-click="show=!show">显示更多</a>\
        <ng-transclude></ng-transclude></div>',
        transclude: true
    }
    return json;
})

