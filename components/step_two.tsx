"use client";
import { useState } from "react";
import CheckIcon from '../public/check.svg';

const grades = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"];

export default function StepTwo() {
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);

  const toggleGrade = (grade: string) => {
    setSelectedGrades((prev) =>
      prev.includes(grade)
        ? prev.filter((g) => g !== grade)
        : [...prev, grade]
    );
  };

  return (
    <div className="space-y-3">
      <p className="text-base text-[#494a6a]">
        <span className="font-semibold">STEP 2: </span>
        Select target grade levels
      </p>

      <div className="flex gap-6 w-full">
        <div className="flex flex-wrap justify-start gap-3 p-6 rounded-xl border border-[#6d72ff] border-dashed w-full">
          {grades.map((grade) => {
            const isSelected = selectedGrades.includes(grade);
            return (
              <button
                key={grade}
                onClick={() => toggleGrade(grade)}
                className={`flex-1 flex justify-center items-center rounded-3xl p-3 border text-base gap-6 transition 
                  ${
                    isSelected
                      ? "bg-[#9ca0ff] text-white border-[#6d72ff] font-semibold"
                      : "text-[#6d72ff] border-[#6d72ff] hover:bg-[#f0f2ff] font-normal"
                  }`}
              >
                <CheckIcon className={`w-[18] h-[15]
                  ${
                    isSelected
                      ? ""
                      : "hidden"
                  }`}/>
                {grade} 
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}