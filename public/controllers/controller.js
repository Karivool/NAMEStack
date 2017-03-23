function AppController($scope) {
  console.log("Controller initialized");

  chr1 = {
    name: "Pizzer",
    hp: 2900,
    atk: 1650,
    rcv: 444
  };

  chr2 = {
    name: "Brooker",
    hp: 2800,
    atk: 1400,
    rcv: 751
  };

  chr3 = {
    name: "Lifter",
    hp: 2200,
    atk: 2100,
    rcv: -100,
  };

  let cards = [chr1, chr2, chr3];
  $scope.cards = cards;
}
