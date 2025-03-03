import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/SignUp";
import SendOTP from "./pages/Otp/Otp";
import ResetPassword from "./pages/ResetPassword/ResetPassword";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<SendOTP/>}/>
        <Route path="/reset-password" element={<ResetPassword/>} />
      </Routes>
    </Router>
  );
}
