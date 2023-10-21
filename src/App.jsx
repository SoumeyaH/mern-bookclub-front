import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DashboardPage from "./pages/Dashboard";
import CreateBookClubPage from "./pages/CreateBookClub";
import CreateBookListPage from "./pages/CreateBookList";
import FindBookClubs from "./pages/FindBookClubs";
import FindBookLists from "./pages/FindBookLists";
import BookClubPage from "./pages/BookClub";
import BookListPage from "./pages/BookList";
import PageNotFound from "./pages/PageNotFound";

import ProtectedRoutes from "./utils/ProtectedRoutes";

import UserContextProvider from "./contexts/UserContext";

import './App.css'


function App() {
 
  return ( 
    <div className="App">
      <Router>
        <UserContextProvider>
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/create-book-club" element={<CreateBookClubPage />} />
              <Route path="/create-book-list" element={<CreateBookListPage />} />
              <Route path="/find-book-clubs" element={<FindBookClubs />} />
              <Route path="/find-book-lists" element={<FindBookLists />} />
              <Route path="/book-club/:title" element={<BookClubPage />} />
              <Route path="/book-list/:title" element={<BookListPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;