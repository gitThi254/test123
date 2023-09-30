"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "@/libs/fetchApi/todoApi";

const AddTodo = () => {
  const queryClient = useQueryClient();
  const form = useForm<TodoPost>({
    defaultValues: {
      text: "",
    },
  });
  const { mutate: addTodoMutation } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;
  const onSubmit = (data: TodoPost) => {
    addTodoMutation(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='add to do'
        {...register("text", {
          required: "Required",
        })}
      />
      <button>Add to do</button>
    </form>
  );
};

export default AddTodo;
