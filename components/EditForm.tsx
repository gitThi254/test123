"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { updateTodo } from "@/libs/fetchApi/todoApi";

const TodoEditForm = ({ todo }: { todo?: Todo }) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const form = useForm<Todo>({
    defaultValues: todo,
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;
  const { mutate: updateTodoMutaion } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      router.push("/");
    },
  });
  const onSubmit = (todo: Todo) => {
    updateTodoMutaion({ id: todo._id, todo });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        {...register("text", {
          required: "Required",
        })}
      />
      <button>update todo</button>
    </form>
  );
};

export default TodoEditForm;
