'use strict';

angular.module('try')
    .config(function(
        $locationProvider,
        $routeProvider
        ) {
            $locationProvider.html5Mode({
                    enabled:true
                });
            $routeProvider
                .when("/", {
                    template: "<blog-list></blog-list>"
                })
                .when("/about", {
                    templateUrl: "/templates/about.html"
                })
                // :id is a pararmeter that is passed to the 
                // $routeParams object (see blog-list.component.js)
                // /blog/:id will handle everything /blog/*...*
                // but it does NOT handle /blog/*...*/*...*. 
                .when("/blog/:id", {
                    template: "<blog-list></blog-list>"
                })
                // Just as when you overload functions to accept different
                // parameters, you have to create different routes for each
                // type of URL you want to handle. 
                // /blog/:id/:abc will handle everything /blog/*...*/*...*
                .when("/blog/:id/:abc", {
                    template: "<blog-list></blog-list>"
                })
                // .when("/blog/2", {
                //     template: "<blog-list></blog-list>"
                // })
                .otherwise({
                    template: "Not found"
                });
        });