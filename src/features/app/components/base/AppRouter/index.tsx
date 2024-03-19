// React
import { Suspense } from "react";

// Plugins
import useRouter from "@/plugins/router";

const AppRouter: React.FC = () => {
  const routers = useRouter();
  return <Suspense fallback={<div>Loading ...</div>}>{routers}</Suspense>;
};

export default AppRouter;
