import { validateEmail } from "../../utils/helpers";
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email) || !name) {
      setError("Email or Name invalid!");
      return;
    }

    if (!setMessage(message)) {
      setError("Message is required!");
      return;
    }

    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <section className="contact">
      <div className="flex-row">
        <h2>Contact</h2>
      </div>

      <div className="contact-form">
        <div>
          <form className="form">
            <label htmlFor="contact-name">Name:</label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            <label htmlFor="contact-email">Email:</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            <label htmlFor="contact-message">Message:</label>
            <input
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />

            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
        {error && (
          <div>
            <p className="error-message">{error}</p>
          </div>
        )}
      </div>
    </section>
  );
}
