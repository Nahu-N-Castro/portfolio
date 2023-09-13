import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./src/error-page";
import IntroPage from "./views/Intro/IntroPage";
import HomePage from "./views/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/home",
    element:<HomePage/>,

  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
