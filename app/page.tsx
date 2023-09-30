import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Image from "next/image";
import mongoose from "mongoose";

export default function Home() {
  const id = mongoose.connection.readyState;
  return (
    <main className=''>
      {id}
      <AddTodo />
      <TodoList />
    </main>
  );
}
