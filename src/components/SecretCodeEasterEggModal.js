// Modal.js
import React from "react";
import "./Modal.css";

function SecretCodeEasterEggModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <img
            className="modal-image"
            src="/shaqcat.gif"
            alt="funnt meme cat"
          ></img>
        </div>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default SecretCodeEasterEggModal;
