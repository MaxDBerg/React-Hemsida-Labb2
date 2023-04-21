import { useState, useEffect } from "react";
import "./Modal.css";
import Modal from "react-modal";
import ProjectModal from "./ProjectsModal";

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal(project) {
    setSelectedProject(project);
    setModalIsOpen(true);
  }

  function closeModal() {
    setSelectedProject(null);
    setModalIsOpen(false);
  }

  useEffect(() => {
    Modal.setAppElement("#root"); // Replace "#root" with the ID of your root element
  }, []);

  useEffect(() => {
    const url = `https://api.github.com/users/MaxDBerg/repos?type=owner`;
    const options = {
      headers: {
        Authorization: `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`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  if (!Array.isArray(projects)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button onClick={() => openModal(project)}>{project.name}</button>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={modalIsOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default ProjectList;
