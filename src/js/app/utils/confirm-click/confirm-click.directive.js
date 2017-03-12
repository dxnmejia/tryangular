'use strict';

angular.module('confirmClick')
    .directive('confirmClick', function($rootScope, $location) {
        return {
            scope: {
                confirmedClick: "@",
            },
            restrict: "A",
            link: function(scope, element, attr) {
                var msg = scope.message || "Are you sure?";
                element.bind("click", function(event) {
                    if (window.confirm(msg)) {
                        $rootScope.$apply(function() {
                            $location.path(scope.confirmedClick);
                        })

                    }
                });
            }
        }
    });



// angular.module('confirmClick')
//     .directive('confirmClick', function($rootScope, $location) {
//         return {
//             scope: {
//                 message: "@message",
//                 eq: "=eq",
//                 post: "=post",
//             },
//             restrict: "E",
//             template: "<a ng-href='/blog/{{ post.id }}'>{{ post.title }} {{ post.publishDate }}</a>",
//             link: function(scope, element, attr) {
//                 var msg = scope.message || "Are you sure?";
//                 element.bind("click", function(event) {
//                     if (window.confirm(msg)) {
//                         // console.log('/blog/' + scope.post.id);
//                         $rootScope.$apply(function() {
//                             $location.path("/blog" + socpe.post.id);
//                         })

//                     }
//                 });
//                 // console.log(scope.message);
//                 console.log(scope.eq);
//                 console.log(attr.eq);
//                 // console.log(scope.post);
//                 // console.log(element);
//                 // console.log(attr.confirmClick);
//                 // console.log(attr.ngHref);
//             }
//         }
//     });