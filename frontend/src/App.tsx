import { FormEvent, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quizTopic, setQuizTopic] = useState<string>("");
  const [inputError, setInputError] = useState<string | null>(null);

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
    <div className="flex items-center h-screen flex-col">
      <h1 className="h-2/5 mt-5 text-8xl">QuizonAI</h1>
      <div className="text-center sm:px-24 px-24 max-w-[768px]">
        <h3 className="text-2xl tracking-wider leading-normal sm:text-3xl">
          Choose the topic you'd like to take a quiz on, and let's see how much
          you know
          <span className="font-bold text-green-500">
            (e.g., Sport, IT, Finances...)
          </span>
        </h3>
        <form className="w-full mt-3" onSubmit={startQuizHandler}>
          <input
            onChange={(e) => setQuizTopic(e.target.value)}
            type="text"
            minLength={1}
            maxLength={30}
            placeholder="Quiz topic"
            className={`w-full p-4 rounded-md text-black outline-none text-2xl ${
              inputError && "bg-red-200"
            }`}
          />
          {inputError && <p className="text-red-500">{inputError}</p>}
          <button
            type="submit"
            className="w-full py-4 shadow-md hover:bg-black/10 rounded-md"
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
