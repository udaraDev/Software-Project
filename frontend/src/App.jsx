import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { fetchUser } from "./store/slices/userSlice";

// Pages
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile";
import HeroSection from "./pages/Home";
import MainHomePage from "./pages/MainHomePage";

const App = () => {
  const dispatch = useDispatch();

  // Fetch user details on app load
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <Router>
      <MainAppContent />
    </Router>
  );
};

const MainAppContent = () => {
  const location = useLocation();

  // Centralized route configuration
  const routes = [
    { path: "/", element: <HeroSection /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/login", element: <Login /> },
    { path: "/how-it-works-info", element: <HowItWorks /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/me", element: <UserProfile /> },
    { path: "/mainhomepage", element: <MainHomePage /> },
  ];

  // Pages where Footer should not appear
  const noFooterPaths = [
    "/inventory",
    "/products",
    "/adjustments",
    "/inventory-management",
    "/categories",
    "/suppliers",
    "/reports",
    "/profile",
  ];

  const shouldShowFooter = !noFooterPaths.includes(location.pathname);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
      {shouldShowFooter && <Footer />}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </>
  );
};

export default App;
