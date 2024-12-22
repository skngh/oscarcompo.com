import "../styles/backButton.css";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <>
      <Link to="/">
        <button className="text back-button">
          <span className="un">back</span>
        </button>
      </Link>
    </>
  );
};

export default BackButton;
