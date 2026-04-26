import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';

const commissionData = [
  { category: 'Other Scheme - FoF Overseas', percentage: '0.01% to 1.15%' },
  { category: 'Equity Scheme - Large Cap Fund', percentage: '0.01% to 1.95%' },
  { category: 'Hybrid Scheme - Aggressive Hybrid Fund', percentage: '0.01% to 1.60%' },
  { category: 'Equity Scheme - Contra Fund', percentage: '0.35% to 1.45%' },
  { category: 'Equity Scheme - Flexi Cap Fund', percentage: '0.01% to 1.95%' },
  { category: 'Hybrid Scheme - Dynamic Asset Allocation or Balanced Advantage', percentage: '0.01% to 1.55%' },
  { category: 'Equity Scheme - Value Fund', percentage: '0.01% to 1.30%' },
  { category: 'Equity Scheme - Mid Cap Fund', percentage: '0.01% to 1.65%' },
  { category: 'Other Scheme - FoF Domestic', percentage: '0.01% to 1.10%' },
  { category: 'Hybrid Scheme - Arbitrage Fund', percentage: '0.01% to 0.75%' },
  { category: 'Equity Scheme - Large & Mid Cap Fund', percentage: '0.01% to 1.80%' },
  { category: 'Hybrid Scheme - Conservative Hybrid Fund', percentage: '0.25% to 1.00%' },
  { category: 'Hybrid Scheme - Equity Savings', percentage: '0.01% to 1.15%' },
  { category: 'Debt Scheme - Corporate Bond Fund', percentage: '0.10% to 0.35%' },
  { category: 'Debt Scheme - Liquid Fund', percentage: '0.01% to 0.30%' },
  { category: 'Debt Scheme - Dynamic Bond', percentage: '0.35% to 1.20%' },
  { category: 'Equity Scheme - Focused Fund', percentage: '0.01% to 1.45%' },
  { category: 'Debt Scheme - Gilt Fund', percentage: '0.20% to 1.05%' },
  { category: 'Income', percentage: '0.05% to 0.30%' },
  { category: 'Debt Scheme - Medium to Long Duration Fund', percentage: '0.25% to 1.25%' },
  { category: 'Debt Scheme - Long Duration Fund', percentage: '0.05% to 0.45%' },
  { category: 'Debt Scheme - Floater Fund', percentage: '0.04% to 0.55%' },
  { category: 'Debt Scheme - Medium Duration Fund', percentage: '0.30% to 0.85%' },
  { category: 'Equity Scheme - Multi Cap Fund', percentage: '0.01% to 1.45%' },
  { category: 'Equity Scheme - Sectoral/ Thematic', percentage: '0.01% to 2.00%' },
  { category: 'Hybrid Scheme - Multi Asset Allocation', percentage: '0.01% to 1.65%' },
  { category: 'Equity Scheme - Small Cap Fund', percentage: '0.01% to 1.50%' },
  { category: 'Solution Oriented Scheme - Retirement Fund', percentage: '0.04% to 1.40%' },
  { category: 'Debt Scheme - Gilt Fund with 10 year constant duration', percentage: '0.25% to 0.35%' },
  { category: 'Debt Scheme - Short Duration Fund', percentage: '0.25% to 0.80%' },
  { category: 'Debt Scheme - Low Duration Fund', percentage: '0.01% to 0.85%' },
  { category: 'Debt Scheme - Money Market Fund', percentage: '0.01% to 0.75%' },
  { category: 'Other Scheme - Index Funds', percentage: '0.01% to 0.85%' },
  { category: 'Equity Scheme - ELSS', percentage: '0.01% to 3.06%' },
  { category: 'Debt Scheme - Ultra Short Duration Fund', percentage: '0.01% to 0.80%' },
  { category: 'Debt Scheme - Banking and PSU Fund', percentage: '0.04% to 0.45%' },
  { category: 'Solution Oriented Scheme - Children\'s Fund', percentage: '0.01% to 1.45%' },
  { category: 'Debt Scheme - Credit Risk Fund', percentage: '0.05% to 1.10%' },
  { category: 'Hybrid Scheme - Balanced Hybrid Fund', percentage: '1.25% to 1.50%' },
  { category: 'Equity Scheme - Dividend Yield Fund', percentage: '0.01% to 1.45%' },
  { category: 'Debt Scheme - Overnight Fund', percentage: '0.01% to 0.15%' },
];

