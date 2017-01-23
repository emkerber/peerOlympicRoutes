This was a peer assignment at Prime Digital Academy. Below are the instructions provided.

Angular Olympics Services Add-On
Description
Today we are going to update our Olympics Apps to use Angular factories. The goal for this assignment is to refactor all of your controllers to use factory methods to make network requests. The factory should be the only place making requests using the $http service; your controllers should just call methods from the factory and bind to the object returned from the factory. These changes should not change the behavior of the app.

This is a peer challenge with an added twist. Each person is responsible for implementing this refactoring in their partner's project. Fork their repo, work together to determine what changes need to be made, make the necessary changes and submit a Pull Request to your partner's repo. Then, submit your partner's repo as your submission for this assignment.




Below are the original instructions.

# Angular Challenge

[![Greenkeeper badge](https://badges.greenkeeper.io/emkerber/peerOlympicRoutes.svg)](https://greenkeeper.io/)

ALL RIGHT! Set up a *NEW* project! From the ground up.
Bring in Angular, that's all we will need for our project today.

## Business Need:
We need a way to pick Olympic athletes for our new marketing campain. Make an application that has a `Generate` button that displays one athlete from 5 different sports of your choice. The chosen athletes should have their names and origins (locations) displayed. The athletes should be chosen at random, and should include all athletes competing in a given sport. Information on the athletes can be found [here](http://www.teamusa.org/road-to-rio-2016/team-usa/athletes).


## Technical Requirements
Our application will request 5 payloads from five different Express routes (one for each sport). All of the routes should exist inside of an `Olympics.js` router. The objects returned should follow this template:

    {
      Name: 'John Doe',
      Origin: 'New York, NY'
    }

## Hard Mode:
Style your application with CSS, make it look presentable (think 'Merica).

## Pro Mode:
Add a sixth end point to choose which sport we should choose for our campain and style the winner on the view.
