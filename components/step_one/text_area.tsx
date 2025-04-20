"use client";
import { useState, useRef, useEffect } from "react";

export default function TextArea(
    {disabled, value, onChange}: 
    {disabled: boolean; value: string; onChange: (val: string) => void;}) {
    const [isEditing] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const showTextArea = isFocused || value.length > 0;
    
    useEffect(() => {
        if (isEditing && textareaRef.current) {
        textareaRef.current.focus();
        }
    }, [isEditing]);

    return (
        <div className={`relative flex-1 min-h-[200px] border
        ${showTextArea ? "border-2" : "border-dashed"} border-indigo-300 rounded-xl overflow-hidden`
        }>
        {/* TextArea */}
        <textarea
            placeholder="Type something here..."
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            onBlur={() => setIsFocused(false)}
            className={`absolute top-0 left-0 w-full h-full p-4 text-[#494a6a] resize-none transition-opacity duration-300
            ${showTextArea ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            focus:outline-none focus:ring-0 focus:border-[#6d72ff]`}
        />

        {/* Placeholder */}
        <div
            onClick={() => !disabled && setIsFocused(true)}
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center transition-opacity duration-300 cursor-pointer
            ${!showTextArea ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`}
        >
            <div className="bg-indigo-300 w-16 h-16 rounded-full mb-3" />
            <p className="text-base font-semibold text-[#9ca0ff] mb-3">Input Text</p>
            <p className="text-[#919191] text-sm mb-3">Click to type text here</p>
        </div>
        </div>
    );

    // return (
    //     <div className="flex-1 border-1 border-dashed border-indigo-300 rounded-xl flex flex-col items-center justify-center ">
    //     {showTextArea ? (
    //         <textarea
    //         value={value}
    //         onChange={(e) => onChange(e.target.value)}
    //         disabled={disabled}
    //         onBlur={() => setIsFocused(false)}
    //         autoFocus
    //         className={`w-full h-full p-4 text-[#494a6a] focus:outline-[#6d72ff] focus:ring-0 focus:border-[#6d72ff] rounded-xl resize-none transition-all ${
    //             disabled ? "opacity-50 cursor-not-allowed" : ""
    //         }`}
    //         />
    //     ) : (
    //         <div 
    //             onClick={() => !disabled && setIsFocused(true)}
    //             className="w-full flex flex-col items-center justify-center"
    //         >
    //             <div className="bg-indigo-300 w-16 h-16 rounded-full mb-3"></div>
    //             <p className="text-base font-semibold text-[#9ca0ff] mb-3">Input Text</p>
    //             <p className="text-[#919191] text-sm mb-3"> Click to type text here </p>
    //         </div>
    //     )}
    //     </div>
    // );
}