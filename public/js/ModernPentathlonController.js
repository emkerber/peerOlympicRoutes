angular.module('routeApp').controller('ModernPentathlonController', function($scope, DataService){
  $scope.sportList = DataService.data.randomAthleteList;
});
