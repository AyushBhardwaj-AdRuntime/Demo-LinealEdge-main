import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubscribeBand() {
  const navigate = useNavigate();

  return (
    <section className="services-newsletter-band">
      <div className="services-container">
        <h3 className="services-newsletter-title">Stay Ahead. Subscribe for Expert Insights.</h3>
        <form
          className="services-newsletter-form"
          onSubmit={(event) => {
            event.preventDefault();
            navigate('/contact');
          }}
        >
          <input
            type="email"
            className="services-newsletter-input"
            placeholder="Email"
            aria-label="Email"
          />
          <button type="submit" className="services-newsletter-button arrow-hover-cta arrow-hover-light">
            <span className="arrow-hover-label">Subscribe</span>
          </button>
          <p className="services-newsletter-copy">
            You can unsubscribe at any time using the link in the footer of our emails. View our Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
}
