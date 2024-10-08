import MinimalLayout from "../Layouts/MinimalLayout";
import Register from "../views/auth/Register";
import LoginPage from "../views/auth/Login";
import InformationPage from "../views/information";
import MainLayout from "../Layouts/MainLayout";

export const authRoutes = {
  path: "",
  element: <MinimalLayout />,
  children: [
    {
      path: "",
      element: <Register />,
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "profile",
      element: <MainLayout />,
    },
    {
      path: "fillInformation",
      element: <InformationPage />,
    },
  ],
};
