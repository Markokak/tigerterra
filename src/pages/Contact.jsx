import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/tigerterratransport",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/tigerterratransport/",
    icon: "ri-instagram-line",
  },
  {
    url: "https://x.com/TigerTerra2024?t=mJUY-SUHL2fa2ULq9x-9Eg&s=09",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }

    emailjs
      .sendForm(
        "service_bx9xvoe",
        "template_fo8fbp8",
        e.target,
        "IYgt12q1VotHYKbcv",
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          setStatus("Error sending message.");
        }
      );
  };

  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>
              <Form onSubmit={handleSubmit}>
                <FormGroup className="contact__form">
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Message"
                    className="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </FormGroup>
                <button className="contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
              {status && <p>{status}</p>}
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <div className="contact__info-item">
                  <p className="contact__info-label">Address:</p>
                  <p className="contact__info-value">30 Arayat St, Brgy. Malamig, Philippines</p>
                </div>
                <div className="contact__info-item">
                  <p className="contact__info-label">Phone:</p>
                  <p className="contact__info-value">09660613290</p>
                </div>
                <div className="contact__info-item">
                  <p className="contact__info-label">Email:</p>
                  <p className="contact__info-value">tigerterratranscorp@gmail.com</p>
                </div>
                <h6 className="fw-bold mt-4">Follow Us</h6>
                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <a
                      href={item.url}
                      key={index}
                      className="social__link-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={item.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col lg="12">
              <h6 className="fw-bold">Our Location</h6>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.3899571373436!2d121.04272237487226!3d14.57684178590674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9ae84c03c19%3A0xd875c06882a619e7!2sTiger%20Terra%20Transport%20Corporation!5e0!3m2!1sen!2sph!4v1730022291793!5m2!1sen!2sph"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
