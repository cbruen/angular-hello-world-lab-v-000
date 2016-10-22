function MainController($scope) {
  $scope.name = "Chris";
  $scope.email = "bruen.chris@gmail.com";
  $scope.phone = "555-555-5555";
}

angular
  .module('app')
  .controller('MainController', MainController);
