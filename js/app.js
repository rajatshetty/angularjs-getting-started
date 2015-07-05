/**
 * Created by rshetty2 on 7/5/15.
 */


'use strict';
angular.module("app", []).config(["$routeProvider",function($routeProvider) {
    $routeProvider.
        when('/welcome', {
            templateUrl: 'htmls/welcome.html',
           controller: initController
        }).
        when('/page1', {
            templateUrl: 'htmls/page1.html',
            controller: initController
        }).
        when('/page2', {
            templateUrl: 'htmls/page2.html',
            controller: initController
        }).
        otherwise({
            redirectTo: '/welcome'
        });
    }]).run(function($rootScope,$location){

    $rootScope.gotoPage=function(uri){
        $location.url(uri);
    }

});


angular.modue("app")


