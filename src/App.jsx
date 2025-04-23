import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact/Contact";
import Request from "./pages/Request/Request";
import FloatingChat from "./component/FloatingChat/FloatingChat";
import Register from "./pages/SignIn/AdminRegister";
import Login from "./pages/SignIn/AdminLogIn";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import CreatePost from "./pages/CreatePost/CreatePost";
import EditPost from "./pages/EditPost/EditPost";
import TrackAndTrace from "./pages/TrackAndTrace/TrackAndTrace";
import UserRegister from "./pages/UserLogin/UserRegister";
import UserLogin from "./pages/UserLogin/UserLogin";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import GoogleTranslate from "./component/GoogleTranslate/GoogleTranslate";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <BrowserRouter>
        <FloatingChat />
        <GoogleTranslate />
        <Navbar />
        <Routes>
          <Route exact path="*" element={<NotFoundPage />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/request-a-quote" element={<Request />} />
          <Route exact path="/admin/register" element={<Register />} />
          <Route exact path="/admin/login" element={<Login />} />
          <Route exact path="/user/login" element={<UserLogin />} />
          <Route exact path="/user/register" element={<UserRegister />} />

          <Route exact path="/create-package" element={<CreatePost />} />
          <Route exact path="/edit-post/:postId" element={<EditPost />} />
          <Route exact path="/track" element={<TrackAndTrace />} />

          <Route exact path="/user/profile" element={<UserDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
