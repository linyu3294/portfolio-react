import { useState } from "react";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "social" | undefined>(undefined);

  return (
    <div className="page-container">
      <div className="form-container">
        <form className="payment-form">

          <h2>Payment Method</h2>

          <div className="payment-options">
            <div
              className={`payment-card ${paymentMethod === "card" ? "selected" : undefined}`}
              onClick={() => setPaymentMethod("card")}
            >
              Debit / Credit
            </div>
            <div
              className={`payment-card ${paymentMethod === "social" ? "selected" : undefined}`}
              onClick={() => setPaymentMethod("social")}
            >
              Influence
            </div>
          </div>

          {paymentMethod === "card" && (
            <div className="social-steps">
                <label>1. Choosing this option will not bill</label>
            </div>
          )}

          {paymentMethod === "social" && (
            <div className="social-steps">
                <label>1. Verify Account</label>
                <label>2. Receive Artist’s Work</label>
                <label>3. Share Artist’s Work On Social Media</label>
            </div>
          )}

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
