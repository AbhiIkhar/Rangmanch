import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Body = () => {
  const BodyRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <div>TODO</div>,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={BodyRouter} />;
};

export default Body;
