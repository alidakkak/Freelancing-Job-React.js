import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StoreProvider from "./store/StoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <StoreProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </StoreProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
