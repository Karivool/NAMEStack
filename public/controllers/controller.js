function AppController($scope, $http) {
  console.log("Controller initialized");

  let refresh = function() {
    $http({
      method: 'GET',
      url: '/cardinfo/'
    }).then(function success(response) {
      $scope.cardinfo = response;
      $scope.card = "";
    }, function error(response) {
      console.log(response);
    });
  };

  refresh();

  $scope.addCard = function() {
    $http.post('/cardinfo', $scope.card).success(function(response) {
      refresh();
    });
  };

  $scope.remove = function(id) {
    $http.delete('/cardinfo/' + id).success(function(response) {
      refresh();
    });
  };

  $scope.edit = function(id) {
    $http.get('/cardinfo/' + id).success(function(response) {
      $scope.card = response;
    });
  };

  $scope.update = function() {
    $http.put('/cardinfo/' + $scope.card._id, $scope.card).success(function(response) {
      refresh();
    });
  };

  $scope.deselect = function() {
    $scope.card = "";
  }
}
