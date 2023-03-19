import React from "react";
import { Link } from "react-router-dom";
import Blogs from "./Blogs";
import HeroBanner from "./HeroBanner";
import HomePageBookSection from "./HomePageBookSection";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

export default function Landing() {
  return (
    <div>
      <HeroBanner />
      <SectionOne />
      <HomePageBookSection />
      <div className="loadMoreButton">
        <button>
          <Link to="/shop">Load More</Link>
        </button>
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Blogs />
    </div>
  );
}
