import React from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./ui/button";

interface SuggestionsBtnText {
  label: string;
  text: string;
}

const suggestionsBtnText: SuggestionsBtnText[] = [
  {
    label: "Registration Form",
    text: "Create a course registration form suitable from any school or institutions",
  },
  {
    label: "Feedback form",
    text: "Create a client feedback form to gather valuable insights from any alient",
  },
];

const HeroSection = () => {
  return (
    <section className="flex items-center w-full justify-center flex-1 min-h-[80vh] flex-col">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r px-5 py-2 from-blue-500 to-purple-600 blur-2xl opacity-50 -z-10"></div>
        <div className="text-center container mx-auto relative">
          <h1 className="text-4xl font-bold">
            Build Your personalised form by AI
          </h1>
          <p className="mt-4 text-lg">
            User the power of AI and build your forms
          </p>
        </div>
      </div>
      <div>
        <GenerateFormInput />
      </div>
      <div className="mt-3 flex gap-3">
        {suggestionsBtnText.map(
          (suggestionText: SuggestionsBtnText, key: number) => (
            <Button
              variant={"outline"}
              className="rounded-full py-1 px-5"
              key={key}
            >
              {suggestionText.label}
            </Button>
          )
        )}
      </div>
    </section>
  );
};

export default HeroSection;
