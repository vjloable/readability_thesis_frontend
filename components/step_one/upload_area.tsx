"use client";

import { useState } from "react";

export default function UploadArea({ disabled, onFileSelect }: {
  disabled: boolean;
  onFileSelect: (file: File) => void;
}) {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFile = (f: File) => {
        setFile(f);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const f = e.target.files?.[0];
        if (f) handleFile(f);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const f = e.dataTransfer.files?.[0];
        if (f) handleFile(f);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    return (
        <div 
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`flex-1 border-1 border-dashed border-indigo-300 rounded-xl flex flex-col items-center pt-6 pb-6 justify-center transition-all text-center 
                ${
                    isDragging ? "border-blue-500 bg-blue-50" : "border-gray-400"
                }`
            }>
            <div className="bg-indigo-300 w-16 h-16 rounded-full mb-3"></div>
            <p className="text-base font-semibold text-[#9ca0ff] mb-3">Upload PDF</p>
            <p className="text-[#919191] text-sm mb-3">
            Drag & drop or
            <label 
                htmlFor="file-upload" 
                className="text-[#6d72ff] font-semibold cursor-pointer pl-1">
                    choose the PDF
            </label>
            <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="hidden"
            /> to upload
            </p>
            {file && (
                <div className="mt-4 text-center text-[#6d72ff]">
                <strong>Selected file:</strong> {file.name}
                </div>
            )}
        </div>
    );
}