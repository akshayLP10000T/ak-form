import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const GenerateFormInput = () => {
  return (
    <div>
      <form className="flex gap-3 items-center justify-center mt-5 md:w-[50vw] w-full">
        <Input
          placeholder="Write a prompt to generate form..."
          className="border-2 border-zinc-800 py-5 px-6"
          type="prompt"
        />
        <Button type="submit">Generate</Button>
      </form>
    </div>
  );
};

export default GenerateFormInput;
