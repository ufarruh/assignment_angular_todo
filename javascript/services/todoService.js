app.factory("ToDoService", function () {
  var stub = {};


  stub.addTodo = function (data, text, dueDate) {
    data.push({ text: text, dueDate: dueDate, completed: false })
    console.log(dueDate + " " + text);
  };

  stub.delete = function (items, item) {
    var index = items.indexOf(item);
    items.splice(index, 1);
  };

  stub.complete = function (data, item){
    var ind = data.items.indexOf(item);

  };

  return stub;
});
