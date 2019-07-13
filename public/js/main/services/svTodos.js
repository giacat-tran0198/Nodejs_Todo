var app = angular.module("app.todos")
app.factory("svTodos", ["$http", ($http) => {

    return {
        get: () => {
            return $http.get("/api/todos");
        },
        create: (todoData) => {
            return $http.post("/api/todo", todoData);
        },
        update: (todoData) => {
            return $http.put("/api/todo", todoData);
        },
        delete: (id) => {
            return $http.delete("/api/todo/"+id);
        }
    }
}])