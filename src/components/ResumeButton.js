import { useState, useEffect } from "react";
import Modal from "react-modal";
import AboutModal from "./ResumeModal";
import "./Modal.css";

function ResumeButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    Modal.setAppElement("#root"); // Replace "#root" with the ID of your root element
  }, []);

  return (
    <div>
      <button onClick={() => openModal()}>Resume</button>
      <AboutModal isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  );
}

export default ResumeButton;
