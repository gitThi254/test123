import TodoDetail from "@/components/TodoDetail";
import { getAllTodo } from "@/libs/fetchApi/todoApi";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import React from "react";

const Todo = ({ params: { todoId } }: { params: { todoId: string } }) => {
  return <TodoDetail id={todoId} />;
};

export default Todo;

// export async function generateStaticParams() {
//   const todosData: Promise<Todo[]> = getAllTodo();
//   const todos = await todosData;
//   return todos.map((todo) => ({
//     todoId: todo._id.toString(),
//   }));
// }
