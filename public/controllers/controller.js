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

  $scope.remove = function(id) {
    console.log(id);
    $http.delete('/cardinfo/' + id).success(function(response) {
      refresh();
    });
  };

  $scope.edit = function(id) {
    console.log(id);
    $http.get('/cardinfo/' + id).success(function(response) {
      $scope.card = response;
    });
  };

  $scope.update = function() {
    console.log($scope.card._id);
    $http.put('/cardinfo/' + $scope.card._id, $scope.card).success(function(response) {
      refresh();
    });
  };

  $scope.deselect = function() {
    $scope.card = "";
  }
}
