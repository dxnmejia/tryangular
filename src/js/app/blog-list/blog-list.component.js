'use strict';

angular.module('blogList')
    .component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function(Post, $location, $routeParams, $rootScope, $scope) {
            $scope.items = Post.query();
            $scope.goToItem = function(post) {
                $rootScope.$apply(function() {
                    // set the path where you want to go when this function is executed
                    $location.path("/blog/" + post.id);
                })
            }
        }
    });