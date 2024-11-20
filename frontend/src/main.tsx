import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CustomProvider from "./redux/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <CustomProvider>
    <App />
  </CustomProvider>
);
