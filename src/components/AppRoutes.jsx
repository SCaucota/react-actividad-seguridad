
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import Callback from "./Callback";
import UserProfile from "./UserProfile";
import LogoutPage from "./LogoutPage";
import NavigationBar from "./NavigationBar";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/profile" element={<ProtectedRoute />}>
          <Route index element={<UserProfile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
