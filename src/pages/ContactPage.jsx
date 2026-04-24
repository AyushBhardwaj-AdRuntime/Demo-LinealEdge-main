import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';

function CardIcon({ type }) {
  if (type === 'location') {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 22C15.5 17.8 19 14.3 19 10A7 7 0 1 0 5 10C5 14.3 8.5 17.8 12 22Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="10" r="2.8" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6 4H10L11.5 7.5L9.5 9.2C10.6 11.5 12.5 13.4 14.8 14.5L16.5 12.5L20 14V18C20 19.1 19.1 20 18 20C10.8 20 4 13.2 4 6C4 4.9 4.9 4 6 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 11.5L20.6 3.7C21.3 3.4 22 4.1 21.7 4.8L13.9 22.4C13.5 23.2 12.3 23.1 12 22.3L9.6 15.6L2.9 13.2C2.1 12.9 2.1 11.8 3 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M21.5 4L9.6 15.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=385+Gurunanak+Pura%2C+Adarsh+Nagar%2C+Jaipur+302004';
  const phoneUrl = 'tel:+919828024449';
  const emailUrl = 'mailto:info@linealedge.com';

  const handleCardNavigation = (url, openInNewTab = false) => {
    if (openInNewTab) {
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }

    window.location.href = url;
  };

  const handleCardKeyDown = (event, onActivate) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate();
    }
  };

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <main className="page-content contactv2-page">
      <PageHeader
        title="Contact"
        description="Connect with our team to discuss your goals and start building a personalized financial roadmap."
      />

      <section className="contactv2-split-wrap">
        <div className="contactv2-container contactv2-split">
          <div className="contactv2-text-col">
            <span className="contactv2-label">Contact Us Form</span>
            <h2>We are Always Ready to Work With You</h2>
            <p className="contactv2-text">Ask about general information. Please send us a message.</p>

            <div className="contactv2-side-cards">
              <article
                className="contactv2-info-card contactv2-clickable-card"
                onClick={() => handleCardNavigation(mapUrl, true)}
                onKeyDown={(event) => handleCardKeyDown(event, () => handleCardNavigation(mapUrl, true))}
                role="button"
                tabIndex={0}
                aria-label="Open map for Lineal Edge office location"
              >
                <div className="contactv2-card-header">
                  <div className="contactv2-card-title-line">
                    <div className="contactv2-icon-box"><CardIcon type="location" /></div>
                    <h3>Visit us at:</h3>
                  </div>
                  <span className="contactv2-arrow"><ArrowIcon /></span>
                </div>
                <p>385 - Gurunanak Pura, Adarsh Nagar,<br />Jaipur-302004 (Raj.)</p>
              </article>

              <article
                className="contactv2-info-card contactv2-clickable-card"
                onClick={() => handleCardNavigation(phoneUrl)}
                onKeyDown={(event) => handleCardKeyDown(event, () => handleCardNavigation(phoneUrl))}
                role="button"
                tabIndex={0}
                aria-label="Call Lineal Edge"
              >
                <div className="contactv2-card-header">
                  <div className="contactv2-card-title-line">
                    <div className="contactv2-icon-box"><CardIcon type="phone" /></div>
                    <h3>Call us at:</h3>
                  </div>
                  <span className="contactv2-arrow"><ArrowIcon /></span>
                </div>
                <p>+91-9828024449</p>
              </article>

              <article
                className="contactv2-info-card contactv2-clickable-card"
                onClick={() => handleCardNavigation(emailUrl)}
                onKeyDown={(event) => handleCardKeyDown(event, () => handleCardNavigation(emailUrl))}
                role="button"
                tabIndex={0}
                aria-label="Send an email to Lineal Edge"
              >
                <div className="contactv2-card-header">
                  <div className="contactv2-card-title-line">
                    <div className="contactv2-icon-box"><CardIcon type="email" /></div>
                    <h3>Email us at:</h3>
                  </div>
                  <span className="contactv2-arrow"><ArrowIcon /></span>
                </div>
                <p>info@linealedge.com</p>
              </article>
            </div>
          </div>

          <div className="contactv2-form-shell">
            <div className="contactv2-form-header">
              <h3>Contact Form</h3>
              <span className="contactv2-plane-icon"><PlaneIcon /></span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contactv2-form-row">
                <div className="contactv2-input-group">
                  <label htmlFor="firstName">First name *</label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  />
                </div>
                <div className="contactv2-input-group">
                  <label htmlFor="lastName">Last name *</label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div className="contactv2-form-row">
                <div className="contactv2-input-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="contactv2-input-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="contactv2-input-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  placeholder="To better assist you, please describe how we can help..."
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button type="submit" className="contactv2-submit-btn arrow-hover-cta arrow-hover-light">
                <span className="arrow-hover-label">{sent ? 'Submitted Successfully' : 'Submit'}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
