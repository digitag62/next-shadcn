import TodoInput from "@/components/todoInput";
import prismadb from "@/lib/prismadb";
import React from "react";
import moment from "moment";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import TodoCard from "@/components/todoCard";

const TodoPage = async () => {
  const dataTodo = await prismadb.todos.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  

  return (
    <div>
      <TodoInput />
      <div className="container flex flex-col gap-2">
        {dataTodo.map((todo) => (
          <TodoCard todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
