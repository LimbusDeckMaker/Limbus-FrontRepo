import React from "react";
import Router from "./router";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@apis/queryClient';

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
  );
}

export default App;
