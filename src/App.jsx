import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DashboardPage from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;