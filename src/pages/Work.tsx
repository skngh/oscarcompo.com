import React from "react";
import { useEffect, useState } from "react";

import "../styles/samples.css";

const images = import.meta.glob("../assets/sampleImages/*.jpg", {
  eager: true,
});
const imageArray = Object.values(images).map(
  (img) => (img as { default: string }).default
);

const SamplesGrid: React.FC = () => {
  const [links, setLinks] = useState<string[]>([]);

  useEffect(() => {
    fetch("/sampleLinks.txt") // Adjust path if needed
      .then((response) => response.text())
      .then((text) => {
        const parsedLinks = text
          .split("\n")
          .map((line) => line.replace(/^\d+\. /, "").trim())
          .filter((link) => link);
        setLinks(parsedLinks);
      })
      .catch((error) => console.error("Error fetching links:", error));
  }, []);
  return (
    <>
      <div className="grid-container">
        <div className="grid">
          {links.map((link, index) => (
            <div key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={imageArray[index]} className="un grid-item" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SamplesGrid;
