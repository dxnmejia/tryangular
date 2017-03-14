'use strict';

angular.module('post')
    .factory('Post', function($resource) {
        var url = '/json/posts.json';
        return $resource(url, {}, {
            query: {
                method: "GET",
                params: {},
                isArray: true,
                cache: false, // true to cache the info

            },
            get: {
                method: "GET",
                isArray: true,
                cache: false,
            }
        })
    });