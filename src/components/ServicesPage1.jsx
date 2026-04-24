import React from 'react';

const ServicesPage1 = () => {
  return (
    <div className="services-tailored-shell w-full overflow-x-hidden antialiased">

      {/* SECTION 1 */}
      <section className="bg-[#f5f4f1] text-[#1a1f2c]">
        <div className="services-tailored-section-inner max-w-7xl mx-auto">

          {/* Header */}
          <div className="mb-8 md:mb-10 max-w-lg">
            <p className="services-tailored-kicker text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Our Approach
            </p>

            <h2 className="services-tailored-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Generational Blueprint
            </h2>

            <p className="services-tailored-copy text-sm md:text-base leading-relaxed max-w-lg">
              Before we discuss financial instruments, we focus on you. Our process is rooted in deep analysis and clarity.
            </p>
          </div>

          {/* Cards */}
          <div className="services-tailored-approach-grid grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

            {/* Left Card */}
            <div className="services-tailored-feature-card services-tailored-feature-card-light p-6 md:p-8 transition-all duration-300">

              <div className="services-tailored-icon-box mb-6">
                <svg className="w-6 h-6 text-[#a88657]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>

              <h3 className="services-tailored-subheading text-xl md:text-2xl font-bold mb-3">
                Comprehensive Evaluation
              </h3>

              <p className="services-tailored-copy text-sm leading-relaxed mb-6">
                We begin by looking at the complete picture, assessing your current financial health, liabilities, and multi-generational life parameters.
              </p>

              <hr className="border-gray-100 mb-6" />

              <ul className="space-y-3">
                {['Financial Health Assessment', 'Liability Analysis', 'Multi-Generational Parameters'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#a88657] rounded-full"></span>
                    <span className="services-tailored-meta text-xs">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Card */}
            <div className="services-tailored-feature-card services-tailored-feature-card-accent p-6 md:p-8 transition-all duration-300">

              <div className="services-tailored-icon-box services-tailored-icon-box-soft mb-6">
                <svg className="w-6 h-6 text-[#a88657]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>

              <h3 className="services-tailored-subheading text-xl md:text-2xl font-bold mb-3">
                Tailored Goal Mapping
              </h3>

              <p className="services-tailored-copy text-sm leading-relaxed mb-8">
                We deliver a highly personalized report that clearly maps out the exact steps needed to achieve your specific life goals.
              </p>

              {/* Nested Card */}
              <div className="services-tailored-note-card rounded-xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#a88657]">⚡</span>
                  <h4 className="services-tailored-mini-heading font-semibold">Strategic Execution</h4>
                </div>

                <p className="services-tailored-copy services-tailored-copy-inverse text-xs leading-relaxed">
                  Once the blueprint is set, we deploy carefully selected financial solutions to bring your tailored strategy to life.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-[#1c1917] text-white">
        <div className="services-tailored-section-inner max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* PROTECTION */}
          <div>
            <div className="mb-8 md:mb-10 max-w-lg">
              <p className="services-tailored-kicker text-xs uppercase tracking-[0.2em] mb-4">
                🛡️ Protection Solutions
              </p>

              <h2 className="services-tailored-heading services-tailored-inverse text-3xl md:text-4xl font-bold mb-6">
                Fortifying the System
              </h2>

              <p className="services-tailored-copy services-tailored-copy-muted text-sm md:text-base leading-relaxed max-w-lg">
                A strong legacy requires an unbreakable defense. We help you establish robust risk planning to shield your family and assets from life’s uncertainties.
              </p>
            </div>

            <div className="space-y-6">

              {/* Card */}
              <div className="bg-[#292524] border border-[#44403c] rounded-xl p-6 md:p-8">
                <h3 className="services-tailored-card-title text-lg mb-3">Life (Term) Insurance</h3>
                <p className="services-tailored-copy services-tailored-copy-muted text-sm leading-relaxed">
                  Pure risk defense to ensure that your family's financial foundation remains completely secure, providing absolute continuity for the next generation.
                </p>
              </div>

              <div className="bg-[#292524] border border-[#44403c] rounded-xl p-6 md:p-8">
                <h3 className="services-tailored-card-title text-lg mb-3">Health Insurance</h3>
                <p className="services-tailored-copy services-tailored-copy-muted text-sm leading-relaxed">
                  Comprehensive health cover strategies designed to protect your wealth and emergency reserves from being eroded by unforeseen medical circumstances.
                </p>
              </div>

              <div className="bg-[#292524] border border-[#44403c] rounded-xl p-6 md:p-8">
                <h3 className="services-tailored-card-title text-lg mb-3">Estate Planning & Will Drafting</h3>
                <p className="services-tailored-copy services-tailored-copy-muted text-sm leading-relaxed">
                  The ultimate safeguard for your legacy. We help you structure the smooth, secure transition of your assets, ensuring your wealth empowers the next generation exactly as you intend, without administrative friction.
                </p>
              </div>

            </div>
          </div>

          {/* GROWTH */}
          <div>
            <div className="mb-8 md:mb-10 max-w-lg">
              <p className="services-tailored-kicker services-tailored-kicker-growth text-xs uppercase tracking-[0.2em] mb-4">
                🌱 Growth Solutions
              </p>

              <h2 className="services-tailored-heading services-tailored-inverse text-3xl md:text-4xl font-bold mb-6">
                Cultivating Prosperity
              </h2>

              <p className="services-tailored-copy services-tailored-copy-muted text-sm md:text-base leading-relaxed max-w-lg">
                With a secure foundation and protected assets, we deploy capital into optimized, goal-based strategies for long-term expansion.
              </p>
            </div>

            <div className="space-y-6">

              <div className="bg-[#292524] border border-[#44403c] rounded-xl p-6 md:p-8">
                <h3 className="services-tailored-card-title text-lg mb-3">Mutual Funds</h3>
                <p className="services-tailored-copy services-tailored-copy-muted text-sm leading-relaxed">
                  Professionally structured portfolios designed for steady, intentional wealth accumulation aligned perfectly with your timeline and life goals.
                </p>
              </div>

              <div className="bg-[#292524] border border-[#44403c] rounded-xl p-6 md:p-8">
                <h3 className="services-tailored-card-title text-lg mb-3">Portfolio Management Services (PMS)</h3>
                <p className="services-tailored-copy services-tailored-copy-muted text-sm leading-relaxed">
                  High-conviction, concentrated investment strategies tailored for advanced wealth builders seeking optimized, long-term market expansion.
                </p>
              </div>

              <div className="bg-[#292524] border border-[#44403c] rounded-xl p-6 md:p-8">
                <h3 className="services-tailored-card-title text-lg mb-3">Alternative Investment Funds (AIF)</h3>
                <p className="services-tailored-copy services-tailored-copy-muted text-sm leading-relaxed">
                  Sophisticated, non-traditional asset allocations designed to diversify your legacy and capture unique market opportunities.
                </p>
              </div>

              <div className="bg-[#292524] border border-[#44403c] rounded-xl p-6 md:p-8">
                <h3 className="services-tailored-card-title text-lg mb-3">Specialized Investment Funds (SIF)</h3>
                <p className="services-tailored-copy services-tailored-copy-muted text-sm leading-relaxed">
                  Targeted financial instruments designed to address specific, high-level growth objectives within your overall portfolio.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ServicesPage1;
