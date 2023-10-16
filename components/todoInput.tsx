"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

const TodoInput = () => {
  const [field, fieldSet] = useState({ todo: "" });
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/todo", { field: field.todo });
      console.log(res);

      if (res.data == "VAL") {
        fieldSet({ todo: "" });
      }
    } catch (error) {
      if (error) {
        fieldSet({ todo: "" });
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="container py-6">
      <form action="" className="flex gap-2" onSubmit={handleSubmit}>
        <Input
          type="text"
          name="todo"
          value={field.todo}
          onChange={(e) => fieldSet({ todo: e.target.value })}
          placeholder="Do something"
        />
        <Button type="submit" variant="outline">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TodoInput;
