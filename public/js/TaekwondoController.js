angular.module('routeApp').controller('TaekwondoController', function($scope, DataService){
  $scope.sportList = DataService.data.randomAthleteList;

});
