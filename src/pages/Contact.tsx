import BackButton from "../components/BackButton";
import React, { useRef } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log("Form submitted:", formData);
  //   alert("Message sent!");
  //   setFormData({ name: "", email: "", message: "" }); // Reset form
  // };
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("service_57ytlb7", "template_1j7q0e6", form.current!, {
        publicKey: "B3KNkCxnMyLbrJxrG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
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
          <button className="text un submit-button" type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
