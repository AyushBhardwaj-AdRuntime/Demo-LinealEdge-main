import React from 'react';

// Extracting the table data into an array keeps the JSX clean and maintainable.
const commissionData = [
  { category: "Other Scheme - FoF Overseas", percentage: "0.01% to 1.15%" },
  { category: "Equity Scheme - Large Cap Fund", percentage: "0.01% to 1.95%" },
  { category: "Hybrid Scheme - Aggressive Hybrid Fund", percentage: "0.01% to 1.60%" },
  { category: "Equity Scheme - Contra Fund", percentage: "0.35% to 1.45%" },
  { category: "Equity Scheme - Flexi Cap Fund", percentage: "0.01% to 1.95%" },
  { category: "Hybrid Scheme - Dynamic Asset Allocation or Balanced Advantage", percentage: "0.01% to 1.55%" },
  { category: "Equity Scheme - Value Fund", percentage: "0.01% to 1.30%" },
  { category: "Equity Scheme - Mid Cap Fund", percentage: "0.01% to 1.65%" },
  { category: "Other Scheme - FoF Domestic", percentage: "0.01% to 1.10%" },
  { category: "Hybrid Scheme - Arbitrage Fund", percentage: "0.01% to 0.75%" },
  { category: "Equity Scheme - Large & Mid Cap Fund", percentage: "0.01% to 1.80%" },
  { category: "Hybrid Scheme - Conservative Hybrid Fund", percentage: "0.25% to 1.00%" },
  { category: "Hybrid Scheme - Equity Savings", percentage: "0.01% to 1.15%" },
  { category: "Debt Scheme - Corporate Bond Fund", percentage: "0.10% to 0.35%" },
  { category: "Debt Scheme - Liquid Fund", percentage: "0.01% to 0.30%" },
  { category: "Debt Scheme - Dynamic Bond", percentage: "0.35% to 1.20%" },
  { category: "Equity Scheme - Focused Fund", percentage: "0.01% to 1.45%" },
  { category: "Debt Scheme - Gilt Fund", percentage: "0.20% to 1.05%" },
  { category: "Income", percentage: "0.05% to 0.30%" },
  { category: "Debt Scheme - Medium to Long Duration Fund", percentage: "0.25% to 1.25%" },
  { category: "Debt Scheme - Long Duration Fund", percentage: "0.05% to 0.45%" },
  { category: "Debt Scheme - Floater Fund", percentage: "0.04% to 0.55%" },
  { category: "Debt Scheme - Medium Duration Fund", percentage: "0.30% to 0.85%" },
  { category: "Equity Scheme - Multi Cap Fund", percentage: "0.01% to 1.45%" },
  { category: "Equity Scheme - Sectoral/ Thematic", percentage: "0.01% to 2.00%" },
  { category: "Hybrid Scheme - Multi Asset Allocation", percentage: "0.01% to 1.65%" },
  { category: "Equity Scheme - Small Cap Fund", percentage: "0.01% to 1.50%" },
  { category: "Solution Oriented Scheme - Retirement Fund", percentage: "0.04% to 1.40%" },
  { category: "Debt Scheme - Gilt Fund with 10 year constant duration", percentage: "0.25% to 0.35%" },
  { category: "Debt Scheme - Short Duration Fund", percentage: "0.25% to 0.80%" },
  { category: "Debt Scheme - Low Duration Fund", percentage: "0.01% to 0.85%" },
  { category: "Debt Scheme - Money Market Fund", percentage: "0.01% to 0.75%" },
  { category: "Other Scheme - Index Funds", percentage: "0.01% to 0.85%" },
  { category: "Equity Scheme - ELSS", percentage: "0.01% to 3.06%" },
  { category: "Debt Scheme - Ultra Short Duration Fund", percentage: "0.01% to 0.80%" },
  { category: "Debt Scheme - Banking and PSU Fund", percentage: "0.04% to 0.45%" },
  { category: "Solution Oriented Scheme - Children's Fund", percentage: "0.01% to 1.45%" },
  { category: "Debt Scheme - Credit Risk Fund", percentage: "0.05% to 1.10%" },
  { category: "Hybrid Scheme - Balanced Hybrid Fund", percentage: "1.25% to 1.50%" },
  { category: "Equity Scheme - Dividend Yield Fund", percentage: "0.01% to 1.45%" },
  { category: "Debt Scheme - Overnight Fund", percentage: "0.01% to 0.15%" }
];

