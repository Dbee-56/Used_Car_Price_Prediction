import React from "react";
import ReactDOM from "react-dom";
import "../components/body.css";

const MyModal = ({ closeModal, price, user }) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h2>Results 🚘</h2>
        <p>
          {" "}
          Ummm...🤔🤔
          <br />
          Best deal for your <b>{user["Company_name"]}</b> 🚗 is <br /> <br />{" "}
          <h2>Rs {price} lakhs</h2>
        </p>
        <button onClick={closeModal}>Ok</button>
      </div>
    </>,
    document.querySelector(".myPortalModalDiv")
  );
};

export default MyModal;
