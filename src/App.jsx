import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { useSelector } from "react-redux";
import { isAuthSelector } from "./redux/auth/selector";

const SignInPage = lazy(() => import("./pages/SignInPage/SignInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage/SignUpPage"));

function App() {
  const isAuth = useSelector(isAuthSelector);

  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <RestrictedRoute redirectTo="/home" component={<SignInPage />} />
        }
      />
      <Route
        path="/signup"
        element={
          <RestrictedRoute redirectTo="/home" component={<SignUpPage />} />
        }
      />

      <Route path="*" element={<ErrorPage />} />

    </Routes>
  );
}

export default App;
