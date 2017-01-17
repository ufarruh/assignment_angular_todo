app.directive("todoItem", function () {
  return {
    templateUrl: "javascript/directives/todoItem.html",
    restrict: "A",
    transclude: true,
    scope: {
      index: "@",
      delete: "&",
      complete: "&",
      item: "="
    }
  }
});
