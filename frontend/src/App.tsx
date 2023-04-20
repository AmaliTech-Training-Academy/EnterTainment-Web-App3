import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequireAuth } from "react-auth-kit";
import "./App.css";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import BookmarkPage from "./pages/BookmarkPage";
import ConfirmAccountPage from "./pages/ConfirmAccountPage";
import TrendingPage from "./pages/TrendingPage";
import TvSeries from "./pages/TvSeries";
import SearchPage from "./pages/SearchPage";
import useSearch from "./hooks/useSearch";
import SearchBar from "./components/SearchBar";
import { ViewProvider } from "./components/ViewContext";
import SideBar from "./components/SideBar";

function App() {

  const { search, word } = useSearch();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="App">
      <ToastContainer />
      <div className="App-container">
        <div className="wrapper">
          {!path.includes("auth") && (
            <>
              <SideBar />
              <ViewProvider search={search} word={word}>
                <SearchBar />
              </ViewProvider>
            </>
          )}
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
            <Route path="/search" element={<SearchPage data={word} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
