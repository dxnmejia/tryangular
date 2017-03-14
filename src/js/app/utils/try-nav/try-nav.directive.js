'use strict';

angular.module('tryNav')
    .directive('tryNav', function(Post, $location) {
        return {
            restrict: "E",
            templateUrl: "templates/try-nav.html",
            link: function(scope, element, attr) {
                scope.items = Post.query();
                // Built-in UI Bootstrap
                scope.selectItem = function($item, $model, $label) {
                    $location.path("/blog/" + $item.id);
                    scope.searchQuery = "";
                }
                scope.searchItem = function() {
                    // $location.path("/blog/?q=" + scope.searchQuery);
                    // The reason why we are using the search function is to avoid the 
                    // usual escaping of the '?' character in URLs.
                    $location.path("/blog/").search("q", scope.searchQuery);
                    
                }
            }
        }
    });