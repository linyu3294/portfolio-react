import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorToast from "./error.toast";

const Contact: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [sender, setSender] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      const response = await fetch(`${import.meta.env.VITE_AWS_API_GATEWAY_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Request-Headers": `${import.meta.env.VITE_CLIENT_DOMAIN}`,
          "x-api-key": `${import.meta.env.VITE_PORTFOLIO_API_KEY}`,
        },
        body: JSON.stringify({ firstName, lastName, sender, message }),
      });
      if (response.ok) {
        console.log("Message sent successfully");
      } else {
        console.error("Failed to send message");
      }
      setFirstName("");
      setLastName("");
      setSender("");
      setMessage("");
  };

  const sendAndNotify = async(e: React.FormEvent<HTMLFormElement>) =>{
    const notificationState = {
      influencePayForSale: false, 
      currencyPayForSale: false, 
      influencePayForCommission: false, 
      currencyPayForCommission: false,
      afterSubmittingContact : true,
    }
    try{
      await handleSubmit(e);
      navigate("/notification",  {state: notificationState})
    } catch (error) {
      console.error("Error submitting payment:", error);
      setError("Failed to submit your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="page-container centered-container">
      <div className="form-container">
        <form className="commission-form" onSubmit={sendAndNotify}>
          {error && <ErrorToast message={error} onClose={() => setError(null)} />}
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button 
            className="submit-btn" 
            type="submit"
            disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;