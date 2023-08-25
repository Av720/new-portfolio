import React, { useState } from "react";
import "../Contact/contact.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [messageType, setMessageType] = useState("normal");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = {};

    if (formState.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (formState.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formState.email)
    ) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    if (formState.message.trim() === "") {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmitEmail = (e) => {
    e.preventDefault();

    if (validate()) {
      const serviceId = "service_6vkhi15";
      const templateId = "template_wi4k1p7";
      const userId = "h6sxEXgnE5YqOtlYX";

      emailjs
        .send(serviceId, templateId, formState, userId)
        .then((response) => {
          setConfirmationMessage("Email was successfully sent!");
          setMessageType("success");

          // Clear the form
          setFormState({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error("Email sending error:", error);
          setConfirmationMessage(
            "Error sending email. Please try again later."
          );
          setMessageType("error");
        });
    }
  };

  return (
    <div className="contact-me" id="contact-me">
      <div>
        <h3 className="contactme-text">CONTACT ME</h3>
      </div>
      <div>
        <p className="contact-text">
          Submit the form below in order to contact me
        </p>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmitEmail}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className="name-field"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="email-field"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Enter a message"
              rows="4"
              value={formState.message}
              onChange={handleChange}
              className="message-field"
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
        {confirmationMessage && (
          <p className={`confirmation-message message-${messageType}`}>
            {confirmationMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
