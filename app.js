var app = angular.module("ToDo", []);


app.controller("ToDoCtrl", ["$scope", function ($scope) {


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

  $scope.completeToDos = [];


  $scope.addTodo = function () {
    $scope.items.push({ text: $scope.newText, dueDate: $scope.newDate, completed: false })
    console.log($scope.newText + " " + $scope.newDate);
    $scope.newText = "";
    $scope.newDate = "";

  };

  $scope.removeToDo = function (item) {
    var index = $scope.items.indexOf(item);
    $scope.items.splice(index, 1);
  };

  $scope.completeToDo = function (item){
    var sitem = $scope.removeToDo(item);
    console.log(sitem)
    $scope.completeToDos.push(item);
  };


  $scope.item = {
    text: "Get Some Shit Done",
    dueDate: new Date(),
    completed: false
  };
}]);

app.directive("todoItems", function () {
  return {
    templateUrl: "directives/todo.html",
    scope: {
      item: "="
    },
  }
});
