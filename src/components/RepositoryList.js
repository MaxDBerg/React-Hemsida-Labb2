import { useState, useEffect } from "react";
import Modal from "react-modal";

import RepositoryModal from "./RepositoryModal";

function RepositoryList() {
  const [repositories, setRepositories] = useState([]);
  const [selectedRepository, setSelectedRepository] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal(repository) {
    setSelectedRepository(repository);
    setModalIsOpen(true);
  }

  function closeModal() {
    setSelectedRepository(null);
    setModalIsOpen(false);
  }
  useEffect(() => {
    Modal.setAppElement("#root"); // Replace "#root" with the ID of your root element
  }, []);

  useEffect(() => {
    const url = "https://api.github.com/users/MaxDBerg/repos?type=owner,member";
    const options = {
      headers: {
        Authorization: `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`,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  if (!Array.isArray(repositories)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {repositories.map((repository) => (
          <li key={repository.id}>
            <button onClick={() => openModal(repository)}>
              {repository.name}
            </button>
          </li>
        ))}
      </ul>
      {selectedRepository && (
        <RepositoryModal
          repository={selectedRepository}
          isOpen={modalIsOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default RepositoryList;
