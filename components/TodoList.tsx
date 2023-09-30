"use client";
import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { deleteTodo, getAllTodo } from "@/libs/fetchApi/todoApi";
import Link from "next/link";
import Hydrate from "@/app/HydrateClient";
const TodoList = () => {
  const queryClient = useQueryClient();
  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodo,
  });
  const dehydratedState = dehydrate(queryClient);
  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  if (isLoading) return "Loading...";
  if (error) return "Error";
  return (
    <div>
      {todos?.map((todo) => (
        <Hydrate key={todo._id} state={dehydratedState}>
          <div className='flex justify-between w-[500px]'>
            <Link href={`/todo/${todo._id}`}>{todo.text}</Link>
            <Link href={`/edit/${todo._id}`}>Edit Todo</Link>
            <button onClick={() => deleteTodoMutation(todo._id)}>detele</button>
          </div>
        </Hydrate>
      ))}
    </div>
  );
};

export default TodoList;
