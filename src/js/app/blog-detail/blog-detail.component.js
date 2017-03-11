'use strict';

angular.module('blogDetail')
    .component('blogDetail', {
        templateUrl: 'templates/blog-detail.html',
        controller: function($http, $location, $routeParams, $scope) {

            // First parameter is the url you want to get, and the second is the headers (if any)

            $http.get("/json/posts.json", {}).then(successCallback, errorCallback);

            function successCallback(response, status, config, statusText) {
                $scope.notFound = true; // Moved to be executed only after you get the data
                console.log(response.data);
                var blogItems = response.data;
                $scope.posts = blogItems;
                angular.forEach(blogItems, function(post) {
                    if (post.id == $routeParams.id) {
                        $scope.notFound = false;
                        $scope.post = post;
                    }
                });
            }

            function errorCallback(response, status, config, statusText){
                console.log(response);
            }


            if($scope.notFound) {
                console.log("Not found");
                // change location
                $location.path("/404"); // Just with the purpose of changing the URL.
            }

            // var blogItems = [
            //     {title: "Some Title", id: 1, description: "This is a book", publishDate: "2017-03-09"},
            //      {title: "Title", id: 2, description: "This is a book"},
            //       {title: "Tea", id: 3, description: "This is a book"},
            //        {title: "Lite", id: 4, description: "This is a book"},
            // ];

            // //console.log($routeParams);
            // $scope.title = "Blog " + $routeParams.id;
            // angular.forEach(blogItems, function(post){
            //     if (post.id == $routeParams.id) {
            //         $scope.notFound = false;
            //         $scope.post = post;
            //     }
            //     console.log(post);
            // });



        }
    });