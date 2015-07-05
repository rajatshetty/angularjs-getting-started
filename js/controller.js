/**
 * Created by rshetty2 on 7/5/15.
 */
'use strict';
function initController($scope,$routeParams,$location,DataStore) {

    $scope.initPage=function()
    {
        var uri = $location.path();
        if(uri=='/page1'){
            $scope.data=DataStore.getPage1Data();
        }
        else if(uri=='/page2'){
            $scope.data=DataStore.getPage2Data();
        }
        else
        {
            $scope.data=DataStore.getWelcomePageData();
        }

    }

}

function page1Controller($scope,$routeParams,$location,DataStore) {

    $scope.initPage=function()
    {
        var uri = $location.path();
        if(uri=='/page1'){
            $scope.data=DataStore.getPage1Data();
        }
        else if(uri=='/page2'){
            $scope.data=DataStore.getPage2Data();
        }
        else
        {
            $scope.data=DataStore.getWelcomePageData();
        }

    }

}

function page2Controller($scope,$routeParams,$location,DataStore) {

    $scope.initPage=function()
    {
        var uri = $location.path();
        if(uri=='/page1'){
            $scope.data=DataStore.getPage1Data();
        }
        else if(uri=='/page2'){
            $scope.data=DataStore.getPage2Data();
        }
        else
        {
            $scope.data=DataStore.getWelcomePageData();
        }

    }

}