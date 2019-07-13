var Todos = require("../models/todoModel");

function getTodos(res) {
    Todos.find((err, todos) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.json(todos);
        }
    })
}

module.exports = function (app) {
    // get all todos
    app.get('/api/todos', (req, res) => {
        getTodos(res);
    });

    // get a todo
    app.get('/api/todo/:id', (req, res) => {
        Todos.findById({ _id: req.params.id }, (err, todos) => {
            if (err) {
                throw err;
            } else {
                res.json(todos);
            }
        })
    });

    // create a todo
    app.post('/api/todo', (req, res) => {
        var todo = {
            text: req.body.text,
            isDone: req.body.isDone
        };

        Todos.create(todo, (err, todo) => {
            if (err) {
                throw err;
            } else {
                getTodos(res);
            }
        })
    });
    
    // update
    app.put('/api/todo', (req, res) => {
        if (!req.body._id) {
            return res.status(500).send("ID is required");
        } else {
            Todos.updateOne({
                _id: req.body._id
            }, {
                    text: req.body.text,
                    isDone: req.body.isDone
                }, (err, todo) => {
                    if (err) {
                        return res.status(500).json(err);
                    } else {
                        getTodos(res);
                    }
                })
        }
    });

    // delete
    app.delete('/api/todo/:id', (req, res) => {
        Todos.deleteOne({
            _id : req.params.id
        },(err, todo) => {
            if (err){
                return res.status(500).json(err);
            } else {
                getTodos(res)
            }
        })
    });
}