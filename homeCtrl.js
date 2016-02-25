angular.module('devMtIn')
.controller('homeCtrl', function($scope, profileService) {

// profileService.serviceTest(); this was testing


$scope.sortOptions = [{
    display: 'Ascending', 
    value: false
  },
  {
    display: 'Descending',
    value: true
  }
];

$scope.editing = false;

$scope.saveProfile = function(profile) {
  profileService.saveProfile(profile);
  $scope.editing = false;
};

$scope.deleteProfile = function() {
  profileService.deleteProfile();
    $scope.myProfile = profileService.checkForProfile();
  }


 $scope.myProfile = profileService.checkForProfile();


});