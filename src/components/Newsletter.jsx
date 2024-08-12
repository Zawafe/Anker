import React from 'react'
import '../Styles/Newsletter.css'
import { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  
// email authentication
  if (!email || !email.includes('@')) {
    setError('Please enter a valid email address.');
    return;
  }
  const EmailSubscription = `Subscribing ${email} to newsletter`;

  // form reset and success confirmation
  setEmail('');
  setSubscribed(true);
  setError('');
}
  return (
    <div className='NewsLetter'>
      <div className='NewsLetter-inner'>
        <h2>Join Our Community for Exclusive Savings!</h2>
        <h1>Get an Exclusive 10% Off Your First Purchase</h1>
        {subscribed ? (
          <p>Thank you for subscribing!</p>) : (
          <form onSubmit={ handleSubmit }>
            <input className='EmailInput' style={{ border: 'none' }} type="email" placeholder="Enter your email address here" value={email} onChange={handleInputChange}/>
            <button className='NewsLetterBtn' type="submit">Subscribe</button>
          </form>
        )}
      </div>
      <div className='checkbox'>
      <p><input type="checkbox" name="" id="" />I agree to the Terms of Service and Privacy Policy</p>
      </div>

    </div>
  )
}
export default NewsLetter