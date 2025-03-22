import { createBrowserRouter } from "react-router-dom";
import { CommonRoute } from "./common-route";
import { ProductRoute } from "./product-route";

export default createBrowserRouter([CommonRoute(), ProductRoute()]);
