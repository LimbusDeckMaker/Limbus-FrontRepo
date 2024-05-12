import React from "react";
import Router from "./router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@apis/queryClient";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
