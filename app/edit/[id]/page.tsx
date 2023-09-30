import TodoEditForm from "@/components/TodoEdit";
import React from "react";

const EditTodo = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <div>
      <TodoEditForm id={id} />
    </div>
  );
};

export default EditTodo;
