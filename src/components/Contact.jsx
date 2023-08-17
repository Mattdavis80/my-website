import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_znzd5qg",
        "template_uqjegiw",
        form.current,
        "gbHYtswdX1kHUtqs8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsEmailSent(true); // Set the email sent state to true
          setTimeout(() => {
            setIsEmailSent(false); // Reset the email sent state after 3 seconds
          }, 3000);
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {isEmailSent && (
        <div className={`email-sent-message ${isEmailSent ? "active" : ""}`}>
          Thanks for reaching out!
        </div>
      )}
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" required />
        <label>Email</label>
        <input type="email" name="user_email" required />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default Contact;
