import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from './components/home/Home';

import Login from './components/Login/index';
import Navbar from './components/navbar/Navbar'
import EmailVerify from './components/EmailVerify/index';
import Signup from "./components/Signup/index";
import ForgotPassword from "./components/ForgotPassword/index";
import PasswordReset from "./components/PasswordReset/index";

function App() {
  const user = localStorage.getItem("user")
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={user ? <Home /> : <Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/users/:id/verify/:token" element={<EmailVerify />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
