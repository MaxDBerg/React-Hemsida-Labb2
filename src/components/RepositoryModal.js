import Modal from "react-modal";
import { Link } from "react-router-dom";

function RepositoryModal({ repository, isOpen, onClose }) {
  return (
    <Modal className={"modal"} isOpen={isOpen} onRequestClose={onClose}>
      <div className="modal-title">
        <h2>{repository.name}</h2>
      </div>
      <div className="modal-content">
        <p>{repository.description}</p>
        <button id="modalButton" onClick={onClose}>
          Close
        </button>
        <Link to={repository.html_url} target="_blank">
          Learn More!
        </Link>
      </div>
    </Modal>
  );
}

export default RepositoryModal;
