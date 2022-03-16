import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Contacts from "./components/Reviews/Reviews";
import { useAuth } from "./contexts/AuthContext";
import { ADMIN } from "./helpers/consts";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import OurValuesPage from "./pages/OurValuesPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import ProgramsPage from "./pages/ProgramsPage";
import NewsPage from "./pages/NewsPage";
import GalleryPage from "./pages/GalleryPage";
import AppoinmentsPage from "./pages/AppoinmentsPage";
import Reviews from "./components/Reviews/Reviews";

const MainRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },

    {
      link: "/auth",
      element: <AuthPage />,
      id: 3,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 4,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 5,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 6,
    },
    {
      link: "/reviews",
      element: <Reviews />,
      id: 7,
    },
    // {
    //   link: "*",
    //   element: <NotFoundPage />,
    //   id: 8,
    // },
    {
      link: "/ourvalues",
      element: <OurValuesPage />,
      id: 9,
    },
    {
      link: "/appoinments",
      element: <AppoinmentsPage />,
      id: 10,
    },

    {
      link: "/programs",
      element: <ProgramsPage />,
      id: 12,
    },
  ];

  const PRIVATE_ROUTES = [
    {
      link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 2,
    },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} />
        ))}

        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MainRoutes;
