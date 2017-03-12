'use strict';

angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: 'templates/blog-detail.html',
        controller: function(Post, $http, $location, $routeParams, $scope) {

            // console.log(Post.query());
            // console.log(Post.get());

            Post.query(function(data) {
                $scope.notFound = true;
                angular.forEach(data, function(post) {
                    if (post.id == $routeParams.id) {
                        $scope.notFound = false;
                        $scope.post = post;
                    }
                });
            });
            
            if($scope.notFound) {
                console.log("Not found");
                // change location
                $location.path("/404"); // Just with the purpose of changing the URL.
            }
        }
    });