import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Image from "next/image";
import mongoose from "mongoose";

export default function Home() {
  return (
    <main className=''>
      {process.env.MONGOURI ? <div> connected</div> : <div>dis connected</div>}
      <AddTodo />
      <TodoList />
    </main>
  );
}
