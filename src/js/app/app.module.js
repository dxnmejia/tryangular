'use strict';

angular.module('try', [
    // external resource. Outside my app
//    'angularUtils.directives.dirPagination',
    'ngResource',
    'ngRoute',
    
    // internal resource. Something I created
    'blogDetail',
    'blogList',
    'confirmClick'
    ]);