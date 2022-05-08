import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostAuthProvider } from "@nhost/react-auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "reactjs-popup/dist/index.css";
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
import ContentHome from "./components/pages/megaMenuContainer/contentWriting/contentHome/ContentHome";
import AppHome from "./components/pages/megaMenuContainer/appDevelopment/appHome/AppHome";
import VideoHome from "./components/pages/megaMenuContainer/videoEditing/videoHome/VideoHome";
import CourseHome from "./components/pages/courseDetails/courseHome/CourseHome";
import ProfileHome from "./components/pages/profile/profileHome/ProfileHome";
import SettingHome from "./components/pages/profileSetting/settingHome/SettingHome";
import StudentsHome from "./components/pages/students/studentsHome/StudentsHome";
import InstructorsHome from "./components/pages/instructors/instructorsHome/InstructorsHome";
import "react-toastify/dist/ReactToastify.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SearchResult from "./components/pages/Home/searchResult";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
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
              <Route path="contentWriting" element={<ContentHome />} />
              <Route path="appDevelopment" element={<AppHome />} />
              <Route path="videoEditing" element={<VideoHome />} />
              <Route path="courseDetails/:id" element={<CourseHome />} />

              <Route path="cart" element={<CartHome />} />
              <Route path="checkout" element={<CheckoutHome />} />
              <Route path="studentsList" element={<StudentsHome />} />
              <Route path="instructorsList" element={<InstructorsHome />} />
              <Route path="login" element={<LoginHome />} />
              <Route path="register" element={<RegisterHome />} />
              <Route path="profile" element={<ProfileHome />} />
              <Route path="profileSetting" element={<SettingHome />} />
              <Route path="search/:title" element={<SearchResult />} />
            </Routes>
            <Footer />
          </NhostAuthProvider>
        </NhostApolloProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
