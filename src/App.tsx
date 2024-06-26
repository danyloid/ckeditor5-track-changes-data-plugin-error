import { FC } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { routesConfiguration } from "./routesConfiguration";

const router = createBrowserRouter(
  [
    {
      path: routesConfiguration.index.path,
      element: <HomePage />,
    },
  ],
  {
    basename: routesConfiguration.baseUrl,
  }
);

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
