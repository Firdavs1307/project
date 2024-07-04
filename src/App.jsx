import { Route, Routes, Navigate } from "react-router-dom";
import { lazy } from "react";
import { useSelector } from "react-redux";
import { isAuthSelector } from "./redux/auth/selector";

// const ErrorPage = lazy(() => import("pages/ErrorPage/ErrorPage"));
// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
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
      {/* <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
          }
        /> */}
      <Route path="*" element={<ErrorPage />} />
      {/* //{" "} */}
    </Routes>
  );
}

export default App;
