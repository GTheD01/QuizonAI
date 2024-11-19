import Answer from "../components/Answer";
import Pagination from "../components/Pagination";

export default function QuizResults() {
  return (
    <div className="flex items-center justify-center flex-col px-12">
      <h2 className="text-4xl mb-8">Quiz Topic:</h2>
      <div className="px-20 py-12 shadow-2xl space-y-6 max-w-[768px] min-w-[330px]">
        <Pagination />
        <h3 className="text-4xl text-blue-500 font-bold">Question 1</h3>
        <h5 className="text-3xl tracking-wide">
          Which of the following is OOP language?
        </h5>
        <div className="space-y-2">
          <Answer
            value="Java"
            id="Java"
            name="answer"
            selectedAnswer={"C"}
            correctAnswer="Cobol"
          />
          <Answer
            value="Cobol"
            id="Cobol"
            name="answer"
            selectedAnswer={"C"}
            correctAnswer="Cobol"
          />
          <Answer
            value="C"
            id="C"
            name="answer"
            selectedAnswer={"C"}
            correctAnswer="Cobol"
          />
          <Answer
            value="Assembly"
            id="Assembly"
            name="answer"
            selectedAnswer={"C"}
            correctAnswer="Cobol"
          />
        </div>
      </div>
    </div>
  );
}
