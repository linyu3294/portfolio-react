import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type PaymentState = {
  isCommission: false;
  isSale: false;
}

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "social" | undefined>(undefined);
  const [instagramHandle, setInstagramHandle] = useState<string | undefined> (undefined);
  const [instagramFollowersCount, setinstagramFollowersCount] = useState<number | undefined> (undefined);

  const location = useLocation();
  const { isCommission, isSale } = location.state as PaymentState || {isCommission: false, isSale: false}
  const influencePayForSale = isSale && paymentMethod === 'social';
  const currencyPayForSale = isSale && paymentMethod === 'stripe';
  const influencePayForCommission = isCommission && paymentMethod === 'social';
  const currencyPayForCommission = isCommission && paymentMethod === 'stripe';
  const notificationState = {
    influencePayForSale, 
    currencyPayForSale, 
    influencePayForCommission, 
    currencyPayForCommission,
    afterSubmittingContact : false,
  }

  const navigate = useNavigate();

  const navigateToNotificationPage = () => {
    navigate("/notification", {state: notificationState});
  }

  const sendInfluencerCommission = () => {
    // TODO: Send an email to notify the artist about this influencer commission
    navigate("/notification", {state: notificationState});
  }

  useEffect(()=>{
    if(!isCommission && !isSale) {
      navigate('/')
    }
  }, [])

  return (
    <div className="page-container centered-container">
      <div className="form-container">
        <form className="payment-form">
          <h2>Payment Method</h2>
          <div className="payment-options">
            <div
              className={`payment-card ${paymentMethod === "stripe" ? "selected" : undefined}`}
              onClick={() => setPaymentMethod("stripe")}
            >
              Stripe
            </div>
            <div
              className={`payment-card ${paymentMethod === "social" ? "selected" : undefined}`}
              onClick={() => setPaymentMethod("social")}
            >
              Influence
            </div>
          </div>
          {
            paymentMethod === "stripe" && (
            <div className="social-steps">
                <label>You won't be billed for this submission. This will just let the artist know about how you like to pay after you recieve the art work.</label>
            </div>
          )}
          {paymentMethod === "social" && (
            <div className="social-steps">
                <h4>If you have 200+ followers, you are eligible to participate.</h4>
                <label>Handle</label>
                <input 
                  type="text" 
                  value={instagramHandle}
                  onChange={(e) => setInstagramHandle(e.target.value)}
                  required/>
                <label>Followers Count</label>
                <input 
                  type="number" 
                  value={instagramFollowersCount}
                  onChange={(e) => setinstagramFollowersCount(e.target.valueAsNumber)}
                  required/>
            </div>
          )}
          {paymentMethod === "stripe" &&  <button 
            type="submit" 
            onClick={navigateToNotificationPage} 
            className="submit-btn">
              Submit
            </button>}
          {paymentMethod === "social" &&  <button 
            type="submit" 
            onClick={sendInfluencerCommission} 
            className="submit-btn">
              Next
          </button>}
        </form>
      </div>
    </div>
  );
};

export default Payment;
