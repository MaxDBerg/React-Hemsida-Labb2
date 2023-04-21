import { useState, useEffect } from "react";
import SecretCodeEasterEggModal from "./SecretCodeEasterEggModal";

function SecretCodeEgg() {
  const [keySequence, setKeySequence] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      setKeySequence((prevSequence) => [...prevSequence, event.key]);
    }

    function checkSecretCode() {
      const secretCode = ["1", "3", "3", "7"];
      const sequenceString = keySequence.join("");
      if (sequenceString === secretCode.join("")) {
        openModal();
      }
      setKeySequence([]);
    }

    document.addEventListener("keydown", handleKeyDown);
    if (keySequence.length === 4) {
      checkSecretCode();
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keySequence]);

  useEffect(() => {
    if (modalIsOpen) {
      openModal();
    }
  }, [modalIsOpen]);

  return <SecretCodeEasterEggModal isOpen={modalIsOpen} onClose={closeModal} />;
}

export default SecretCodeEgg;
