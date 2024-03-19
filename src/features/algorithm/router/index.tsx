// React Router DOM
import { type RouteObject } from "react-router-dom";

// UI
import { AlgorithmIndex } from "../pages";

const algorithmRouter = (): RouteObject[] => [
  {
    path: "algorithm",
    element: <AlgorithmIndex />,
  },
];

export default algorithmRouter;
