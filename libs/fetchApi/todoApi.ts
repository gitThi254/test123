import { useQuery } from "@tanstack/react-query";

export const getAllTodo = async (): Promise<Todo[]> =>
  await fetch("http://localhost:3000/api/todo").then((res) => res.json());
export const getTodo = async (id: string): Promise<Todo> =>
  await fetch(`http://localhost:3000/api/todo/${id}`).then((res) => res.json());
export const deleteTodo = async (id: string) =>
  await fetch(`http://localhost:3000/api/todo?id=${id}`, {
    method: "DELETE",
  });
export const updateTodo = async ({ id, todo }: { id: string; todo: Todo }) =>
  await fetch(`http://localhost:3000/api/todo/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });

export const createTodo = async (todo: TodoPost): Promise<TodoPost> =>
  await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
