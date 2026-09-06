import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Terms of Service | RAZ Transportation LLC",
  description: "Comprehensive Terms of Service, Conditions of Carriage, and Use Agreement for RAZ Transportation LLC.",
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-stark text-onyx font-sans">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <Link href="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-onyx/60 hover:text-gold-dark transition-colors font-bold mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="mb-16">
          <p className="text-gold-dark uppercase tracking-[0.2em] text-sm font-bold mb-4">Legal & Compliance</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-onyx">Comprehensive Terms of Service</h1>
          <p className="text-onyx/60 font-medium">Effective Date & Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="prose prose-lg prose-onyx max-w-none space-y-8 font-light text-onyx/80">
          
          <div className="bg-onyx/5 p-6 border-l-4 border-gold-dark text-sm mb-12">
            <p className="font-bold mb-2 text-onyx">Binding Agreement</p>
            <p>
              By accessing the RAZ Transportation LLC website, utilizing our digital platforms, or engaging our freight, logistics, and transportation services, you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service. If you do not agree to these terms in their entirety, you must immediately cease use of our Services.
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">1. Introduction and Scope</h2>
          <p>
            These Comprehensive Terms of Service ("Terms") govern your access to and use of the website, software, and transportation services provided by RAZ Transportation LLC (referred to herein as "Company," "we," "us," or "our"). These Terms apply to all visitors, shippers, receivers, freight brokers, owner-operators, and others who access or use the Services (collectively, "Users," "you," or "your").
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">2. Definitions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>"Bill of Lading" or "BOL"</strong> means the official shipping document issued by the Company, the shipper, or a third party acknowledging receipt of cargo for transit.</li>
            <li><strong>"Cargo" or "Freight"</strong> means the goods, property, or commodities tendered to the Company for transportation.</li>
            <li><strong>"Shipper"</strong> means the party tendering Cargo to the Company for transport.</li>
            <li><strong>"Accessorial Charges"</strong> means additional fees incurred beyond the standard line-haul rate, including but not limited to detention, layovers, lumpers, TONU (Truck Ordered Not Used), and redelivery fees.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">3. Transportation Services and Conditions of Carriage</h2>
          <p>
            RAZ Transportation LLC operates as a licensed motor carrier operating under the authority of the Federal Motor Carrier Safety Administration (FMCSA) and the Department of Transportation (DOT). 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right to Refuse Cargo:</strong> We reserve the right to inspect and refuse any Cargo that is deemed unsafe, improperly packaged, misclassified, or that violates any federal, state, or local laws (including prohibited hazardous materials).</li>
            <li><strong>Shipper Responsibilities:</strong> The Shipper is strictly responsible for providing accurate weight, dimensions, commodity descriptions, and proper packaging. The Company is not liable for damages resulting from the Shipper's failure to properly secure or package Cargo prior to transit.</li>
            <li><strong>Subcontracting:</strong> We reserve the right, at our sole discretion, to utilize affiliated independent contractors, owner-operators, or partner carriers to fulfill transportation contracts.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">4. Bills of Lading (BOL) and Conflicting Terms</h2>
          <p>
            The Bill of Lading (BOL) serves as the primary receipt of goods and the contract of carriage. In the event of any conflict or inconsistency between the terms and conditions printed on a Shipper-provided BOL and these Terms of Service, <strong>these Terms of Service shall strictly prevail and govern</strong>, unless a separate, formally executed Master Transportation Agreement is signed by an authorized officer of RAZ Transportation LLC.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">5. Rates, Quotes, and Payment Terms</h2>
          <p>
            All business conducted with RAZ Transportation LLC is subject to our financial and payment policies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Quotes & Estimates:</strong> Rate quotes are valid for a specified period (typically 72 hours) and are based on the Shipper's declared specifications. Final invoicing will reflect actual weight, dimensions, and operational realities at the time of loading.</li>
            <li><strong>Accessorial Charges & Fuel Surcharges:</strong> You agree to pay all applicable accessorial charges incurred during transit. This includes standard industry fees for driver detention (waiting times exceeding 2 hours at origin/destination), layovers, tolls, lumpers, and variable fuel surcharges (FSC) linked to national diesel averages.</li>
            <li><strong>Payment Terms:</strong> Unless alternative credit terms are established in writing, all invoices are due Net 30 days from the date of the invoice. </li>
            <li><strong>Late Penalties & Factoring:</strong> Past due accounts will accrue interest at a rate of 1.5% per month (18% annually) or the maximum rate permitted by law, whichever is less. RAZ Transportation LLC utilizes freight factoring services; payments must be made directly to the assignee noted on the invoice. You are responsible for all legal and collection costs incurred to recover past due balances.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">6. Cargo Liability and Claims (The Carmack Amendment)</h2>
          <p>
            Our liability for loss, damage, or delay to Cargo is strictly governed by the Carmack Amendment (49 U.S.C. § 14706).
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Standard Liability Limitations:</strong> Unless a higher declared value is explicitly stated on the BOL prior to transit and a premium freight rate is paid, our maximum cargo liability is limited to <strong>$100,000 per shipment</strong>, or $2.50 per pound for used commodities, whichever is lesser.</li>
            <li><strong>Exclusions from Liability:</strong> We shall not be held liable for loss, damage, or delay caused by: (a) Acts of God or extreme weather; (b) the public enemy or acts of terrorism; (c) the authority of law (e.g., DOT inspections, customs holds); (d) the inherent vice or nature of the goods (e.g., spoilage without equipment failure); or (e) an act or default of the Shipper (e.g., improper loading or packaging).</li>
            <li><strong>Claims Processing:</strong> Any claim for cargo loss, damage, or shortage must be filed in writing with RAZ Transportation LLC within nine (9) months of the delivery date (or the date delivery should have occurred). Claims for concealed damage must be reported within five (5) days of delivery. Lawsuits must be instituted within two (2) years and one day from the date a claim is denied in whole or in part.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">7. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless RAZ Transportation LLC, its affiliates, directors, officers, employees, drivers, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from: (a) your use of and access to the Services; (b) your violation of any term of these Terms of Service; (c) your violation of any third-party right; or (d) any claim that your cargo or actions caused damage to a third party, our equipment, or our personnel.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">8. Intellectual Property and Website Usage</h2>
          <p>
            The website and its original content, features, software, databases, and design elements (including our logo and branding) are the exclusive property of RAZ Transportation LLC and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
          </p>
          <p>
            You are granted a limited, non-exclusive, non-transferable license to access and use the website strictly in accordance with these Terms. You may not scrape, reverse-engineer, or use automated systems (bots) to extract data from our website without our express written consent.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">9. Disclaimer of Warranties</h2>
          <p>
            EXCEPT AS EXPRESSLY PROVIDED HEREIN OR REQUIRED BY THE CARMACK AMENDMENT REGARDING FREIGHT TRANSIT, THE WEBSITE AND ALL SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. RAZ TRANSPORTATION LLC EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE WEBSITE WILL BE ERROR-FREE, UNINTERRUPTED, OR SECURE.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">10. General Limitation of Liability</h2>
          <p>
            NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL RAZ TRANSPORTATION LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUES, LOST BUSINESS OPPORTUNITIES, OR BUSINESS INTERRUPTION, REGARDLESS OF WHETHER WE WERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">11. Governing Law, Venue, and Mandatory Arbitration</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the <strong>State of Minnesota</strong> and applicable federal laws of the United States (including Title 49 of the U.S. Code), without regard to conflict of law principles.
          </p>
          <p>
            <strong>Mandatory Arbitration:</strong> Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach thereof, shall be settled by binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules. The place of arbitration shall be St. Cloud, Minnesota.
          </p>
          <p>
            <strong>Class Action Waiver:</strong> You agree that any proceedings to resolve or litigate any dispute will be conducted solely on an individual basis and that you will not seek to have any dispute heard as a class action, a representative action, or a collective action.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">12. Modifications to the Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify, amend, or replace these Terms at any time. When we make material changes, we will update the "Effective Date" at the top of this page. It is your responsibility to review these Terms periodically. Your continued use of the website or tender of freight after any modifications indicates your acceptance of the new Terms.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">13. Severability and Waiver</h2>
          <p>
            If any provision of these Terms is held to be unenforceable or invalid by a court of competent jurisdiction, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">14. Contact Information</h2>
          <p>For questions regarding these Terms of Service, freight quotes, claims, or general operations, please contact us at:</p>
          <div className="bg-onyx/5 p-6 border border-onyx/10 rounded-sm mt-6">
            <p className="font-bold mb-1">RAZ Transportation LLC</p>
            <p className="text-sm font-bold text-onyx/60 uppercase tracking-widest mb-3">Attn: Legal & Operations</p>
            <p>2015 27TH ST SE, APT 105</p>
            <p>ST CLOUD, MN 56304</p>
            <p className="mt-4"><strong>Email:</strong> <a href="mailto:razdispatch1@raztransportationllc.com" className="text-gold-dark hover:underline">razdispatch1@raztransportationllc.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:218-313-1439" className="text-gold-dark hover:underline">(218) 313-1439</a></p>
          </div>
        </div>
      </article>

      {/* Mini Footer */}
      <footer className="bg-onyx py-8 px-6 border-t border-white/10 text-center text-stark/40 text-xs font-light">
        <p>&copy; {new Date().getFullYear()} RAZ Transportation LLC. All rights reserved.</p>
      </footer>
    </main>
  );
}
