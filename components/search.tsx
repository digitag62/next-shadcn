"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SectionResult from "@/components/sectionResult";

const SearchComp = () => {
  const [query, querySet] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const q = e.target[0].value;
    querySet(q);
  };

  return (
    <div className="container flex flex-col gap-3">
      <form action="" className="flex gap-2" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Cari github users" />
        <Button type="submit" variant="outline">
          Search
        </Button>
      </form>

      {query && <SectionResult query={query} />}
    </div>
  );
};

export default SearchComp;