const DisclosurePage = () => {
  return (
    <div className="w-full bg-white font-sans antialiased text-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1f2c] mb-6">
            Disclosure
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1a1f2c] mb-6">
            Regulatory Disclosures & Disclaimers
          </h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            <strong>Please read this document carefully before accessing our website or utilizing our services.</strong> By accessing this website, you acknowledge that you have read, understood, and agreed to be legally bound by the terms of the following disclaimers. If you do not agree with any of these terms, please do not access the material on our website and exit immediately.
          </p>
        </div>

        <hr className="border-gray-200 mb-12" />

        {/* Section 1 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-[#1a1f2c] mb-4">1. General Information & Scope of Services</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              This website is created for informational purposes only. Nothing contained herein should be construed as investment advice or a personal recommendation to buy, sell, or hold any investment product.
            </p>
            <p>
              We make no representation or warranty (expressed or implied) to any investor regarding the advisability of investing in any specific product or its future performance. While we endeavor to distribute only mutual fund products that are suitable and appropriate for you as per AMFI Guidelines, we are under no legal obligation to provide ongoing investment advice.
            </p>
            <p>
              <strong>Important Designation:</strong> Please note that <strong>Lineal Edge Private Limited</strong> acts as a Mutual Fund Distributor (MFD) and not as a Registered Investment Adviser (RIA). We do not provide fee-based investment advice on any investment product.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-[#1a1f2c] mb-4">2. Market Risks & Scheme Documentation</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="font-semibold text-gray-800">
              All Mutual Funds are subject to market risks. Please read all Scheme-related documents carefully before investing.
            </p>
            <p>
              The value of any investment may rise and/or fall as a result of market changes, and this website is not intended to predict the actual performance or success of any scheme. Past performance is not indicative of future returns, and there is no guarantee that the investment objective of any suggested scheme will be achieved.
            </p>
            <p>
              We strongly advise all existing and prospective investors to evaluate the data, risk factors, exit loads, and Total Expense Ratios (TER) detailed in the:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-medium text-gray-700">
              <li>Scheme Information Document (SID)</li>
              <li>Statement of Additional Information (SAI)</li>
              <li>Key Information Memorandum (KIM)</li>
            </ul>
            <p className="pt-2">
              The respective MF Scheme Offer Documents of all AMCs can be accessed through the below links.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-3 text-sm">
              <div>
                <span className="block font-medium text-gray-700">Statement of Additional Information (SAI)</span>
                <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&mftype=1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&mftype=1
                </a>
              </div>
              <div>
                <span className="block font-medium text-gray-700">Scheme Information Document (SID)</span>
                <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&mftype=2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&mftype=2
                </a>
              </div>
              <div>
                <span className="block font-medium text-gray-700">Key Information Memorandum (KIM)</span>
                <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&mftype=3" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                  https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doMutualFund=yes&mftype=3
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-[#1a1f2c] mb-4">3. Registration & Commission Disclosures</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Lineal Edge Private Limited is a Mutual Fund Distributor registered with the Association of Mutual Funds in India (AMFI), holding <strong>ARN-342205</strong>.
            </p>
            <p>
              The firm earns commissions for mutual fund business sourced under its ARN code. This commission varies from Fund House to Fund House and from Scheme to Scheme. In accordance with SEBI circular SEBI/IMD/CIR No. 4/168230/09, please refer to the following details regarding the commission structure earned by Lineal Edge Private Limited:
            </p>

            {/* Data Table */}
            <div className="overflow-x-auto my-8 border border-gray-200 rounded-lg shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a1f2c] text-white">
                    <th className="py-4 px-6 font-semibold text-sm border-b border-gray-700">Scheme Category</th>
                    <th className="py-4 px-6 font-semibold text-sm border-b border-gray-700 text-right w-48">%</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {commissionData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-6 text-sm text-gray-700">{row.category}</td>
                      <td className="py-3 px-6 text-sm text-gray-700 text-right font-medium">{row.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="font-semibold text-gray-800 mt-6">Note:</p>
            <p>The above-mentioned commission is All Trail.</p>
            
            <p className="font-semibold text-gray-800 mt-4">Regarding the rates of commission disclosed:</p>
            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Geography:</strong> Rates refer to T-30 (Top 30) cities in India as defined by AMFI. Commissions may be higher in the case of B-30 (Beyond 30) cities.</li>
              <li><strong>Variability:</strong> Rates are subject to change without prior consent, at the sole discretion and agreement between Lineal Edge Private Limited and the respective Asset Management Companies (AMCs).</li>
              <li><strong>No Upfront Commission:</strong> Commissions apply to investments subscribed under the Regular/Distributor Plan. No upfront commission is paid to or received by Lineal Edge Private Limited.</li>
              <li><strong>Scheme-Level Transparency:</strong> Detailed scheme-level commissions are available with your Wealth/Relationship Manager and will be produced upon request.</li>
              <li><strong>Data Accuracy:</strong> This information is compiled on a best-effort basis and is updated as and when received from the AMCs.</li>
              <li>
                <strong>Public Verification:</strong> You can verify the gross commissions earned by Lineal Edge Private Limited in any particular financial year via the official AMFI portal:<br/>
                <a href="https://www.amfiindia.com/commission-disclosure" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  https://www.amfiindia.com/commission-disclosure
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-[#1a1f2c] mb-4">4. Regular Plans vs. Direct Plans</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Lineal Edge Private Limited deals in <strong>Regular Plans only</strong> for Mutual Fund Schemes, from which we earn a trailing commission on client investments. Complete disclosure of these commission earnings is provided to clients prior to investment.
            </p>
            <p>
              Please be aware that a <strong>Direct Plan</strong> option is available for every Mutual Fund Scheme, which offers the advantage of a lower expense ratio. Because we are not entitled to earn commissions on Direct Plans, we do not distribute or deal in them.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-[#1a1f2c] mb-4">5. Limitation of Liability & Data Accuracy</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              This website may present indicative summaries, historical analyses, and information relating to various investment products. Unless otherwise specified, all data (including expense ratios, returns, NAV, etc.) is historical, for illustration purposes only, and subject to change.
            </p>
            <p>
              While we exercise due care and caution in compiling this data, we do not guarantee the accuracy, completeness, or reasonableness of the assumptions made regarding past performance or historical analysis. Furthermore, transaction data and other information may be obtained from third-party feeds, and we are not responsible for verifying their accuracy.
            </p>
            <p>
              Lineal Edge Private Limited, its directors, and its employees specifically state that we cannot be held liable for any damages (monetary, legal, or otherwise) caused by any error, omission, interruption, deletion, defect, or failure on this site. We hold no financial liability whatsoever to any user on account of the use of the information provided herein.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-[#1a1f2c] mb-4">6. Governing Law & Jurisdiction</h3>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              We consider ourselves and intend to be subject to the jurisdiction only of the courts of <strong>Jaipur, Rajasthan, India</strong>.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default DisclosurePage;