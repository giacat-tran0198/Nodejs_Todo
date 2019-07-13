var Todos = require("../models/todoModel");

module.exports = function (app) {

    app.get("/api/setupTodos", (req, res) => {

        // setup seed data
        var seedTodos = [{
            text: "hoc node.js",
            isDone: false
        }, {
            text: "hoc angular.js",
            isDone: false
        }, {
            text: "viet 1 ung dung hoan chinh",
            isDone: false
        }];

        Todos.create(seedTodos, (err, results) => {
            res.send(results);
        });

    })

}