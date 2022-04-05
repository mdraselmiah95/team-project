import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostAuthProvider } from "@nhost/react-auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursesHome from "./components/pages/courses/coursesHome/CoursesHome";
import Home from "./components/pages/Home/Home/Home";
import Footer from "./components/Shared/footer/Footer";
import NavBar from "./components/Shared/navBar/NavBar";
import nhost from "./utils/Nhost";
import React from "react";
import CartHome from "./components/pages/cart/cartHome/CartHome";
import CheckoutHome from "./components/pages/checkout/checkoutHome/CheckoutHome";
import LoginHome from "./components/pages/Login/login/logInHome/LoginHome";
import RegisterHome from "./components/pages/Login/Register/registerHome/RegisterHome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DevHome from "./components/pages/megaMenuContainer/webDevelopment/devHome/DevHome";
import GraphicsHome from "./components/pages/megaMenuContainer/graphicsDesign/graphicsHome/GraphicsHome";
import DigitalHome from "./components/pages/megaMenuContainer/digitalProductDesign/digitalHome/DigitalHome";

function App() {
  return (
    <BrowserRouter>
      <NhostApolloProvider nhost={nhost}>
        <NhostAuthProvider nhost={nhost}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="courses" element={<CoursesHome />} />
            <Route path="webDevelopment" element={<DevHome />} />
            <Route path="graphicsDesign" element={<GraphicsHome />} />
            <Route path="digitalProductDesign" element={<DigitalHome />} />
            <Route path="cart" element={<CartHome />} />
            <Route path="checkout" element={<CheckoutHome />} />
            <Route path="login" element={<LoginHome />} />
            <Route path="register" element={<RegisterHome />} />
          </Routes>
          <Footer />
        </NhostAuthProvider>
      </NhostApolloProvider>
    </BrowserRouter>
  );
}

export default App;
