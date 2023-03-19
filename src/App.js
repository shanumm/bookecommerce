import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blogs from "./modules/Blogs";
import CartProduct from "./modules/CartProduct";
import Footer from "./modules/Footer";
import HeroBanner from "./modules/HeroBanner";
import HomePageBookSection from "./modules/HomePageBookSection";
import Landing from "./modules/Landing";
import Nav from "./modules/Nav";
import SectionFour from "./modules/SectionFour";
import SectionOne from "./modules/SectionOne";
import SectionThree from "./modules/SectionThree";
import SectionTwo from "./modules/SectionTwo";
import SignUp from "./modules/SignUp";
import Dashboard from "./modules/Dashboard";
import Shop from "./modules/Shop";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/book" element={<CartProduct />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
