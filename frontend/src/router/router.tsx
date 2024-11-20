import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage";
import Question from "../pages/Question";
import QuizResults from "../pages/QuizResults";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "question/:id",
          element: <Question />,
          errorElement: <ErrorPage />,
        },
        {
          path: "quiz-results",
          element: <QuizResults />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default router;