export default function DisclosurePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="page-content disclosure-page">
      <PageHeader title="Disclosure" />

      <section className="disclosure-shell">
        <div className="disclosure-container">
          <div className="disclosure-intro-card">
            <span className="disclosure-kicker">Regulatory Disclosures &amp; Disclaimers</span>
            <h2 className="disclosure-intro-title">Please read this document carefully before accessing our website or using our services.</h2>
            <p className="disclosure-intro-text">By accessing this website, you acknowledge that you have read, understood, and agreed to be legally bound by the terms of the following disclaimers. If you do not agree with any of these terms, please do not access the material on our website and exit immediately.</p>
          </div>

          <div className="disclosure-body">
            <section className="disclosure-section-block">
              <h3 className="disclosure-section-title">1. General Information &amp; Scope of Services</h3>
              <div className="disclosure-copy">
                <p>This website is created for informational purposes only. Nothing contained herein should be construed as investment advice or a personal recommendation to buy, sell, or hold any investment product.</p>
                <p>We make no representation or warranty, expressed or implied, to any investor regarding the advisability of investing in any specific product or its future performance. While we endeavor to distribute only mutual fund products that are suitable and appropriate for you as per AMFI guidelines, we are under no legal obligation to provide ongoing investment advice.</p>
                <p><strong>Important Designation:</strong> Lineal Edge Private Limited acts as a Mutual Fund Distributor and not as a Registered Investment Adviser. We do not provide fee-based investment advice on any investment product.</p>
              </div>
            </section>

            <section className="disclosure-section-block">
              <h3 className="disclosure-section-title">2. Market Risks &amp; Scheme Documentation</h3>
              <div className="disclosure-copy">
                <p><strong>All Mutual Funds are subject to market risks. Please read all scheme-related documents carefully before investing.</strong></p>
                <p>The value of any investment may rise and fall as a result of market changes, and this website is not intended to predict the actual performance or success of any scheme. Past performance is not indicative of future returns, and there is no guarantee that the investment objective of any suggested scheme will be achieved.</p>
                <p>We strongly advise all existing and prospective investors to evaluate the data, risk factors, exit loads, and Total Expense Ratios detailed in the following documents:</p>
                <ul className="disclosure-list">
                  <li>Scheme Information Document (SID)</li>
                  <li>Statement of Additional Information (SAI)</li>
                  <li>Key Information Memorandum (KIM)</li>
                </ul>
                <p>The respective scheme offer documents of all AMCs can be accessed through the links below.</p>

                <div className="disclosure-links-grid">
                  <div className="disclosure-link-card">
                    <span>Statement of Additional Information (SAI)</span>
                    <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&mftype=1" target="_blank" rel="noopener noreferrer">https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&amp;mftype=1</a>
                  </div>
                  <div className="disclosure-link-card">
                    <span>Scheme Information Document (SID)</span>
                    <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&mftype=2" target="_blank" rel="noopener noreferrer">https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&amp;mftype=2</a>
                  </div>
                  <div className="disclosure-link-card">
                    <span>Key Information Memorandum (KIM)</span>
                    <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&mftype=3" target="_blank" rel="noopener noreferrer">https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&amp;mftype=3</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="disclosure-section-block">
              <h3 className="disclosure-section-title">3. Registration &amp; Commission Disclosures</h3>
              <div className="disclosure-copy">
                <p>Lineal Edge Private Limited is a Mutual Fund Distributor registered with the Association of Mutual Funds in India (AMFI), holding <strong>ARN-342205</strong>.</p>
                <p>The firm earns commissions for mutual fund business sourced under its ARN code. This commission varies from fund house to fund house and from scheme to scheme. In accordance with SEBI circular SEBI/IMD/CIR No. 4/168230/09, please refer to the following details regarding the commission structure earned by Lineal Edge Private Limited.</p>

                <div className="disclosure-table-wrap">
                  <table className="disclosure-table">
                    <thead>
                      <tr>
                        <th>Scheme Category</th>
                        <th>%</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commissionData.map((row) => (
                        <tr key={row.category}>
                          <td>{row.category}</td>
                          <td>{row.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p><strong>Note:</strong> The above-mentioned commission is all trail.</p>
                <p><strong>Regarding the rates of commission disclosed:</strong></p>
                <ol className="disclosure-ordered-list">
                  <li><strong>Geography:</strong> Rates refer to T-30 cities in India as defined by AMFI. Commissions may be higher in the case of B-30 cities.</li>
                  <li><strong>Variability:</strong> Rates are subject to change without prior consent, at the sole discretion and agreement between Lineal Edge Private Limited and the respective Asset Management Companies.</li>
                  <li><strong>No Upfront Commission:</strong> Commissions apply to investments subscribed under the Regular or Distributor Plan. No upfront commission is paid to or received by Lineal Edge Private Limited.</li>
                  <li><strong>Scheme-Level Transparency:</strong> Detailed scheme-level commissions are available with your Wealth or Relationship Manager and will be produced upon request.</li>
                  <li><strong>Data Accuracy:</strong> This information is compiled on a best-effort basis and is updated as and when received from the AMCs.</li>
                  <li><strong>Public Verification:</strong> You can verify the gross commissions earned by Lineal Edge Private Limited in any particular financial year via the official AMFI portal: <a href="https://www.amfiindia.com/commission-disclosure" target="_blank" rel="noopener noreferrer">https://www.amfiindia.com/commission-disclosure</a></li>
                </ol>
              </div>
            </section>

            <section className="disclosure-section-block">
              <h3 className="disclosure-section-title">4. Regular Plans vs. Direct Plans</h3>
              <div className="disclosure-copy">
                <p>Lineal Edge Private Limited deals in <strong>Regular Plans only</strong> for mutual fund schemes, from which we earn a trailing commission on client investments. Complete disclosure of these commission earnings is provided to clients prior to investment.</p>
                <p>Please be aware that a <strong>Direct Plan</strong> option is available for every mutual fund scheme, which offers the advantage of a lower expense ratio. Because we are not entitled to earn commissions on Direct Plans, we do not distribute or deal in them.</p>
              </div>
            </section>

            <section className="disclosure-section-block">
              <h3 className="disclosure-section-title">5. Limitation of Liability &amp; Data Accuracy</h3>
              <div className="disclosure-copy">
                <p>This website may present indicative summaries, historical analyses, and information relating to various investment products. Unless otherwise specified, all data, including expense ratios, returns, and NAV, is historical, for illustration purposes only, and subject to change.</p>
                <p>While we exercise due care and caution in compiling this data, we do not guarantee the accuracy, completeness, or reasonableness of the assumptions made regarding past performance or historical analysis. Furthermore, transaction data and other information may be obtained from third-party feeds, and we are not responsible for verifying their accuracy.</p>
                <p>Lineal Edge Private Limited, its directors, and its employees specifically state that we cannot be held liable for any damages, monetary, legal, or otherwise, caused by any error, omission, interruption, deletion, defect, or failure on this site. We hold no financial liability whatsoever to any user on account of the use of the information provided herein.</p>
              </div>
            </section>

            <section className="disclosure-section-block">
              <h3 className="disclosure-section-title">6. Governing Law &amp; Jurisdiction</h3>
              <div className="disclosure-copy">
                <p>We consider ourselves and intend to be subject only to the jurisdiction of the courts of <strong>Jaipur, Rajasthan, India</strong>.</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
