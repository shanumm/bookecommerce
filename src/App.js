import "./App.css";
import Blogs from "./modules/Blogs";
import Footer from "./modules/Footer";
import HeroBanner from "./modules/HeroBanner";
import HomePageBookSection from "./modules/HomePageBookSection";
import Nav from "./modules/Nav";
import SectionFour from "./modules/SectionFour";
import SectionOne from "./modules/SectionOne";
import SectionThree from "./modules/SectionThree";
import SectionTwo from "./modules/SectionTwo";

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroBanner />
      <SectionOne />
      <HomePageBookSection />
      <div className="loadMoreButton">
        <button>Load More</button>
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
