'use strict';

let dairyApp = angular.module('dairyApp', [
    'ngMaterial',
    'mdxUtil'
]);

dairyApp.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal')
});









