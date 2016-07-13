(function() {
  'use strict';

  //Set up angular and controller
  angular
    .module('olympicAthletes', ['ngRoute'])
    .config(RouteProvider)
    .controller('AthleteController', AthleteController)
    .controller('ArcheryController', ArcheryController)
    .controller('CanoeController', CanoeController)
    .controller('ModernpentController', ModernpentController)
    .controller('TableTennisController', TableTennisController)
    .controller('TaekwondoController', TaekwondoController);

  //inject $scope and $http for AthleteController function to have use of it
  RouteProvider.$inject = ['$routeProvider', '$locationProvider'];
  AthleteController.$inject = ['$scope','$http'];
  ArcheryController.$inject = ['$scope'];
  CanoeController.$inject = ['$scope'];
  ModernpentController.$inject = ['$scope'];
  TableTennisController.$inject = ['$scope'];
  TaekwondoController.$inject = ['$scope'];


  //AthleteController function for the main page.
  function AthleteController($scope, $http) {
    //create variable to use to interact with HTML.
    const vm = this;

    vm.setSportView = setSportView;
    vm.sport = "";

    function setSportView(sport) {
      console.log(typeof sport);
      vm.sport = sport;
    }

    vm.testtwo = 'test22222!';
    //create empty athletes list object to be populated in functions
    vm.athletesList = {};
    //create empty random athlete list object to be populated in functions
    vm.randomAthleteList = {};
    //for testing purposes, checking current values of arrays and objects
    vm.testLog = testLog;

    //set functions to be accessible by ng-click.
    vm.randomAthlete = randomAthlete;
    vm.randomAll = randomAll;

    //create object for drop down menu and default selection to undecided
    vm.sportSelect = [{sportName: 'Undecided', sportDisplay: 'Undecided',show: false}];
    vm.selectedSport = vm.sportSelect[0];

    //call server to retrieve athele info for each sport
    getHTTP('archery');
    getHTTP('tabletennis');
    getHTTP('modernpentathlon');
    getHTTP('taekwondo');
    getHTTP('canoe');

    //$http call, call handle success for each call
    function getHTTP(sport) {
      $http({method: 'GET', url: '/olympics/' + sport}).then(handleSuccess, handleFailure);
    }

    //store the sport that is returned as the key in athletesList object, with
    //the array of athletes for that sport
    function handleSuccess(response) {
      let data = response.data;
      vm.athletesList[data.sport] = data.athletes;
      //run random athlete function to assign a random athlete from athletes list based on sport
      randomAthlete(data.sport);
    }

    function handleFailure(response) {
      console.log('failed');
    }

    //assign random athlete from sport to randomAthlete list.
    function randomAthlete(sport) {
      //clear the current athlete in the called sport
      vm.randomAthleteList[sport] = {};
      //set temp vars to work with, and use random to get a random athlete from the array.
      let tempSportList = vm.athletesList[sport];
      let tempAthlete = tempSportList[Math.floor(Math.random() * (tempSportList.length))];
      //set the passed in sport in random athlete list as the random generated athlete
      vm.randomAthleteList[sport] = tempAthlete;
      //checks if sport already exists on the page. If so, skip. if not, add an option to choose
      //as the marketing campaign's selected option.
      let sportCheck = 0;
      for (var i = 0; i < vm.sportSelect.length; i++) {
        if (vm.sportSelect[i].sportName === sport) {
          // console.log('sport already added');
          sportCheck = 1;
        }
      }
      //if sport not in list yet, add to drop down options.
      if (sportCheck === 0) {
        vm.sportSelect.push({sportName: sport, sportDisplay: tempAthlete.sport, show: true});
      }

    }

    function testLog() {
      console.log('Full list:', vm.athletesList);
      console.log('Random List:', vm.randomAthleteList);
      console.log('selectedSport:', vm.selectedSport);
      console.log('sportSelect', vm.sportSelect);
    }

    //button to call randomAthlete function on all sports
    function randomAll() {
      for (var sport in vm.athletesList) {
        randomAthlete(sport);
      }
      // testLog();
    }
  }

  function RouteProvider($routeProvider, $locationProvider) {
    $routeProvider
      .when('/athlete/archery', {
        templateUrl: 'views/archery.html',
        controller: 'ArcheryController'
      })
      .when('/athlete/canoeKayak', {
        templateUrl: 'views/canoe.html',
        controller: 'CanoeController'
      })
      .when('/athlete/modernPentathlon', {
        templateUrl: 'views/modernpentathlon.html',
        controller: 'ModernpentController'
      })
      .when('/athlete/tableTennis', {
        templateUrl: 'views/tabletennis.html',
        controller: 'TableTennisController'
      })
      .when('/athlete/taekwondo', {
        templateUrl: 'views/taekwondo.html',
        controller: 'TaekwondoController'
      });

    $locationProvider.html5Mode(true);
  }

  function ArcheryController($scope) {
    const archeryvm = this;
    archeryvm.imgurl = 'imgs/sports/archery.gif'
  }
  function CanoeController($scope) {
    const canoevm = this;

    canoevm.imgurl = 'imgs/sports/canoe.gif'
  }
  function ModernpentController($scope) {
    const modernvm = this;

    modernvm.imgurl = 'imgs/sports/modernpent.jpg'
  }
  function TableTennisController($scope) {
    const tabletennisvm = this;

    tabletennisvm.imgurl = 'imgs/sports/tabletennis.gif'
  }
  function TaekwondoController($scope) {
    const taekvm = this;

    taekvm.imgurl = 'imgs/sports/giphy.gif'
  }



})();
