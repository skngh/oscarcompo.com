import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/cursor.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant] = useState("default");

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseEnter = () => {
      cursor.classList.add("hover"); // Add the hover class
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("hover"); // Remove the hover class
    };

    const handleMouseDown = () => {
      cursor.classList.remove("hover"); // Ensure hover is removed on click
    };

    const attachListeners = () => {
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.addEventListener("mouseenter", handleMouseEnter);
        button.addEventListener("mouseleave", handleMouseLeave);
        button.addEventListener("mousedown", handleMouseDown);
      });
    };

    // Add mousemove listener for cursor position
    window.addEventListener("mousemove", mouseMove);

    // Attach listeners to existing buttons
    attachListeners();

    // Observe DOM changes for new buttons
    const observer = new MutationObserver(() => {
      attachListeners(); // Reattach listeners when DOM changes
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      // Cleanup on unmount
      window.removeEventListener("mousemove", mouseMove);
      observer.disconnect(); // Stop observing DOM changes
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("mousedown", handleMouseDown);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default Cursor;
