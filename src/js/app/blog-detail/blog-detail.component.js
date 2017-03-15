'use strict';

angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: 'templates/blog-detail.html',
        controller: function(Post, $http, $location, $routeParams, $scope) {
            $scope.comments = [];
            Post.query(function(data) {
                $scope.notFound = true;
                var i = 0;
                angular.forEach(data, function(post) {
                    if (post.id == $routeParams.id) {
                        $scope.notFound = false;
                        $scope.post = post;
                        if (post.comments) {
                            $scope.comments = post.comments;
                        }
                        resetReply();
                    }
                });

            });

            $scope.addReply = function() {
                console.log($scope.reply);
                $scope.comments.push($scope.reply);
                resetReply();
            }

            $scope.deleteComment = function(comment) {
                console.log("Deleted");
                $scope.$apply( // It makes the change to the scope
                    $scope.comments.splice(comment, 1) // Delete it
                );
                // someResource.$delete()
            }

            function resetReply() {
                $scope.reply = {
                    "id": $scope.comments.length + 1,
                    "text": "",
                }
            }
            
            if($scope.notFound) {
                console.log("Not found");
                $location.path("/404");
            }
        }
    });