import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Play from "./pages/Play/Play";
import Login from "./pages/Login";
import List from "./pages/List";
import Signup from "./pages/Signup";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import LoggedInRoute from "./components/LoggedInRoute";
import Shows from "./pages/Shows/Shows";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <LoggedInRoute>
                <LandingPage />
              </LoggedInRoute>
            }
          />
          <Route
            path="/browse"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shows"
            element={
              <ProtectedRoute>
                <Shows />
              </ProtectedRoute>
            }
          />
          <Route
            path="/play"
            element={
              <ProtectedRoute>
                <Play />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/browse/my-list"
            element={
              <ProtectedRoute>
                <List />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
