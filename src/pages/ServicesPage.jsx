import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import ServicesPage1 from '../components/ServicesPage1';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-content services-premium-page">
      <PageHeader
        title="Services"
        description="Explore personalized planning, investment strategy, risk management, and legacy-focused advisory services."
      />
      <ServicesPage1 />
      <CTASection />
    </main>
  );
}
