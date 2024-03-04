// Donate.tsx
import React, { Fragment, useState } from "react";
import "../../style/loading-icon.css";

const Donate: React.FC = () => {
  const [customAmount, setCustomAmount] = useState<number | null>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters
    const value = e.target.value.replace(/[^\d.]/g, ''); 
    // Allow only digits and up to two decimal places
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value === '' ? null : parseFloat(value));
    }
    setSelectedAmount(null);
  };


  const handleCardClick = (amount: number) => {
    setSelectedAmount((prevAmount) => (prevAmount === amount ? null : amount));
    setCustomAmount(null); // Clear custom amount when a card is selected
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    // Handle submit logic
    setLoading(true);
    const dollarAmount = (selectedAmount || customAmount)! * 100
    try {
      const response = await fetch(`${import.meta.env.VITE_AWS_API_GATEWAY_URL}/kxf-lambda-donate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Request-Headers": `${import.meta.env.VITE_CLIENT_DOMAIN}`,
          'x-api-key': `${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify({ price: dollarAmount.toString(), image: 'https://images.unsplash.com/photo-1708348244831-07e906ded4ae?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}),
      });
      
      if (response) {
        if (response.ok) {
          const { url } = await response.json();
            window.location.href = url; // Replace with your external URL
        }
      } else {
        console.error('Failed to created checkout session. No response is returned.');
      }
    } catch (error) {
      console.error('Transaction Error:', error);
    } finally {
      setLoading(false)
    }
  };


  return (
    <Fragment>
      {loading && 
      <div className="page-container">
        <div className="ring">Loading
          <span></span>
        </div> 
      </div>
      }
      {!loading &&
        <div className="page-container">
        <h1 className="title">Donate</h1>
          <div className="column">
            <div className="section-title">Pay with Card</div>
            <div className="donation-grid">
              <div
                className={`donation-card ${selectedAmount === 10 ? "selected" : ""}`}
                onClick={() => handleCardClick(10)}
              >
                <div className="donation-label">$10</div>
              </div>
              <div
                className={`donation-card ${selectedAmount === 15 ? "selected" : ""}`}
                onClick={() => handleCardClick(15)}
              >
                <div className="donation-label">$15</div>
              </div>
              <div
                className={`donation-card ${selectedAmount === 25 ? "selected" : ""}`}
                onClick={() => handleCardClick(25)}
              >
                <div className="donation-label">$25</div>
              </div>
            </div>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder="Enter custom dollar amount"
                value={customAmount === null ? '' : customAmount}
                onChange={handleCustomAmountChange}
                className="custom-amount"
              />
            <button type="button" className="payment-button" onClick={handleSubmit}>
              Card
            </button>
          </div>
        </div>
      }
    </Fragment>
  );
};

export default Donate;