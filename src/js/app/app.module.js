'use strict';

angular.module('try', [
    // external resource. Outside my app
    'ngResource',
    'ngRoute',
    
    // internal resource. Something I created
    'blogDetail',
    'blogList']);