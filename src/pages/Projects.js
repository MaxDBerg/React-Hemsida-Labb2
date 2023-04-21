import React from "react";
import ProjectList from "../components/ProjectList";
import RepositoryList from "../components/RepositoryList";
import "../components/Modal.css";
import "./Projects.css";

class Projects extends React.Component {
  render() {
    return (
      <main>
        <section className="homeArticles">
          <div>
            <h1>My Solo Projects</h1>
            <p>Projects i have worked on alone</p>
            <ProjectList />
            <h1>My Team Projects</h1>
            <p>Projects i have worked on with a team</p>
            <RepositoryList />
          </div>
        </section>
      </main>
    );
  }
}

export default Projects;
