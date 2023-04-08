import { Link, Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import LoginPage from "../components/LoginPage";
import FilterPage from "../components/FilterPage";
import Results from "../components/Results";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <FilterPage />,
      },
      {
        path: "/travelPlan",
        element: <Results />,
      }
    ],
  },
]);

export const unAuthrouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  }
]);
