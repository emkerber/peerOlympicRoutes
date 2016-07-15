angular.module('routeApp').factory('DataService', function($http){

  var data = {
    athletesList: {},
    randomAthleteList: {}
  };

  //call server to receive athlete info for each sport
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
    data.athletesList[response.data.sport] = response.data.athletes;
    //run random athlete function to assign a random athlete from athletes list based on sport
    randomAthlete(response.data.sport);

  }

  function handleFailure(response) {
    console.log('failed');
  }

  //assign random athlete from sport to randomAthlete list.
  function randomAthlete(sport) {
    //clear the current athlete in the called sport
    data.randomAthleteList[sport] = {};
    //set temp vars to work with, and use random to get a random athlete from the array.
    let tempSportList = data.athletesList[sport];
    let tempAthlete = tempSportList[Math.floor(Math.random() * (tempSportList.length))];
    //set the passed in sport in random athlete list as the random generated athlete
    data.randomAthleteList[sport] = tempAthlete;
    //checks if sport already exists on the page. If so, skip. if not, add an option to choose
    //as the marketing campaign's selected option.
    // let sportCheck = 0;
    // for (var i = 0; i < data.sportSelect.length; i++) {
    //   if (data.sportSelect[i].sportName === sport) {
    //     // console.log('sport already added');
    //     sportCheck = 1;
    //   }
    // }
    // //if sport not in list yet, add to drop down options.
    // if (sportCheck === 0) {
    //   data.sportSelect.push({sportName: sport, sportDisplay: tempAthlete.sport, show: true});
    // }


  }

  return {
    data: data
  }

});



//   function handleSuccess(response){
//     console.log(response);
//     data.name = response.data.name;
//     data.origin = response.data.origin;
//     data.sport = response.data.sport;
//   }
//
//   function handleFailure(response){
//     console.log('OH NO', response);
//   }
//
//   function makeCall(){
//     console.log('Call being made');
//     $http.get('/').then(handleSuccess, handleFailure);
//   }
//
//   makeCall()
//
//   return {
//     data: data,
//     callServer: makeCall
//   }
//
// })
