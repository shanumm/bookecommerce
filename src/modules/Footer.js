import React from "react";
import "./Styles/footer.css";
import NDLogo from "../Images/NDLogo.png";

const FooterTop = () => (
  <div className="footerTop">
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828754.png"
        alt=""
      />{" "}
      Lorem, ipsum.
    </div>
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828754.png"
        alt=""
      />{" "}
      Lorem, ipsum.
    </div>
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828754.png"
        alt=""
      />{" "}
      Lorem, ipsum.
    </div>
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828754.png"
        alt=""
      />{" "}
      Lorem, ipsum.
    </div>
    <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/1828/1828754.png"
        alt=""
      />{" "}
      Lorem, ipsum.
    </div>
  </div>
);

export default function Footer() {
  return (
    <div className="footer">
      <FooterTop />
      <div className="footerContent">
        <div className="footerlogoImg">
          <img src={NDLogo} alt="" />
        </div>
        <div className="footerLinks">
          <div>Heading</div>
          <div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
          </div>
        </div>
        <div className="footerLinks">
          <div>Heading</div>
          <div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
          </div>
        </div>
        <div className="footerLinks">
          <div>Heading</div>
          <div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
          </div>
        </div>
        <div className="footerLinks">
          <div>Heading</div>
          <div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
          </div>
        </div>
        <div className="footerLinks">
          <div>Heading</div>
          <div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
            <div>Menu</div>
          </div>
        </div>
      </div>
    </div>
  );
}
