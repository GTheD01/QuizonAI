import { useEffect, useState } from "react";
import Answer from "../components/Answer";
import Pagination from "../components/Pagination";
import { useAppSelector } from "../redux/hooks";
import { Link, Navigate } from "react-router-dom";

export default function QuizResults() {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  const quizTopic = useAppSelector((store) => store.quiz.topic);
  const userAnswers = useAppSelector((store) => store.quiz.userAnswers);
  const questions = useAppSelector((store) => store.quiz.questions);
  const question = questions[selectedQuestion - 1];
  const [answers, setAnswers] = useState<string[]>([]);

  useEffect(() => {
    if (question) {
      setAnswers([
        ...new Set([...question.incorrect_answers, question.correct_answer]),
      ]);
    }
  }, [question]);

  if (userAnswers.length < 1) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="flex items-center justify-center flex-col px-12">
      <h2 className="text-4xl mb-8">Quiz Topic: {quizTopic}</h2>
      <div className="px-20 py-12 shadow-2xl space-y-6 md:w-[650px] w-[450px]">
        <Pagination
          selectedQuestion={selectedQuestion}
          setSelectedQuestion={setSelectedQuestion}
        />
        <h3 className="text-4xl text-blue-500 font-bold">
          Question {selectedQuestion}
        </h3>
        <h5 className="text-3xl tracking-wide">{question?.question}</h5>
        <div className="space-y-2">
          {answers?.map((answer) => (
            <Answer
              key={answer}
              value={answer}
              id={answer}
              name="answer"
              selectedAnswer={userAnswers[selectedQuestion - 1]}
              correctAnswer={question?.correct_answer}
            />
          ))}
        </div>
      </div>
      <Link className="bg-blue-400 p-4 hover:bg-blue-500" to={"/"}>
        Play Again
      </Link>
    </div>
  );
}
