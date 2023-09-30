"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodo } from "@/libs/fetchApi/todoApi";
import TodoEditForm from "./EditForm";
import Link from "next/link";

const TodoEdit = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodo(id),
    initialData: () =>
      queryClient
        .getQueryData<Todo[]>(["todos"])
        ?.find((todo) => todo._id === id),
  });
  if (isLoading) return "loading...";
  if (error) return "error";
  return (
    <div>
      <Link href='/'>Go home</Link>
      <Link href={`/todo/${id}`}>{data?.text}</Link>
      <TodoEditForm todo={data} />
    </div>
  );
};

export default TodoEdit;
