import { useEffect, useState } from "react";
import Answer from "../components/Answer";

export default function Question() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (selectedAnswer) {
      setError(null);
    }
  }, [selectedAnswer]);

  const nextQuestionHandler = () => {
    if (!selectedAnswer) {
      setError("You must select at least one answer");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col px-12">
      <h2 className="text-4xl mb-8">Quiz Topic:</h2>
      <div className="px-20 py-12 shadow-2xl space-y-6 max-w-[768px] min-w-[330px]">
        <h3 className="text-4xl text-blue-500 font-bold">Question 1</h3>
        <h5 className="text-3xl tracking-wide">
          Which of the following is OOP language?
        </h5>
        <div className="space-y-2">
          <Answer
            value="Java"
            id="Java"
            name="answer"
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          <Answer
            value="Cobol"
            id="Cobol"
            name="answer"
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          <Answer
            value="C"
            id="C"
            name="answer"
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
          <Answer
            value="Assembly"
            id="Assembly"
            name="answer"
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          onClick={nextQuestionHandler}
          className="bg-blue-500 w-full p-4"
        >
          Next
        </button>
      </div>
    </div>
  );
}
