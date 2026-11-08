import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import Index from ".";
import Home from "./pages/home";
import Programming from "./pages/programming";
import Art from "./pages/art";
import Gamming from "./pages/games";
import Makeup from "./pages/makeup";
import Random from "./pages/random";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      { index: true, element: <Home /> },
      // {
      //   path: "/programing",
      //   element: <Programming />,
      // },
      // {
      //   path: "/programing",
      //   element: <Programming />,
      // },
      // {
      //   path: "/art",
      //   element: <Art />,
      // },
      // {
      //   path: "/games",
      //   element: <Gamming />,
      // },
      // {
      //   path: "/makeup",
      //   element: <Makeup />,
      // },
      // {
      //   path: "/random",
      //   element: <Random />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
