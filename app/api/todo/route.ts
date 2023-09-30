import connectDB from "@/libs/connectDB";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";
import url from "url";

export async function POST(req: Request) {
  try {
    const newTodo = await req.json();
    await connectDB();
    await Todo.create(newTodo);
    return NextResponse.json(
      { message: "create todo successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "fail to create todo" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    await connectDB();
    const todo = await Todo.find();
    return NextResponse.json(todo, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "fail to get all create todo" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const id = url.parse(req.url, true).query;
    await connectDB();
    await Todo.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "delete todo successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "fail to delete create todo" },
      { status: 500 }
    );
  }
}
