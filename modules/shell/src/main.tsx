import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { modulesLoader } from "./api/modulesLoader.ts";
import App from "./App.tsx";
import { RemoteContainer } from "./components/Remote";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: modulesLoader,
    shouldRevalidate: ({ nextParams }) => {
      if (nextParams.moduleName) {
        return false;
      }
      return true;
    },
    children: [
      {
        path: ":moduleName",
        Component: RemoteContainer,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
