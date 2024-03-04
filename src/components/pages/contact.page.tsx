import React, { useState } from "react";

const Contact: React.FC = () => {
  const [sender, setSender] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("AWS_API_GATEWAY_URL:", import.meta.env.VITE_AWS_API_GATEWAY_URL);
    console.log("CLIENT_DOMAIN:", import.meta.env.VITE_CLIENT_DOMAIN);
    console.log("API_KEY:", import.meta.env.VITE_API_KEY);
    try {
      const response = await fetch(`${import.meta.env.VITE_AWS_API_GATEWAY_URL}/kxf-lambda-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Request-Headers": `${import.meta.env.VITE_CLIENT_DOMAIN}`,
          'x-api-key': `${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify({ sender, firstName, lastName, message }),
      });
      
      if (response.ok) {
        setSent(true);
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="page-container">
      <h1 className="title">Contact</h1>
      <form onSubmit={handleSubmit}>
        <p className="contact-form-description">Your message will be sent to info@kathyxuefund.org</p>
      
        <input
          placeholder="Your First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          placeholder="Your Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          placeholder="Your Email"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          required
        />
        <textarea
          value={message}
          placeholder="Type your message here..."
          onChange={(e) => setMessage(e.target.value)}
          rows={20}
          required
        />
        <button className="send-email-button" type="submit">Send</button>
        {sent && <p>Email sent successfully!</p>}
      </form>
    </div>
  );
};

export default Contact;