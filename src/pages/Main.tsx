import { Link } from "react-router-dom";
import "../styles/main.css";
import Work from "./Work.tsx";

const pages = [
  {
    name: "instagram",
    path: "https://www.instagram.com/oscarcompo/",
    external: true,
  },

  { name: "contact", path: "/contact", external: false },
];

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="name-container">
          <h1 className="name not-bold">Oscar Compo</h1>
          <p className="title">producer, engineer, songwriter</p>
        </div>
        <h2 className="not-bold selected-work">selected work:</h2>
        <Work />
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
