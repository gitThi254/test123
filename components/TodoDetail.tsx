"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodo } from "@/libs/fetchApi/todoApi";
import Link from "next/link";

const TodoDetail = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodo(id),
    initialData: () =>
      queryClient
        .getQueryData<Todo[]>(["todos"])
        ?.find((todo) => todo._id === id),
  });

  if (isLoading) return "loading...";
  if (error) return "error was an";
  return (
    <div>
      <Link href='/'>Go Home -</Link>
      <h1>{todo?.text}</h1>
    </div>
  );
};

export default TodoDetail;
