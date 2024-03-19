// React
import React from "react";

// React Router DOM
import { useRoutes } from "react-router-dom";

// Routers
import homeRouter from "@/features/home/router";
import algorithmRouter from "@/features/algorithm/router";

// Template components
import { MainLayout } from "@/features/app/components/template";

// Pages
import { NotFoundPage } from "@/features/app/pages";

// Get routers
const home = homeRouter();
const algorithm = algorithmRouter();

const useRouter = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [...home, ...algorithm],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return routes;
};

export default useRouter;
