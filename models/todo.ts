import mongoose, { models } from "mongoose";

const todoSchema = new mongoose.Schema({
  text: String,
});

const Todo = models.Todo || mongoose.model("Todo", todoSchema);
export default Todo;
