import { useEffect, useState } from "react";
import Answer from "../components/Answer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { setUserAnswer } from "../redux/slices/quizSlice";
import { shuffleArray } from "../lib/helpers";

export default function Question() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);

  const quizTopic = useAppSelector((store) => store.quiz.topic);
  const questions = useAppSelector((store) => store.quiz.questions);
  const question = questions[Number(id) - 1];

  useEffect(() => {
    if (question) {
      const originalArray = [
        ...new Set([question?.correct_answer, ...question?.incorrect_answers]),
      ];
      const shuffled = shuffleArray(originalArray);
      setShuffledAnswers(shuffled);
    }
  }, [id]);

  useEffect(() => {
    if (selectedAnswer) {
      setError(null);
    }
  }, [selectedAnswer]);

  const nextQuestionHandler = () => {
    if (!selectedAnswer) {
      setError("You must select at least one answer");
      return;
    }
    dispatch(
      setUserAnswer({ answer: selectedAnswer, questionIdx: Number(id) - 1 })
    );
    if (Number(id) + 1 > 10) {
      navigate("/quiz-results");
    } else {
      navigate(`/question/${Number(id) + 1}`);
    }
    setSelectedAnswer(null);
  };

  if (!question) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <div className="flex items-center justify-center flex-col px-12">
      <h2 className="text-4xl mb-8">Quiz Topic: {quizTopic}</h2>
      <div className="px-20 py-12 shadow-2xl space-y-6 max-w-[768px] min-w-[330px]">
        <h3 className="text-4xl text-blue-500 font-bold">Question {id}</h3>
        <h5 className="text-3xl tracking-wide">{question?.question}</h5>
        <div className="space-y-2">
          {shuffledAnswers?.map((answer, idx) => (
            <Answer
              key={idx}
              value={answer}
              id={answer}
              name="answer"
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            />
          ))}
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
