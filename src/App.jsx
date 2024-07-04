import { Route, Routes, Navigate, redirect } from "react-router-dom";
import { Component, lazy } from "react";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isAuth = useSelector(isAuthSelector);
};
