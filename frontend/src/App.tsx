import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import BookmarkPage from "./pages/BookmarkPage";
import ConfirmAccountPage from "./pages/ConfirmAccountPage";
import TrendingPage from "./pages/TrendingPage";
import TvSeries from "./pages/TvSeries";

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <div className="App-container">
        <div className="wrapper">
          <AuthProvider authType={"localstorage"} authName={"_auth"}>
            <BrowserRouter>
              <Routes>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Signup />} />
                <Route path="/auth/confirm-account/:token" element={<ConfirmAccountPage />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route
                  path="/home"
                  element={
                    <RequireAuth loginPath="/auth/login">
                      <TrendingPage />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/movies"
                  element={
                    <RequireAuth loginPath="/auth/login">
                      <Movies />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/tv-series"
                  element={
                    <RequireAuth loginPath="/auth/login">
                      <TvSeries />
                    </RequireAuth>
                  }
                />
                <Route
                  path="/bookmark"
                  element={
                    <RequireAuth loginPath="/auth/login">
                      <BookmarkPage />
                    </RequireAuth>
                  }
                />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </BrowserRouter>
          </AuthProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
