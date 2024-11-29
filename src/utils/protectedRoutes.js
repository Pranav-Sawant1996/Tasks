import React from "react";
import { useAuth } from "../context/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const { isLoggedIn } = useAuth();
  // console.log("isLoggedIn", isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
