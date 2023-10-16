"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";

interface IError {
  error: Error;
  reset: () => void;
}
const Error = ({ error, reset }: IError) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col space-y-3">
      <div>Oops, you are encountering error.</div>
      <Button variant="outline" size="sm" onClick={() => reset()}>
        Retry
      </Button>
    </div>
  );
};

export default Error;
