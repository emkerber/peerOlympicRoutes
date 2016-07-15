angular.module('routeApp').controller('TableTennisController', function($scope, DataService){
  $scope.sportList = DataService.data.randomAthleteList;

});
