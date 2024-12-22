import "../styles/resume.css";
import BackButton from "../components/BackButton";

const Resume = () => {
  return (
    <>
      <BackButton />
      <div className="pdf-container">
        <iframe className="pdf" src="./resume.pdf"></iframe>
        <a
          href="./resume.pdf"
          target="_blank"
          className="download-text text un"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>
    </>
  );
};

export default Resume;
