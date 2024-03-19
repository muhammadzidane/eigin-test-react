// React Router DOM
import { type RouteObject } from "react-router-dom";

// UI
import { HomeIndex, HomeDetail } from "../pages";

const homeRouter = (): RouteObject[] => [
  {
    path: "",
    element: <HomeIndex />,
  },
  {
    path: "detail",
    element: <HomeDetail />,
  },
];

export default homeRouter;
