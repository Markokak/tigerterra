import React, { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import emailjs from "emailjs-com"; 

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    setLoading(true);

    const emailData = {
      full_name: `${firstName} ${lastName}`, 
      email: email,
      phone: phone,
      message: message,
    };

    emailjs
      .send(
        "service_bx9xvoe", 
        "template_p65dx3c", 
        emailData,
        "IYgt12q1VotHYKbcv", 
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setStatusMessage("Message sent successfully!");
          // Clear the form fields
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.log("Email sending failed:", error);
          setStatusMessage("Failed to send message. Please try again."); // Error message
        }
      )
      .finally(() => {
        setLoading(false); 
      });
  };

  return (
    <Form onSubmit={submitHandler}>
      <div className="name-fields">
        <FormGroup className="booking__form d-inline-block me-2">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-2">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
      </div>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          className="textarea"
          placeholder="Write your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </FormGroup>

      <button type="submit" className="booking__btn" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* Show success or error message */}
      {statusMessage && (
        <div className={`status-message ${statusMessage.includes("success") ? "success" : "error"}`}>
          {statusMessage}
        </div>
      )}
    </Form>
  );
};

export default BookingForm;
