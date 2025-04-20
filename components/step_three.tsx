import React from "react";

export default function StepThree() {
  return (
    <div className="space-y-3">
      <p className="text-base text-[#494a6a]">
        <span className="font-semibold">STEP 3: </span>
        Hit the submit button to analyze
      </p>
      <div className="flex justify-start">
        <button className="h-12 w-[192] rounded-xl bg-[#6d72ff] text-white text-base font-semibold">
          Submit
        </button>
      </div>
    </div>
  );
}