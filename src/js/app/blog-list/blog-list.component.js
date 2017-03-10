'use strict';

angular.module('blogList')
    .component('blogList', {
        //template: "<div class=''><h1 class='new-class'> {{ title }} </h3><button ng-click='someClickTest()'>Click here!</button></div>",
        templateUrl: '/templates/blog-list.html',
        controller: function($scope) {
            var blogItems = [
                {title: "Some Title", id: 1, description: "This is a book", publishDate: "2017-03-09"},
                 {title: "Title", id: 2, description: "This is a book"},
                  {title: "Tea", id: 3, description: "This is a book"},
                   {title: "Lite", id: 4, description: "This is a book"},
            ];

            $scope.items = blogItems;
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