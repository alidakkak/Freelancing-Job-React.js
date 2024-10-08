import { useRoutes } from "react-router";
import { authRoutes } from "./authRoutes";
import { mainRoutes } from "./mainRoutes";
import { chatRoute } from "./chatRoute";

const AppRoutes = () => {
  return useRoutes([
    authRoutes,
    mainRoutes,
    chatRoute
  ]);
};

export default AppRoutes;
