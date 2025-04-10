const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shikharDB")
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model("Todo", todoSchema);
module.exports = {
    todo
}