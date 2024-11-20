import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  selectedQuestion: number;
  setSelectedQuestion: Dispatch<SetStateAction<number>>;
};

export default function Pagination({
  selectedQuestion,
  setSelectedQuestion,
}: PaginationProps) {
  return (
    <div className="flex justify-around">
      {Array.from({ length: 10 }, (_, index) => index + 1).map((question) => (
        <div
          key={question}
          onClick={() => setSelectedQuestion(question)}
          className={`text-[var(--primary-color)] rounded-full w-10 h-10 cursor-pointer flex items-center justify-center ${
            selectedQuestion === question ? "bg-blue-300" : "bg-white"
          }`}
        >
          {question}
        </div>
      ))}
    </div>
  );
}
