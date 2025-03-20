import { Home } from "src/pages/ui/home";
import { CommonLayout } from "../layouts/common-layout";
import { ErrorLayout } from "@app/layouts/error-layout";

export const CommonRoute = () => {
  return {
    path: "/",
    element: <CommonLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  };
};
