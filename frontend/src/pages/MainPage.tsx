import { FormEvent, useEffect, useRef, useState } from "react";

export default function MainPage() {
  const [quizTopic, setQuizTopic] = useState<string>("");
  const [inputError, setInputError] = useState<string | null>(null);
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

    console.log("Generate questions");
  };
  return (
    <>
      <h3 className="text-2xl tracking-wider leading-normal sm:text-3xl">
        Choose the topic you'd like to take a quiz on, and let's see how much
        you know
        <span className="font-bold text-green-500">
          (e.g., Sport, IT, Finances...)
        </span>
      </h3>
      <form className="w-full mt-3" onSubmit={startQuizHandler}>
        <input
          ref={inputRef}
          onChange={(e) => setQuizTopic(e.target.value)}
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
          type="submit"
          className="w-full py-4 shadow-md hover:bg-black/10 rounded-b-md"
        >
          Proceed
        </button>
      </form>
    </>
  );
}
