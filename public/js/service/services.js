/**
 * Created by mars on 2/14/16.
 */
movieStubApp.factory('movieStubFactory', function ($resource) {
    return $resource('/movies');
});