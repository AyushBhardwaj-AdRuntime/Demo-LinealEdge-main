import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
// import CTASection from '../components/ServicesPage1';
import ServicesPage1 from '../components/ServicesPage1';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState('consulting');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'consulting',
      navLabel: 'Business Consulting',
      eyebrow: 'Business Consulting',
      title: 'Transforming Insight into Impact',
      description:
        'We help organizations navigate complexity, identify growth opportunities, and build resilient strategies built for measurable outcomes.',
      bullets: ['Strategy development & growth', 'Market research & competitors', 'Risk management'],
      image: '/meeting-placeholder.svg',
      snapshot: 'Strategy and advisory sprint',
    },
    {
      id: 'marketing',
      navLabel: 'Marketing & Sales',
      eyebrow: 'Marketing & Sales',
      title: 'Building Demand That Converts',
      description:
        'From positioning to pipeline, we align your brand and revenue teams so every campaign contributes to stronger conversion and retention.',
      bullets: ['Go-to-market planning', 'Sales funnel optimization', 'Retention and loyalty playbooks'],
      image: '/blog_property.png',
      snapshot: 'Revenue growth campaign planning',
    },
    {
      id: 'ops',
      navLabel: 'Operations Management',
      eyebrow: 'Operations Management',
      title: 'Operational Excellence at Scale',
      description:
        'We redesign operating models, workflows, and decision systems to reduce friction and improve execution speed across your organization.',
      bullets: ['Process mapping and redesign', 'Cost and performance improvement', 'Governance and KPI systems'],
      image: '/growth-graph.svg',
      snapshot: 'Performance systems and optimization',
    },
    {
      id: 'talent',
      navLabel: 'Talent Acquisition',
      eyebrow: 'Talent Acquisition',
      title: 'Talent Strategies for Sustainable Growth',
      description:
        'We help you attract, assess, and retain high-impact talent with hiring frameworks tailored to your company stage and culture.',
      bullets: ['Workforce planning', 'Leadership hiring support', 'Employer brand and onboarding strategy'],
      image: '/client-rebecca.svg',
      snapshot: 'Leadership hiring and onboarding',
    },
  ];

  const activeIndex = Math.max(
    0,
    services.findIndex((service) => service.id === activeService)
  );

  const currentService = services[activeIndex];

  const handleNavClick = (id) => {
    setActiveService(id);
  };

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
