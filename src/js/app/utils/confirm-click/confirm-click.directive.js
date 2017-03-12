'use strict';

angular.module('confirmClick')
    .directive('confirmClick', function($rootScope, $location) {
        return {
            restrict: "A",
            link: function(scope, element, attr) {
                var msg = scope.message || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind("click", function(event) {
                    event.stopImmediatePropagation();
                    event.preventDefault();

                    if (window.confirm(msg)) {
                        // Evaluate clickAction as an expression and execute it
                        scope.$eval(clickAction);
                    }
                    else {
                        console.log("Cancelled");
                    }
                });
            }
        }
    });