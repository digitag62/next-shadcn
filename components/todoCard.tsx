"use client";
import moment from "moment";
import React from "react";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const TodoCard = ({ todo }: any) => {
  const router = useRouter();

  const handleClick = async (id: string) => {
    try {
      const res = await axios.delete("/api/todo", { data: { id } });
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="py-4 px-6 border rounded-md flex justify-between">
      <div className="">
        <p>{todo.remarks}</p>
        <p className="text-sm text-muted-foreground">
          {moment(todo.createdAt).fromNow()}
        </p>
      </div>
      <div>
        <Button
          variant="outline"
          size="icon"
          title="Mark as complete"
          onClick={() => handleClick(todo.id)}
        >
          <Check />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
