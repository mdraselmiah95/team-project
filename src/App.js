import Banner from "./components/banner/Banner";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Partners from "./components/parnters/Partners";
import SectionEight from "./components/sectionEight/SectionEight";
import SectionFive from "./components/sectionFive/SectionFive";
import SectionFour from "./components/sectionFour/SectionFour";
import SectionFourPartTwo from "./components/sectionFourPartTwo/SectionFourPartTwo";
import SectionSeven from "./components/sectionSeven/SectionSeven";
import SectionSix from "./components/sectionSix/SectionSix";
import SectionThree from "./components/sectionThree/SectionThree";
import { NhostAuthProvider } from "@nhost/react-auth";
import { NhostApolloProvider } from "@nhost/react-apollo";
import nhost from "./utils/Nhost";
import Register from "./components/pages/Login/Register/Register";

function App() {
  return (
    <NhostApolloProvider nhost={nhost}>
      <NhostAuthProvider nhost={nhost}>
        {/* <NavBar />
        <Banner />
        <Partners />
        <SectionThree />
        <SectionFour />
        <SectionFourPartTwo />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <Footer /> */}
        <Register />
      </NhostAuthProvider>
    </NhostApolloProvider>
  );
}

export default App;
