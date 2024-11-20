import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../../types/types";

type QuizStateProps = {
  questions: Question[];
};

const initialState: QuizStateProps = {
  questions: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState,
  reducers: {},
});
