import { Link } from "react-router-dom";
import "../styles/main.css";

const pages = [
  { name: "resume", path: "/resume", external: false },
  { name: "samples", path: "/samples", external: false },
  {
    name: "instagram",
    path: "https://www.instagram.com/oscarcompo/",
    external: true,
  },
  {
    name: "linkedin",
    path: "https://www.linkedin.com/in/oscar-compo-b4a48a296/",
    external: true,
  },
  { name: "contact", path: "/contact", external: false },
];

function Main() {
  return (
    <>
      <div className="main-container">
        <h1>Oscar Compo</h1>
        <p className="title">producer, engineer, songwriting</p>
        <div className="buttons-container">
          {pages.map(({ name, path, external }, index) => (
            <div key={index}>
              {external ? (
                <a href={path} target="_blank" rel="noopener noreferrer">
                  <button className="text">
                    <span className="un">{name}</span>
                  </button>
                </a>
              ) : (
                <Link to={path}>
                  <button className="text">
                    <span className="un">{name}</span>
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
