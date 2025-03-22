import { CommonLayout } from "@app/layouts/common-layout";
import { ErrorLayout } from "@app/layouts/error-layout";
import { AllProducts } from "@pages/ui/all-products";
import { Detail } from "@pages/ui/detail";
import { NewProduct } from "@pages/ui/new-product";

export const ProductRoute = () => {
  return {
    path: "/product",
    element: <CommonLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        path: "/product",
        element: <AllProducts />,
      },
      {
        path: "/product/new",
        element: <NewProduct />,
      },
      {
        path: "/product/:id",
        element: <Detail />,
      },
    ],
  };
};
