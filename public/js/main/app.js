var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ["$scope", "svTodos", ($scope, $svTodos) => {
    $scope.appName = "Todo Dashboard";
    $scope.loading = true;
    $scope.formData = {};
    $scope.todos = [];

    // load data from api
    $svTodos.get().then((data) => {
        $scope.todos = data.data;
        $scope.loading = false;
    });

    $scope.createTodo = () => {
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }

        $svTodos.create(todo).then((data) => {
            $scope.todos = data.data;
            $scope.formData = "";
            $scope.loading = false;
        })

    }
    $scope.updateTodo = (todo) => {
        $scope.loading = true;
        $svTodos.update(todo).then((data)=>{
            $scope.todos = data.data;
            $scope.loading = false;
        })
    }
    $scope.deleteTodo = (todo) => {
        $scope.loading = true;
        $svTodos.delete(todo._id).then((data)=>{
            $scope.todos = data.data;
            $scope.loading = false;
        })
    }
}]);
