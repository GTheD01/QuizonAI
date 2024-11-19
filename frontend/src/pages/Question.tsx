import { useState } from "react";
import Answer from "../components/Answer";

export default function Question() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  console.log(selectedAnswer);

  return (
    <div>
      <h2 className="text-4xl">Quiz Topic:</h2>
      <div className="px-20 py-12 shadow-2xl space-y-6">
        <h3 className="text-4xl text-blue-500 font-bold">Question 1</h3>
        <h5 className="text-3xl">Which of the following is OOP language?</h5>
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
      </div>
    </div>
  );
}
