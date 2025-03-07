import React from "react";
import { useLocation } from "react-router-dom";

type NotificationState = {
    influencePayForSale: boolean;
    currencyPayForSale: boolean;
    influencePayForCommission: boolean;
    currencyPayForCommission: boolean;
    afterSubmittingContact : boolean,
}

const Notification: React.FC = () => {
    const location = useLocation();

    const {
        influencePayForSale, 
        currencyPayForSale, 
        influencePayForCommission, 
        currencyPayForCommission,
        afterSubmittingContact,
    } = location.state as NotificationState 
    || {
        influencePayForSale: false,
        currencyPayForSale: false,
        influencePayForCommission: false,
        currencyPayForCommission: false,
        afterSubmittingContact: false,
    }

    return (
        <div className="notification-container">
                { (influencePayForSale || influencePayForCommission) &&
                    <>
                        <p>
                            Thank you for participating in this promotional art giveaway!
                        </p>
                        <p>
                            Once you are verified to be eligible, the artist will contact you through your preferred communication channel to ask for your mailing address.
                        </p>
                        <p>
                            The artist will contact you with additional details about the collaboration.
                        </p>
                        <p>
                            Cheers! 🥂
                        </p>
                    </>
                }    
                { currencyPayForCommission &&
                    <>
                        <p>
                            Thank you for submitting your commission!
                        </p>
                        <p>
                            The artist will contact you through your preferred communication channel to ask for more information.
                        </p>
                        <p>
                            Cheers! 🥂
                        </p>
                    </>
                }
                { currencyPayForSale &&
                    <>
                        <p>
                            Thank you for your purchase! 
                        </p>
                        <p>
                            Your receipt will be emailed to you shortly.
                        </p>
                        <p>
                            Allow 1-3 days for shipping arrangements.
                        </p>
                        <p>
                            Once the item is shipped, the artist will provide the tracking number.
                        </p>
                        <p>
                            Cheers! 🥂
                        </p>
                    </>
                }
                {afterSubmittingContact &&
                    <>
                        <p>
                            Thank you for your contacting the artist!
                        </p>
                        <p>
                            Please allow 1-2 days for the artist response.
                        </p>
                        <p>
                            Cheers! 🥂
                        </p>
                    </>
                }
            </div>
    );
};

export default Notification;
