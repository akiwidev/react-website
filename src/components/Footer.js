import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">Join the Wild newsletter to recieve our best vacation deals.</p>
        <p className="footer-subscription-text">You can unsubscribe at any time.</p>
        <p className="input-area">
          <form action="">
            <input type="email" name= "email" placeholder="Your email" className="footer-input" />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
