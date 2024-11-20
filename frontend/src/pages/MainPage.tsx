import { FormEvent, useEffect, useRef, useState } from "react";
import { AxiosInstance } from "../lib/axios";
import Spinner from "../components/Spinner";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setQuestions, setQuizTopic } from "../redux/slices/quizSlice";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const quizTopic = useAppSelector((store) => store.quiz.topic);
  const [inputError, setInputError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (quizTopic.length > 0) {
      setInputError(null);
    }
  }, [quizTopic]);

  const startQuizHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (quizTopic.length < 1) {
      setInputError("Quiz topic required");
      return;
    }

    setIsLoading(true);
    AxiosInstance.post("quiz/", {
      topic: quizTopic,
    })
      .then((res) => {
        dispatch(setQuestions(res.data.questions));
        navigate("/question/1/");
      })
      .catch((error) => {
        console.error(error);
        dispatch(setQuizTopic(""));
      })
      .finally(() => {
        setIsLoading(false);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      });
  };
  return (
    <>
      <h3 className="text-2xl tracking-wider leading-normal sm:text-3xl">
        Choose the topic you'd like to take a quiz on, and let's see how much
        you know
        <span className="font-bold text-green-500">
          (e.g., Sport, IT, Finance...)
        </span>
      </h3>
      <form className="w-full mt-3" onSubmit={startQuizHandler}>
        <input
          ref={inputRef}
          onChange={(e) => dispatch(setQuizTopic(e.target.value))}
          type="text"
          minLength={1}
          maxLength={30}
          placeholder="Quiz topic"
          className={`w-full p-4 rounded-t-md text-black outline-none text-2xl ${
            inputError && "bg-red-200"
          }`}
        />
        {inputError && <p className="text-red-500">{inputError}</p>}
        <button
          disabled={isLoading}
          type="submit"
          className="w-full py-4 shadow-md hover:bg-black/10 rounded-b-md flex justify-center"
        >
          {isLoading ? <Spinner /> : "Proceed"}
        </button>
      </form>
    </>
  );
}
