/**
 * Created by mars on 2/10/16.
 */
movieStubApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../template/home.html',
            controller: 'movieStubController'
        }).when('/movie/:id', {
            templateUrl: '../template/movie.html',
            controller: 'movieDetailsController'
        }).otherwise({
            redirectTo: '/'
        });
});