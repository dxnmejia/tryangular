'use strict';

angular.module('blogList')
    .component('blogList', {
        templateUrl: '/templates/blog-list.html',
        controller: function(Post, $location, $routeParams, $rootScope, $scope) {
            var q = $location.search().q;
            if (q) {
                $scope.query = q;
                $scope.searchQuery = true;
            }
            $scope.order = "-publishDate";
            $scope.goToItem = function(post) {
                $rootScope.$apply(function() {
                    // set the path where you want to go when this function is executed
                    $location.path("/blog/" + post.id);
                })
            }

            $scope.changeCols = function(number) {
                if (angular.isNumber(number)) {
                    $scope.numCols = number;
                } else {
                    $scope.numCols = 2;
                }
                setUpCols($scope.items, number);
            }

            $scope.loadingQuery = false;

            $scope.$watch(function() { // Watch for changes in the $scope to be able to update layout
                if ($scope.query) { // If a query for filtering is defined
                    $scope.loadingQuery = true;
                    $scope.cssClass = "col-sm-12";
                    if ($scope.query != q) {
                        $scope.searchQuery = false;
                    }
                } else {
                    if ($scope.loadingQuery) { // If query is set, make the changes
                        setUpCols($scope.items, 4);
                        $scope.loadingQuery = false;
                    }
                }
            })

            function setUpCols(data, number) {
                if (angular.isNumber(number)) {
                    $scope.numCols = number;
                } else {
                    $scope.numCols = 2;
                }
                $scope.cssClass = "col-sm-" + 12/$scope.numCols;
                $scope.items = data;
                $scope.colItems = chunkArrayInGroups(data, $scope.numCols);
            }

            Post.query(function(data){
                // console.log(data);
                setUpCols(data, 2);

            }, function (errorData) {

            });
            //$scope.colItems = chunkArrayInGroups($scope.items, 2);
            
            function chunkArrayInGroups(array, unit) {
                var results = [];
                length = Math.ceil(array.length / unit); // Number of groups (Length of results array)
                for (var i = 0; i < length; i++) {
                    results.push(array.slice(i * unit, (i + 1) * unit));
                }
                return results;
            }
        }
    });