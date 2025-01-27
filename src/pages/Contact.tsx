import BackButton from "../components/BackButton";
import React, { useRef, useState } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_1ebk6hg", "template_7if3vx5", form.current, {
        publicKey: "dj1-OwzGgxxIGop8A",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true); // Mark as submitted
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <BackButton />
      <div className="contact-form-container">
        <form className="contact-form" onSubmit={sendEmail} ref={form}>
          <div className="form-row">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
          ></textarea>
          <button
            className={
              isSubmitted ? "text submit-button" : "text un submitted-button"
            }
            type="submit"
            disabled={isSubmitted} // Disable the button if submitted
          >
            {isSubmitted ? "Sent" : "Submit"}{" "}
            {/* Change text based on submission state */}
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
