import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/HomePage";
import ShopPage from "../pages/shop/ShopPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
    ],
  },
]);
