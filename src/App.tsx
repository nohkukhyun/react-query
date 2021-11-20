import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Routers from "./routes";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routers />
    </QueryClientProvider>
  );
}

export default App;
