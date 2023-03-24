import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./Styles/heroBanner.css";
import Two from "../Images/two.jpeg";
import One from "../Images/allone.jpeg";
import Three from "../Images/three.jpeg";

export default function HeroBanner() {
  return (
    <div className="heroBanner">
      <Splide
        options={{
          type: "loop",
          gap: "1rem",
          perPage: 1,
          arrows: true,
          autoplay: true,
          pagination: true,
          classes: {
            pagination: "splide__pagination--bottom-left",
            page: "splide__pagination__page--black-square",
          },
        }}
      >
        <SplideSlide>
          <img className="heroBannerBGImage" src={Two} />
        </SplideSlide>
        <SplideSlide>
          <img className="heroBannerBGImage" src={One} />
        </SplideSlide>
        <SplideSlide>
          <img className="heroBannerBGImage" src={Three} />
        </SplideSlide>
      </Splide>

      {/* Add your other components here */}
    </div>
  );
}
