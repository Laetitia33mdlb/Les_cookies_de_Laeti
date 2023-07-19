import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Recipe from "./pages/recipe/Recipe";
import "./App.scss";
import CreateCookies from "./pages/create/CreateCookies";
import ModificationCookies from "./pages/modification/ModificationCookies";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes/:id",
        element: <Recipe />,
      },
      {
        path: "/create",
        element: <CreateCookies />,
      },
      {
        path: "/modification/:id",
        element: <ModificationCookies />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
