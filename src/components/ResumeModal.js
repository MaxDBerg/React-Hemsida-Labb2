import Modal from "react-modal";
import ResumeData from "../ResumeData.json";

function AboutModal({ isOpen, onClose }) {
  return (
    <Modal className={"modal"} isOpen={isOpen} onRequestClose={onClose}>
      <div className="modal-title">
        <h2>Max Dahlberg's Resume</h2>
      </div>
      <div className="modal-content">
        <div>
          <h3>Personlig information</h3>
          <ul>
            <li>Namn: {ResumeData.name}</li>
            <li>
              Födelsedatum: {ResumeData.resume.personal_information.birthdate}
            </li>
          </ul>
          <h3>Egenskaper</h3>
          <ul>
            {ResumeData.resume.skills.computer_skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
            <li>{ResumeData.resume.skills.language}</li>
          </ul>
          <h3>Tidigare anställningar</h3>
          <ul>
            {ResumeData.resume.previous_employments.map((employment, index) => (
              <li key={index}>
                {employment.company_name} - {employment.job_title} -{" "}
                {employment.duration}
              </li>
            ))}
          </ul>
          <h3>Utbildning</h3>
          <ul>
            {ResumeData.resume.education.map((education, index) => (
              <li key={index}>
                {education.school_name} - {education.field_of_study} -{" "}
                {education.duration}
              </li>
            ))}
          </ul>
          <h3>Övriga färdigheter</h3>
          <ul>
            <li>{ResumeData.resume.other_skills.experience}</li>
            <li>{ResumeData.resume.other_skills.understanding}</li>
            <li>{ResumeData.resume.other_skills.teamwork}</li>
          </ul>
          <h3>Referenser</h3>
          <p>{ResumeData.resume.references}</p>
        </div>
        <button id="modalButton" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}

export default AboutModal;
