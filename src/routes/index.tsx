import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutWrapper from "./LayoutWrapper";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const LoginPage = lazy(() => import("../pages/Login"));
const CoursePage = lazy(() => import("../pages/CoursePage"));
const ContactForm = lazy(() => import("../pages/Contact"));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          {/* Use LayoutWrapper to manage Layout */}
          <Route>
            <Route
              path="/"
              element={
                <LayoutWrapper>
                  <HomePage />
                </LayoutWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <LayoutWrapper>
                  <AboutPage />
                </LayoutWrapper>
              }
            />
            <Route
              path="/course"
              element={
                <LayoutWrapper>
                  <CoursePage />
                </LayoutWrapper>
              }
            />
            <Route
              path="*"
              element={
                <LayoutWrapper>
                  <NotFoundPage />
                </LayoutWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <LayoutWrapper>
                  <ContactForm />
                </LayoutWrapper>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
