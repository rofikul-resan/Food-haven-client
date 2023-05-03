import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider";
import LoadingPage from "./components/LoadingPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LoadingPage>
        <RouterProvider router={router}></RouterProvider>
      </LoadingPage>
    </AuthProvider>
  </React.StrictMode>
);
