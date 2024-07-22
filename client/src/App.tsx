import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/about/About"));
const Register = lazy(() => import("./components/Auth/Register"));
const Login = lazy(() => import("./components/Auth/Login"));
const ForgetPassword = lazy(() => import("./components/Auth/ForgetPassword"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
