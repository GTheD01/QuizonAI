import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";

interface AnswerProps {
  value: string;
  name: string;
  id: string;
  selectedAnswer?: string | null;
  correctAnswer?: string;
  setSelectedAnswer?: Dispatch<SetStateAction<string | null>>;
}

export default function Answer({
  id,
  name,
  value,
  correctAnswer,
  selectedAnswer,
  setSelectedAnswer,
}: AnswerProps) {
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSelectedAnswer) {
      setSelectedAnswer(e.target.value);
    }
  };

  const labelClasses = clsx(
    "flex items-center space-x-2 cursor-pointer p-4 hover:opacity-90",
    {
      "bg-blue-300": selectedAnswer === value,
      "bg-green-300": correctAnswer === value,
      "bg-red-500":
        correctAnswer &&
        selectedAnswer !== correctAnswer &&
        selectedAnswer === value,
      "bg-white": selectedAnswer !== value && correctAnswer !== value,
    }
  );

  return (
    <label htmlFor={id} className={labelClasses}>
      <input
        className="hidden opacity-0"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={handelChange}
      />
      <span className="text-[var(--primary-color)]">{value}</span>
    </label>
  );
}
