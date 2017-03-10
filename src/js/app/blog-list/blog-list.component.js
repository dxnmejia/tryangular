'use strict';

angular.module('blogList')
    .component('blogList', {
        template: "<div class=''><h1 class='new-class'> {{ title }} </h3><button ng-click='someClickTest()'>Click here!</button></div>",
        controller: function($scope) {
            console.log("hello");
            $scope.title = "Hi there";
            $scope.clicks = 0;
            $scope.someClickTest = function() {
                console.log("clicked");
                $scope.clicks++;
                $scope.title = "Clicked " + $scope.clicks + " times";
            }
        }
    });

    // .controller('BlogListController', function() {
    //     console.log("hello");
    //     this.title = "Hi there";
    //     this.clicks = 0;
    //     this.someClickTest = function() {
    //         console.log("clicked");
    //         this.clicks++;
    //         this.title = "Clicked " + this.clicks + " times";
    //     }
    // });
//    .component('blogList');