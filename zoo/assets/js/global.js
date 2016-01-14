$(document).ready(function() { 
  var d = new Date();
  //alert(d);

   $('.accordion')
	  .accordion({
	    selector: {
	      trigger: '.title'
	    }
	});

});


//angular
'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});

//userscontroler
var usersApp = angular.module('usersApp', []);

usersApp.controller('usersCtrl', function($scope) {
  $scope.users = [
    {'name': 'Flavius',
     'image': 'https://scontent-fra3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/1619471_914918641896194_7471779277846458207_n.jpg?oh=091ba7261910f0a31d8ff48a12570a12&oe=57078563',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Silviu',
     'image': 'https://scontent-fra3-1.xx.fbcdn.net/hprofile-xfa1/v/t1.0-1/c41.0.160.160/p160x160/197507_195470230473680_1989223_n.jpg?oh=4d9e9fe52211ad1f3f9df2f56a67fbf2&oe=56FF162E',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});
