'use strict';

angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: 'templates/blog-detail.html',
        controller: function(Post, $http, $location, $routeParams, $scope) {
            Post.query(function(data) {
                $scope.notFound = true;
                angular.forEach(data, function(post) {
                    if (post.id == $routeParams.id) {
                        $scope.notFound = false;
                        $scope.post = post;
                        resetReply();
                    }
                });

            });

            $scope.addReply = function() {
                console.log($scope.reply);
                $scope.post.comments.push($scope.reply)
                resetReply();
            }

            $scope.deleteComment = function(comment) {
                console.log("Deleted");
                $scope.$apply( // It makes the change to the scope
                    $scope.post.comments.splice(comment, 1) // Delete it
                );
                // someResource.$delete()
            }

            function resetReply() {
                $scope.reply = {
                    "id": $scope.post.comments.length + 1,
                    "text": "",
                }
            }
            
            if($scope.notFound) {
                console.log("Not found");
                $location.path("/404");
            }
        }
    });