function AppController($scope, $http) {
  console.log("Controller initialized");

  let refresh = function() {
    $http.get('/cardinfo').success(function(response) {
      console.log("Data received successfully.");
      $scope.cardinfo = response;
      $scope.card = "";
    });
  };

  refresh();

  $scope.addCard = function() {
    console.log($scope.card);
    $http.post('/cardinfo', $scope.card).success(function(response) {
      console.log(response);
      console.log("POST Success");
      refresh();
    });
  };
}
