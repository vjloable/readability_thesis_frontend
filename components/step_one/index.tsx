"use client";

import { useState } from "react";
import UploadArea from "./upload_area";
import TextArea from "./text_area";

export default function StepOne() {
    const [fileUploaded, setFileUploaded] = useState<File | null>(null);
    const [textInput, setTextInput] = useState("");
    return (
        <div className="space-y-3">
            <p className="text-base text-[#494a6a]">
                <span className="font-semibold">STEP 1: </span>
                Upload a PDF or Input text
            </p>

            <div className="flex gap-6 w-full">
                <UploadArea
                    disabled={textInput.length > 0}
                    onFileSelect={(file) => setFileUploaded(file)}
                />
                <div className="flex items-center justify-center font-semibold text-[#6d72ff] text-sm">OR</div>
                <TextArea
                    disabled={!!fileUploaded}
                    value={textInput}
                    onChange={(val) => setTextInput(val)}
                />
            </div>
        </div>
    );
}