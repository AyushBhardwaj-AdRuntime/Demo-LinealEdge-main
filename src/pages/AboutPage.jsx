import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import GenerationsTimeline from '../components/GenerationsTimeline';

const highlights = [
  {
    title: 'Higher return on investment',
    desc: 'We help founders make sharper capital decisions through strategic planning and practical operating models.',
  },
  {
    title: 'Greater stakeholder value',
    desc: 'We align leadership, operations, and delivery so growth creates measurable value across the business.',
  },
];

const team = [
  { name: 'Johnatan Moralle', role: 'Founder', image: 'https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&w=900&q=80' },
  { name: 'Daniel Brila', role: 'President', image: 'https://images.unsplash.com/photo-1573497019707-1c04de26e58c?auto=format&fit=crop&w=900&q=80' },
  { name: 'Rebeca Johnson', role: 'Senior Tax Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80' },
];

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);


  return (
    <main className="page-content">
      <PageHeader
        title="About Us"
        // description="Learn who we are, what we stand for, and how we guide clients with clarity and long-term focus."
      />

      {/* Who We Are section removed as requested */}

      {/* Our Mission section removed as requested */}

      <section className="aboutx-shell aboutx-tradition">
        <div className="aboutx-grid aboutx-grid-top">
          <div className="aboutx-architecture-wrap">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=80"
              alt="Modern architecture representing strong foundations"
              className="aboutx-architecture-image"
            />
            <div className="aboutx-accent-block">
              <div className="aboutx-accent-top">
                <span className="aboutx-accent-brand">Legacy Personal Finance Solutions </span>
                <div className="aboutx-accent-big">50+</div>
                <p className="aboutx-accent-desc"> Years of Trust</p>
              </div>
              <Link to="/contact" className="aboutx-accent-btn arrow-hover-cta arrow-hover-light"><span className="arrow-hover-label">Contact Us</span></Link>
            </div>
          </div>

          <div className="aboutx-copy-col">
            <span className="aboutx-tag">Company With Traditions</span>
            <h2 className="aboutx-title-lg">Building on Tradition, Driving Innovation</h2>
            <p className="aboutx-text"> Lineal Edge Private Limited is built on over five decades of financial stewardship, guiding families across generations with discipline, clarity, and trust. What began with instilling the fundamentals of saving has evolved into a comprehensive approach to personal finance.
</p>
            <p className="aboutx-text">Today, we combine generational wisdom with modern financial strategies to help individuals and families preserve, protect, and grow their wealth with confidence. Our focus is not just on managing portfolios, but on building lasting financial legacies that stand the test of time
.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="aboutx-shell aboutx-missionvision">
        <div className="missionvision-row">
          <div className="missionvision-box">
            <h3 className="missionvision-heading">Our Mission:</h3>
            <p>
              To help individuals and families preserve, protect, and grow their wealth through disciplined, personalized financial strategies combining generational wisdom with modern financial solutions.
            </p>
          </div>
          <div className="missionvision-box">
            <h3 className="missionvision-heading">Our Vision:</h3>
            <p>
              To redefine wealth management as a generational journey, built on trust, clarity, and long-term thinking.
            </p>
          </div>
        </div>
      </section>
<GenerationsTimeline />
      <section className="aboutx-shell aboutx-team">
        <div className="aboutx-grid aboutx-team-head">
          <div>
            <span className="aboutx-tag">Our Team</span>
            <h2 className="aboutx-title-lg">A Team With Proven Expertise and Excellence</h2>
          </div>
          <p className="aboutx-text">Our consultants blend management, finance, and operations expertise with hands-on implementation support, helping leadership teams move from uncertainty to confident growth.</p>
        </div>

        <div className="aboutx-team-grid">
          <article className="aboutx-quote-card">
            <p>"Strong systems and bold strategy create enduring success."</p>
            <div className="aboutx-signature" aria-hidden="true">LE</div>
            <Link to="/contact" className="aboutx-btn-light arrow-hover-cta arrow-hover-light">
              <span className="arrow-hover-label">Learn More</span>
            </Link>
          </article>

          {team.map((member) => (
            <article className="aboutx-member-card" key={member.name}>
              <img src={member.image} alt={member.name} className="aboutx-member-image" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
