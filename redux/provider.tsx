"use client";

import { injectStore } from "@/services/axios";
import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  injectStore(store);
  return <Provider store={store}>{children}</Provider>;
}
