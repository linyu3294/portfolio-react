import React, { useEffect } from 'react';
import '../../style/error.toast.css';

interface ErrorToastProps {
  message: string;
  onClose: () => void;
}

const ErrorToast: React.FC<ErrorToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="error-toast">
      <div className="error-toast-content">
        <span className="error-icon">⚠️</span>
        <span className="error-message">{message}</span>
      </div>
    </div>
  );
};

export default ErrorToast;
