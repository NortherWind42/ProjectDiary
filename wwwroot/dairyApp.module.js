/*jshint esversion: 6 */
(function () { "use strict"; }());

angular.module('dairyApp', [
    'ngMaterial',
    'mdxUtil'
]);

angular.module('dairyApp').
    config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal');
    });

    







