import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
// import Login from "./auth/Login";
// import Register from "./auth/Register";
// import StudentDashboard from "./pages/StudentDashboard";
// import StudentProfile from "./pages/StudentProfile";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminProfile from "./pages/AdminProfile";
// import AddBook from "./pages/AddBook";
// import EditBook from "./pages/EditBook";
// import ProtectedRoute from "./componants/protectedRoute/ProtectedRoute";
// import AdminBooks from "./pages/AdminBooks";
// import EditStudentProfile from "./pages/EditStudentProfile";
// import AdminStudents from "./pages/AdminStudents";
// import AdminStats from "./pages/AdminStats";
// import AdminBorrows from "./pages/AdminBorrows";
// import AdminRecommendations from "./pages/AdminRecommendations";
// import StudentBooks from "./pages/StudentBooks";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/*Default Redirect*/}
        <Route  path="/" element={<Navigate to="/login replace" />}/>

      </Routes>
    </>
  );
}

export default App;
