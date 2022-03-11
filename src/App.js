import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostAuthProvider } from "@nhost/react-auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home/Home";
import Login from "./components/pages/Login/login/Login";
import Register from "./components/pages/Login/Register/Register";
import Footer from "./components/Shared/footer/Footer";
import NavBar from "./components/Shared/navBar/NavBar";
import nhost from "./utils/Nhost";

function App() {
  return (
    <>
      <BrowserRouter>
        <NhostApolloProvider nhost={nhost}>
          <NhostAuthProvider nhost={nhost}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>
            <Footer />
          </NhostAuthProvider>
        </NhostApolloProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
