angular.module('routeApp').controller('CanoeController', function($scope, DataService){
  $scope.sportList = DataService.data.randomAthleteList;

});
