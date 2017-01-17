var app = angular.module("ToDo", []);

app.controller("ToDoCtrl", ["$scope", "ToDoService", function ($scope, ToDoService) {

  $scope.items = [{
    text: "Get Some Shit Done",
    dueDate: new Date(),
    completed: false
  },
  {
    text: "Get Some Shit Done",
    dueDate: new Date(),
    completed: false
  }];

  $scope.addTodo = function () {
    ToDoService.addTodo($scope.items, $scope.newText, $scope.newDate);
    $scope.newText = "";
    $scope.newDate = "";
  }

  $scope.delete = function (){
      ToDoService.delete($scope.items, $scope.item);
  }

}]);
