type Todo = {
  _id: string;
  text: string;
};

type TodoPost = Omit<Todo, "_id">;
