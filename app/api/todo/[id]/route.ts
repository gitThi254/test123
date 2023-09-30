import connectDB from "@/libs/connectDB";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  await connectDB();
  const todo = await Todo.findById(id);
  return NextResponse.json(todo, { status: 200 });
}

export async function PUT(
  req: Request,
  { params: { id } }: { params: { id: string } }
) {
  const updateTodo = await req.json();
  await Todo.findByIdAndUpdate(id, updateTodo);
  return NextResponse.json(
    { message: "update todo successfully" },
    { status: 200 }
  );
}
