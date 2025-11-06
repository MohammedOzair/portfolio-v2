// Contact.tsx
import { Container, FullWidthWrapper } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { useState, ChangeEvent, FormEvent } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Check required fields
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please provide your name, email, and a message.");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    fetch("https://formsubmit.co/ozairmohiuddin632@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus("Something went wrong. Please try again.");
        }
      })
      .catch(() => setStatus("Failed to send. Please try again."));
  }

  return (
    <FullWidthWrapper>
      <Container id="contact">
        <header>
          <h1>Contact</h1>
        </header>

        <div className="contacts">
          <div>
            <a href="mailto:ozairmohiuddin632@gmail.com">
              <img src={emailIcon} alt="Email" />
            </a>
            <a href="mailto:ozairmohiuddin632@gmail.com">
              ozairmohiuddin632@gmail.com
            </a>
          </div>
          <div>
            <a href="tel:+966564960508">
              <img src={phoneIcon} alt="Phone No" />
            </a>
            <a href="tel:+966564960508">+966564960508</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Send Message</button>
          {status && <p className="status">{status}</p>}
        </form>
      </Container>
    </FullWidthWrapper>
  );
}
