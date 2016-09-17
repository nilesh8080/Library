(function () {
    'use strict';

    angular.module('LibraryApp', [])
        .controller('HomeController', function ($scope) {
            $scope.title = 'Library';
        });
})();