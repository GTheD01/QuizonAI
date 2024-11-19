import { Dispatch, SetStateAction } from "react";

interface AnswerProps {
  value: string;
  name: string;
  id: string;
  selectedAnswer: string | null;
  setSelectedAnswer: Dispatch<SetStateAction<string | null>>;
}

export default function Answer({
  id,
  name,
  value,
  selectedAnswer,
  setSelectedAnswer,
}: AnswerProps) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center space-x-2 cursor-pointer bg-white p-4 hover:opacity-90 ${
        selectedAnswer === value && "bg-blue-500"
      }`}
    >
      <input
        className="hidden opacity-0"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={(e) => setSelectedAnswer(e.target.value)}
      />
      <span className="text-[var(--primary-color)]">{value}</span>
    </label>
  );
}
