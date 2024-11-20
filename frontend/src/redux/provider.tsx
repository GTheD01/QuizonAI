import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface ProviderProps {
  children: React.ReactNode;
}

export default function CustomProvider({ children }: ProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}
