// tạo 1 schema
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var todoSchema = new Schema({
    text: String,
    isDone: Boolean
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;