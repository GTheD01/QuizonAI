import { useState } from "react";

export default function Pagination() {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(1);
  return (
    <div className="flex justify-around">
      {Array.from({ length: 10 }, (_, index) => index + 1).map((question) => (
        <div
          onClick={() => setActiveQuestion(question)}
          className={`text-[var(--primary-color)] rounded-full w-10 h-10 cursor-pointer flex items-center justify-center ${
            activeQuestion === question ? "bg-blue-300" : "bg-white"
          }`}
        >
          {question}
        </div>
      ))}
    </div>
  );
}
