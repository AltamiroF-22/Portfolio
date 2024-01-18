import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./styles/main.sass";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//pages-routes
import Home from "./routes/Home.jsx";
import E404Route from "./routes/E404.jsx";

//Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <E404Route /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
