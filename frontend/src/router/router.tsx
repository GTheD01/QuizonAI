import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import MainPage from "../pages/MainPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

export default router;
