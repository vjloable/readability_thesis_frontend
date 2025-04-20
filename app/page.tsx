import React from "react";
import StepOne from "@/components/step_one";
import StepTwo from "@/components/step_two";
import StepThree from "@/components/step_three";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen w-full gap-6 p-12 bg-[#4c4c5d]">
      <div className="flex flex-col w-[1086px] gap-6 p-6 rounded-3xl bg-white shadow-lg">
        <h1 className="text-xl font-semibold text-[#494a6a]">
          Grade Classifier and Validator Tool
        </h1>
        <StepOne />
        <StepTwo />
        <StepThree />
      </div>
    </main>
  );
}