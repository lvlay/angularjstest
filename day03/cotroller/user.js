/**
 * Created by maggie on 16/11/28.
 */

var app=angular.module("userMod",[]);
app.controller('userController',function ($scope) {

    $scope.user={
        username:"tom",
        money:2300
    }

})