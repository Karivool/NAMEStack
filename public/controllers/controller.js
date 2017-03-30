function AppController($scope, $http) {
  console.log("Controller initialized");

  $http.get('/cardinfo').success(function(response) {
    console.log("Data received successfully.");
    $scope.cardinfo = response;
  });

  $scope.addCard = function() {
    console.log($scope.card);
    $http.post("/cardinfo", $scope.card);
  };
}
