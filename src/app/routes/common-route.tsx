import { Home } from "src/pages/ui/home";
import { CommonLayout } from "../layouts/common-layout";
import { ErrorLayout } from "@app/layouts/error-layout";
import { Auth } from "@pages/ui/auth";
import { Cart } from "@pages/ui/cart";

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
      {
        path: "/auth",
        element: <Auth />,
      },
      { path: "/cart", element: <Cart /> },
    ],
  };
};
