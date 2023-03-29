import React, { useEffect } from "react";
import Modal from "react-modal";
import Two from "../MainCaraousel/discount.png";
import PopupBg from "../MainCaraousel/popupBackground.jpg";

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "centre",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    textAlign: "center",
    borderRadius: "10px",
    backgroundColor: "#232222",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    color: "white",
    overflow: "hidden",
    animation: "bounce 1s",
    transformOrigin: "center",
  },
};

function Popup({ isOpen, handleOpen }) {
  let subtitle;

  useEffect(() => {
    Modal.setAppElement(document.getElementById("root"));
  }, []);

  function afterOpenModal() {
    subtitle.style.color = "#ffffff";
  }

  function closeModal() {
    handleOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Book Sale Modal"
      >
        {/* <h2 style={{ margin: "10px 0  2rem 0" }}>Book Sale</h2>
        <p>
          Don't miss our amazing book sale! Save up to 50% on selected titles.
        </p> */}
        <img
          onClick={closeModal}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "30px",
            height: "30px",
            zIndex: 10,
            filter: "invert(1)",
            cursor: "pointer",
          }}
          src={"https://cdn-icons-png.flaticon.com/512/660/660252.png"}
          alt=""
        />
        <img
          style={{ position: "absolute", top: "0", left: "0" }}
          src={
            "https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_960_720.png"
          }
          alt=""
        />
        <img
          style={{
            margin: "2rem 0",
            objectFit: "contain",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "80%",
            transform: "translate(-50%, -50%)",
          }}
          src={Two}
          alt="Book Sale"
          width="50%"
        />
        {/* <button
          onClick={closeModal}
          style={{ marginTop: "20px", borderRadius: "5px", padding: "10px" }}
        >
          Close
        </button> */}
      </Modal>
    </div>
  );
}

export default Popup;
