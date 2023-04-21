import Modal from "react-modal";
import { Link } from "react-router-dom";

function ProjectModal({ project, isOpen, onClose }) {
  return (
    <Modal className={"modal"} isOpen={isOpen} onRequestClose={onClose}>
      <div className="modal-title">
        <h2>{project.name}</h2>
      </div>
      <div className="modal-content">
        <p>{project.description}</p>
        <Link to={project.html_url} target="_blank">
          Learn More!
        </Link>
        <button id="modalButton" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default ProjectModal;
