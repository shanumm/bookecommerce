import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./Styles/heroBanner.css";
import Two from "../MainCaraousel/1 (1).png";
import One from "../MainCaraousel/2 (1).png";
import Three from "../MainCaraousel/3.png";
import { useNavigate } from "react-router-dom";

export default function HeroBanner() {
  const navigation = useNavigate();
  const handleRedirect = (value) => {
    navigation("/shop", { state: { filter: value } });
  };

  const OverlayButton = () => (
    <button
      style={{
        position: "absolute",
        bottom: "20%",
        left: "5%",
        background: "#000000",
        color: "white",
        border: "none",
        outline: "none",
        padding: "12px",
      }}
    >
      Shop Now
    </button>
  );

  return (
    <div className="heroBanner">
      <Splide
        options={{
          type: "loop",
          gap: "2rem",
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
        <SplideSlide
          style={{ position: "relative" }}
          onClick={() => handleRedirect("Popular")}
        >
          <OverlayButton />
          <img className="heroBannerBGImage" src={Two} />
        </SplideSlide>
        <SplideSlide onClick={() => handleRedirect("Chaman Urdu Khushkhati")}>
          <OverlayButton />
          <img className="heroBannerBGImage" src={One} />
        </SplideSlide>
        <SplideSlide onClick={() => handleRedirect("PlayWay Writing")}>
          <OverlayButton />
          <img className="heroBannerBGImage" src={Three} />
        </SplideSlide>
      </Splide>

      {/* Add your other components here */}
    </div>
  );
}
