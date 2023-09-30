import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import Image from "next/image";

export default function Home() {
  return (
    <main className=''>
      <AddTodo />
      <TodoList />
    </main>
  );
}
