import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../types/types";

type QuizStateProps = {
  topic: string;
  questions: Question[];
  userAnswers: string[];
};

const initialState: QuizStateProps = {
  topic: "",
  questions: [],
  userAnswers: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,
  reducers: {
    setQuizTopic: (state, action) => {
      state.topic = action.payload;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setUserAnswer: (state, action) => {
      const questionIdx = action.payload.questionIdx;
      const answer = action.payload.answer;
      state.userAnswers[questionIdx] = answer;
    },
  },
});

export const { setQuestions, setUserAnswer, setQuizTopic } = quizSlice.actions;
export default quizSlice.reducer;
