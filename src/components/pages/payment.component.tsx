import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorToast from "./error.toast";

export type CommissionState = {
  isCommission: true;
  isSale: false;
  tierLevel: string;
  size: string;
  email: string | undefined;
  subjectTheme: string;
  style: string;
  medium: string;
  background: string;
  deadline: string | undefined;
  revisionAllowed: string;
  preferredContactMethod: string;
  artWorkUse: string;
  socialMediaHandle: string;
}

export type SaleState = {
  isCommission: false;
  isSale: true;
  title: string;
  description: string;
  price: string;
  image: string;
  medium: string;
}

export type PaymentState = CommissionState | SaleState;

const Payment: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "social" | undefined>(undefined);
  const [instagramHandle, setInstagramHandle] = useState<string | undefined> (undefined);
  const [instagramFollowersCount, setinstagramFollowersCount] = useState<number | undefined> (undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const location = useLocation();
  const state = location.state as PaymentState || {isCommission: false, isSale: false};
  
  // Type guard to check if state is CommissionState
  const isCommissionState = (state: PaymentState): state is CommissionState => {
    return state.isCommission === true;
  };

  // Type guard to check if state is SaleState
  const isSaleState = (state: PaymentState): state is SaleState => {
    return state.isSale === true;
  };

  const influencePayForSale = isSaleState(state) && paymentMethod === 'social';
  const currencyPayForSale = isSaleState(state) && paymentMethod === 'stripe';
  const influencePayForCommission = isCommissionState(state) && paymentMethod === 'social';
  const currencyPayForCommission = isCommissionState(state) && paymentMethod === 'stripe';
  
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

  useEffect(()=>{
    if(!state.isCommission && !state.isSale) {
      navigate('/')
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      if (isCommissionState(state)) {
        await handleSubmitCommission(e);
      } else if (isSaleState(state)) {
        await handleSubmitSale(e);
      }
      navigateToNotificationPage();
    } catch (error) {
      console.error("Error submitting payment:", error);
      setError("Failed to submit your request. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleSubmitCommission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isCommissionState(state)) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_AWS_API_GATEWAY_URL}/commission`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Request-Headers": `${import.meta.env.VITE_CLIENT_DOMAIN}`,
          "x-api-key": `${import.meta.env.VITE_PORTFOLIO_API_KEY}`,
        },
        body: JSON.stringify({
          tierLevel: state.tierLevel,
          size: state.size,
          email: state.email,
          subjectTheme: state.subjectTheme,
          style: state.style,
          medium: state.medium,
          background: state.background,
          deadline: state.deadline,
          revisionAllowed: state.revisionAllowed,
          preferredContactMethod: state.preferredContactMethod,
          artWorkUse: state.artWorkUse,
          socialMediaHandle: state.socialMediaHandle,
          paymentMethod,
          instagramHandle,
          instagramFollowersCount
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to send commission request");
      }
      console.log("Commission request sent successfully");
    } catch (error) {
      console.error("Error sending commission request:", error);
      throw error;
    }
  };

  const handleSubmitSale = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSaleState(state)) return;

    try {
      const response = await fetch(`${import.meta.env.VITE_AWS_API_GATEWAY_URL}/sales`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Request-Headers": `${import.meta.env.VITE_CLIENT_DOMAIN}`,
          "x-api-key": `${import.meta.env.VITE_PORTFOLIO_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          medium: state.medium,
          title: state.title,
          description: state.description,
          price: state.price,
          image: state.image,
          paymentMethod,
          instagramHandle: paymentMethod === 'social' ? instagramHandle : undefined,
          followersCount: paymentMethod === 'social' ? instagramFollowersCount : undefined
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to send sale request");
      }
      console.log("Sale request sent successfully");
    } catch (error) {
      console.error("Error sending sale request:", error);
      throw error;
    }
  };

  return (
    <div className="page-container centered-container">
      {error && <ErrorToast message={error} onClose={() => setError(null)} />}
      <div className="form-container">
        <form className="payment-form" onSubmit={handleSubmit}>
          <h2>Payment Method</h2>
          {isSaleState(state) && (
            <div className="sale-details">
              <h3>{state.title}</h3>
              <p>{state.description}</p>
              <p>Price: {state.price}</p>
              <label>Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}
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
          {
            paymentMethod === "social" && (
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
          {
            paymentMethod && <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          }
        </form>
      </div>
    </div>
  );
};

export default Payment;
