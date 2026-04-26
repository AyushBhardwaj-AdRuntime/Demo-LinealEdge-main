import React, { useEffect, useState } from 'react';
import SubscribeBand from '../components/SubscribeBand';
import PageHeader from '../components/PageHeader';

const faqSections = [
  {
    eyebrow: 'Transparency, Fees & Account Structures',
    title: 'Clear structures. Honest alignment.',
    items: [
      {
        q: 'How does Lineal Edge earn? Isn\'t a commission a conflict of interest?',
        a: (
          <>
            <p>We believe in absolute transparency. We are an AMFI-registered Mutual Fund Distributor (ARN-342205). We earn trailing commissions from mutual fund companies when we invest client money in regular plans. On average, this is around 1% per annum (including GST) on the overall portfolio, for as long as the investments remain with us. We do not charge you any separate advisory fees.</p>
            <p>We view this as a highly transparent method because you know exactly how we are compensated. This revenue enables us to employ a competent data and operations team, invest in best-in-class technology, and deliver exceptional service.</p>
            <p>Crucially, commissions never influence our fund selection. We invest our own family&apos;s money in the exact same funds we recommend to our clients, ensuring our interests are completely aligned.</p>
          </>
        ),
      },
      {
        q: 'What is the difference between a Direct Plan and a Regular Plan?',
        a: (
          <>
            <p>Every mutual fund offers two options:</p>
            <ul className="faqv2-rich-list">
              <li><strong>Direct Plan:</strong> You invest directly with the fund house. There are no intermediaries, meaning a lower expense ratio, but you take 100% responsibility for your own research, execution, and behavioral discipline.</li>
              <li><strong>Regular Plan:</strong> You invest through an AMFI-registered distributor like us. The expense ratio is slightly higher, as a portion is paid to us for acting as your personal finance coach. We align investments with your life goals, manage risk, execute rebalancing, and help keep you disciplined through market panics.</li>
            </ul>
            <p className="faqv2-note">Note: We deal exclusively in Regular Plans.</p>
          </>
        ),
      },
      {
        q: 'I already have existing investments. What are my options if I want to work with you?',
        a: (
          <>
            <p>If you have <strong>Direct Plans</strong>, you can retain your current Direct Plans as they are and start fresh investments in Regular Plans under our guidance. Alternatively, you can redeem your Direct investments and reinvest them through us for a consolidated strategy. We will first consult with you on any capital gains tax implications.</p>
            <p>If you have <strong>Regular Plans and want to consolidate</strong>, you do not need to sell or redeem anything. With your consent, we can seamlessly transfer your portfolio under our ARN code. You retain your holdings, avoid capital gains taxes, and immediately begin receiving our goal-based guidance.</p>
            <p>If you have <strong>Regular Plans but wish to retain your current distributor</strong>, you are completely free to leave your existing portfolio untouched while starting a parallel investment journey with us. However, wealth creation works best when it is holistic.</p>
            <p>We strongly recommend centralizing your strategy with one primary wealth partner who has full visibility of your financial landscape. Complete disclosure helps prevent overlapping investments, optimize asset allocation, and drive the best results for your family. We would be honored to be that central partner, but the choice is entirely yours.</p>
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'Asset Security & Operational Integrity',
    title: 'Your capital stays in your control.',
    items: [
      {
        q: 'What measures ensure the safety of my capital?',
        a: (
          <>
            <p>We operate with a strict framework of operational integrity. At Lineal Edge, we never pool, hold, or handle your capital directly, nor are your assets ever registered in our firm&apos;s name.</p>
            <p>All investments are executed strictly in your name, with capital flowing directly from your personal bank account to the National Stock Exchange, Bombay Stock Exchange, or the respective Asset Management Companies.</p>
            <p>Every financial transaction requires your explicit authorization via email or mobile OTP. While we design and initiate your strategy, absolute control remains in your hands at all times. Backed by SEBI and AMFI oversight, this structure helps keep your wealth heavily protected.</p>
          </>
        ),
      },
      {
        q: 'Is a Demat account required, and how is the onboarding managed?',
        a: (
          <>
            <p>A Demat account is not necessary to invest in mutual funds with us.</p>
            <p>We have streamlined onboarding into a frictionless, 95% digital experience. Depending on your current KYC status, your investment account and One-Time Bank Mandate can typically be established within a few hours. From there, your ongoing wealth management remains completely paperless.</p>
          </>
        ),
      },
      {
        q: 'Do I retain full control of my assets if I choose to leave?',
        a: (
          <>
            <p>We are proud to maintain a persistency ratio of over 96%, reflecting our commitment to lifelong partnerships. However, if you ever decide to transition, you are free to do so seamlessly and without friction.</p>
            <p>Because your assets are held entirely in your name with the AMCs, your portfolio remains completely liquid. You retain the independent authority to transfer your assets to another distributor or manage them yourself, ensuring your capital is never locked to our firm.</p>
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'Services & Wealth Management Approach',
    title: 'Planning across protection, growth, and continuity.',
    items: [
      {
        q: 'What exactly do you do, and how do you structure your services?',
        a: (
          <>
            <p>We design personalized, goal-based financial blueprints. Rather than simply selling products, we structure our guidance across three core pillars:</p>
            <ul className="faqv2-rich-list">
              <li><strong>Foundation & Protection:</strong> We optimize your term and health insurance to secure your family against risk, and facilitate comprehensive estate planning and will drafting to safeguard your legacy.</li>
              <li><strong>Growth:</strong> We deploy your capital into meticulously researched Mutual Funds, Portfolio Management Services, and Alternative Investment Funds tailored to your timeline and risk appetite.</li>
              <li><strong>Ongoing Support:</strong> We provide continuous oversight through bi-annual portfolio reviews, policy renewals, claims support, and administrative updates.</li>
            </ul>
          </>
        ),
      },
      {
        q: 'How do you research and select the right investments?',
        a: (
          <>
            <p>We prioritize qualitative strength over short-term numerical noise. When evaluating the universe of funds, we analyze the consistency of the fund&apos;s internal processes, the tenure and track record of the fund manager, and the depth of the research team behind them.</p>
            <p>We intentionally avoid thematic fads and New Fund Offerings, preferring instruments with proven, battle-tested histories.</p>
          </>
        ),
      },
      {
        q: 'Can you just tell me the "best" fund to invest in, or help with direct stocks?',
        a: (
          <>
            <p>We firmly believe that asset allocation, not isolated fund picking or direct stock trading, drives the vast majority of long-term wealth creation.</p>
            <p>Because of that, we do not advise on direct equity markets. We specialize in managed portfolios so your capital can grow systemically, safely, and without the volatility of concentrated stock bets.</p>
          </>
        ),
      },
    ],
  },
  {
    eyebrow: 'Our Philosophy & Partnership',
    title: 'Built for long-term trust.',
    items: [
      {
        q: 'Who benefits most from partnering with Lineal Edge?',
        a: (
          <>
            <p>We partner with a diverse cross-section of individuals, including business owners, salaried professionals, retirees, and NRIs. We do not base our attention on the size of an initial portfolio. We focus on mutual alignment.</p>
            <p>Our approach yields the best results for people who view wealth creation as a multi-decade project, value structured guidance, and want to delegate the complexity of finance so they can focus on their own lives and careers.</p>
          </>
        ),
      },
      {
        q: 'Are there situations where your firm might not be the right fit?',
        a: (
          <>
            <p>Because our strategies are built entirely around long-term compounding and disciplined patience, our methods may naturally misalign with investors seeking aggressive short-term trading, quick market wins, or high-frequency portfolio changes.</p>
            <p>We believe deeply in helping you find the right advisor for your specific style, even if that means we are not the perfect match for your immediate goals.</p>
          </>
        ),
      },
      {
        q: 'How does your family\'s own investing history shape your advice?',
        a: (
          <>
            <p>Having navigated the financial markets for three generations, we invest our own family&apos;s capital using the exact same frameworks we recommend to you.</p>
            <p>Decades of firsthand experience have taught us that patience consistently outperforms activity, and that tuning out daily market noise is the most reliable path to generational wealth. We simply practice what we preach.</p>
          </>
        ),
      },
      {
        q: 'Do you advise clients outside of Jaipur?',
        a: (
          <>
            <p>Absolutely. While our family roots and headquarters are proudly based in Jaipur, Rajasthan, we manage wealth for clients across India and globally. Technology allows us to be just a video call away whenever you need us.</p>
            <p>And if you are ever in Jaipur, we would be delighted to host you. Some conversations are simply better had in person.</p>
          </>
        ),
      },
    ],
  },
];

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`faqv2-item ${open ? 'open' : ''}`}>
      <button
        className="faqv2-question"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        type="button"
      >
        <span>{q}</span>
        <svg className="faqv2-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className="faqv2-answer">
        <div className="faqv2-answer-inner">
          <div className="faqv2-answer-content">{a}</div>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="page-content faqv2-page">
      <PageHeader title="FAQs" />

      <section className="faqv2-shell">
        <div className="faqv2-container">
          <div className="faqv2-hero-card">
            <div className="faqv2-hero-copy">
              <span className="faqv2-kicker">Frequently Asked Questions</span>
              <h2 className="faqv2-hero-title">Clear Answers for a Confident Journey.</h2>
              <p className="faqv2-hero-text">At Lineal Edge, this philosophy is the bedrock of our practice. We don&apos;t just manage portfolios; we build lifelong alliances. The journey of wealth creation spans decades, requiring patience, discipline, and a guide who truly understands your family&apos;s vision. Because this process is deeply personal, it relies entirely on mutual confidence.</p>
              <p className="faqv2-hero-text">Before you entrust us with your financial future, you deserve to know exactly who we are and how we operate. Below, you will find clear, honest, and transparent answers to the questions you should ask before we begin that journey together.</p>
            </div>

            <div className="faqv2-quote-stack">
              <blockquote className="faqv2-quote-card">
                <p>&ldquo;Coming together is a beginning; keeping together is progress; working together is success.&rdquo;</p>
                <footer>Henry Ford</footer>
              </blockquote>

              <blockquote className="faqv2-quote-card faqv2-quote-card-alt">
                <p>&ldquo;A team is not a group of people who work together. A team is a group of people who trust each other.&rdquo;</p>
                <footer>Simon Sinek</footer>
              </blockquote>
            </div>
          </div>

          <div className="faqv2-sections">
            {faqSections.map((section, index) => (
              <section key={section.eyebrow} className="faqv2-section-card">
                <div className="faqv2-section-head">
                  <span className="faqv2-section-tag">{section.eyebrow}</span>
                  <h3 className="faqv2-section-title">{section.title}</h3>
                </div>

                <div className="faqv2-list">
                  {section.items.map((item, itemIndex) => (
                    <FAQItem
                      key={item.q}
                      q={item.q}
                      a={item.a}
                      defaultOpen={index === 0 && itemIndex === 0}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* <SubscribeBand /> */}
    </main>
  );
}
