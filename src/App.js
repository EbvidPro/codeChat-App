import React, { useContext } from "react";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";

function App() {

  const { currentUser } = useContext(AuthContext);

  /**
   * If there is no current user, navigate to the home page. Otherwise, render the children
   * @returns The children of the component.
   */
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/" />
    }

    return children
  }

  // console.log(currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
