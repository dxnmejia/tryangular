'use strict';

angular.module('post')
    .factory('Post', function($resource) {
        var url = '/json/posts.json';
        return $resource(url, {}, {
            query: {
                method: "GET",
                params: {},
                // query by default is array but we are going to set it anyways
                isArray: true,
                cache: true,
                // transformResponse,
                // interceptor

            },
            get: {
                method: "GET",
//                params: {"id": @id},
                isArray: true,
                cache: true,
            }
        })
    });