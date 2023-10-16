import TodoInput from "@/components/todoInput";
import prismadb from "@/lib/prismadb";
import React from "react";
import moment from "moment";
import { Button } from "@/components/ui/button";

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
          <div key={todo.id} className="py-4 px-2 border rounded-md">
            <div>
              <p>{todo.remarks}</p>
              <p className="text-sm text-muted-foreground">
                {moment(todo.createdAt).fromNow()}
              </p>
            </div>
            <div>
              <Button variant="ghost">sss</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
