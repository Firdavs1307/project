import { Route, Routes, Navigate, redirect } from "react-router-dom";
import { Component, lazy } from "react";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isAuth = useSelector(isAuthSelector);

  return !isAuth ? <Navigate to={redirectTo} /> : Component;
};

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isAuth = useSelector(isAuthSelector);

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};

function App() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}></Route>
    </Routes>
  );
}
