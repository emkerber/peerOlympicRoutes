angular.module('routeApp').controller('ArcheryController', function($scope, DataService){
  $scope.sportList = DataService.data.randomAthleteList;
  console.log(DataService.data.randomAthleteList);
});
