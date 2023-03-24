import React, { useEffect } from "react";
import Modal from "react-modal";
import Two from "../Images/two.jpeg";

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
    width: "80%",
    textAlign: "center",
    borderRadius: "10px",
    backgroundColor: "#232222",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    color: "white",
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
        <h2 style={{ margin: "10px 0  2rem 0" }}>Book Sale</h2>
        <p>
          Don't miss our amazing book sale! Save up to 50% on selected titles.
        </p>
        <img
          style={{ margin: "2rem 0", height: "100%", objectFit: "contain" }}
          src={Two}
          alt="Book Sale"
          width="50%"
        />
        <button
          onClick={closeModal}
          style={{ marginTop: "20px", borderRadius: "5px", padding: "10px" }}
        >
          Close
        </button>
      </Modal>
    </div>
  );
}

export default Popup;
