import React, { useState } from 'react';
import "./Order.css";
import ReCAPTCHA from 'react-google-recaptcha';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleOrderNumberChange = (e) => setOrderNumber(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleCaptchaChange = (value) => setCaptchaVerified(!!value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!orderNumber || !email) {
      setError('Order number and email are required');
      return;
    }
    if (!captchaVerified) {
      setError('Please verify that you are not a robot');
      return;
    }

    try {
      const response = await fetch('/api/track-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderNumber, email }),
      });

      if (response.ok) {
        const data = await response.json();
        setOrderStatus(data);
        setError('');
      } else {
        setError('Invalid order number or email');
      }
    } catch (err) {
      setError('An error occurred while tracking the order');
    }
  };

  return (
    <div className='order'>
      <div className='orders1'>
      <h1>Track Your Order</h1>
      <form onSubmit={handleSubmit}>
        <div className="label">
          <label>Order Number:</label>
          <input
            type="text"
            value={orderNumber}
            onChange={handleOrderNumberChange}
            required
          />
        </div>
        <div>
          <label>Email ID:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <br></br>
        <div>
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleCaptchaChange}
          />
        </div>
        <button className='submitbutton' type="submit">Find Order</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {orderStatus && (
        <div>
          <h2>Order Status</h2>
          <p>{orderStatus.status}</p>
        </div>
      )}
      </div>
      <div className='orderstatus'>
        <h1>Sign In for Order Status</h1>
        <h4>Check the status, options, tracking and history for all of your orders</h4>
        <button className="submitbutton">Sign in</button>
        <p>Don’t have an account? Click here to register</p>
      </div>
    </div>
  );
};

export default TrackOrder;
