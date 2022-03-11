import Footer from "../../../Shared/footer/Footer";
import NavBar from "../../../Shared/navBar/NavBar";
import Banner from "../banner/Banner";
import Partners from "../parnters/Partners";
import SectionEight from "../sectionEight/SectionEight";
import SectionFive from "../sectionFive/SectionFive";
import SectionFour from "../sectionFour/SectionFour";
import SectionFourPartTwo from "../sectionFourPartTwo/SectionFourPartTwo";
import SectionSeven from "../sectionSeven/SectionSeven";
import SectionSix from "../sectionSix/SectionSix";
import SectionThree from "../sectionThree/SectionThree";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Partners />
      <SectionThree />
      <SectionFour />
      <SectionFourPartTwo />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <Footer />
    </div>
  );
};

export default Home;
