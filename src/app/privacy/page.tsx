import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Privacy Policy | RAZ Transportation LLC",
  description: "Comprehensive Privacy Policy and Data Collection Practices for RAZ Transportation LLC.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-stark text-onyx font-sans">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-32">
        <Link href="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-onyx/60 hover:text-gold-dark transition-colors font-bold mb-12">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <div className="mb-16">
          <p className="text-gold-dark uppercase tracking-[0.2em] text-sm font-bold mb-4">Legal & Compliance</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-onyx">Privacy Policy</h1>
          <p className="text-onyx/60 font-medium">Effective Date & Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="prose prose-lg prose-onyx max-w-none space-y-8 font-light text-onyx/80">
          
          <div className="bg-onyx/5 p-6 border-l-4 border-gold-dark text-sm mb-12">
            <p className="font-bold mb-2 text-onyx">Scope of this Policy</p>
            <p>
              This Privacy Policy applies to all users of the RAZ Transportation LLC website, our freight and logistics services, dispatch operations, and all related communications (collectively, the "Services"). By using our Services, you consent to the data practices described in this comprehensive policy.
            </p>
          </div>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">1. Introduction and Definitions</h2>
          <p>
            RAZ Transportation LLC ("Company," "we," "us," or "our") is committed to safeguarding the privacy and security of the personal and corporate information entrusted to us by our clients, partners, drivers, and website visitors. As a professional logistics and transportation entity, we handle sensitive commercial data, regulatory compliance information, and personal identifiers.
          </p>
          <p>
            For the purposes of this Privacy Policy:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>"Personal Information"</strong> means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household.</li>
            <li><strong>"User," "you," or "your"</strong> refers to website visitors, shippers, receivers, brokers, owner-operators, and any individual interacting with our Services.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">2. Categories of Information We Collect</h2>
          <p>
            To operate our logistics network efficiently and comply with federal and state transportation regulations (including FMCSA and DOT requirements), we collect various categories of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identifiers & Contact Information:</strong> Real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol (IP) address, email address, account name, Social Security number (for 1099 contractors/drivers), driver's license number, or other similar identifiers.</li>
            <li><strong>Commercial & Freight Information:</strong> Records of personal property, products or services purchased, shipping routes, cargo weight and dimensions, load boards accessed, facility addresses (pick-up and drop-off), gate codes, and purchasing or consuming histories or tendencies.</li>
            <li><strong>Financial Data:</strong> Bank account numbers, credit card numbers, debit card numbers, factoring company details, and other financial information necessary for invoicing, payment processing, and broker credit checks.</li>
            <li><strong>Geolocation Data:</strong> Physical location or movements, including GPS tracking data from Electronic Logging Devices (ELDs), mobile applications, or trailer trackers used to monitor the status and safety of in-transit freight.</li>
            <li><strong>Internet & Network Activity:</strong> Browsing history, search history, and information regarding a consumer’s interaction with our website, application, or advertisement.</li>
            <li><strong>Professional or Employment-Related Information:</strong> For owner-operators or carrier partners, we collect DOT numbers, MC numbers, insurance certificates, safety ratings, and driving records.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">3. Sources of Information</h2>
          <p>We obtain the categories of personal information listed above from the following categories of sources:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Directly from you:</strong> For example, from forms you complete on our website, rate quotes you request, or contracts you enter into with us.</li>
            <li><strong>Indirectly from you:</strong> For example, from observing your actions on our website through automated tracking technologies.</li>
            <li><strong>From Third Parties:</strong> For example, from freight brokers, load boards (e.g., DAT, Truckstop), credit reporting agencies, insurance providers, and telematics/ELD service providers.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">4. Business and Commercial Purposes for Data Use</h2>
          <p>We use the information we collect for the following operational and commercial purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Fulfilling Freight Contracts:</strong> To dispatch trucks, route freight, provide real-time tracking updates, manage layovers/lumpers, and generate accurate Bills of Lading (BOL) and Proof of Delivery (POD) documents.</li>
            <li><strong>Regulatory Compliance:</strong> To comply with Department of Transportation (DOT), Federal Motor Carrier Safety Administration (FMCSA), and state-level transport regulations, including Hours of Service (HOS) auditing and safety compliance.</li>
            <li><strong>Financial Processing:</strong> To process payments, manage invoicing, conduct broker credit checks, submit factoring claims, and prevent fraudulent transactions.</li>
            <li><strong>Customer Service & Communications:</strong> To provide customer support, respond to inquiries, send operational alerts (e.g., weather delays, breakdown notifications), and manage claims for cargo damage or loss.</li>
            <li><strong>Platform Optimization:</strong> To debug our website, analyze traffic patterns, and improve our digital infrastructure and user experience.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">5. Cookies, Web Beacons, and Tracking Technologies</h2>
          <p>
            Our website utilizes cookies, web beacons, pixels, and similar tracking technologies to enhance user experience, operate the site securely, and deliver targeted marketing.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Strictly Necessary Cookies:</strong> Required for the basic operation of our website, such as security protocols and network management.</li>
            <li><strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of visitors and see how visitors move around our website. We may use third-party analytics services (such as Google Analytics) to aggregate this data.</li>
            <li><strong>Targeting/Advertising Cookies:</strong> Record your visit to our website, the pages you have visited, and the links you have followed. We may share this general browsing data with trusted advertising networks to serve relevant logistics and freight marketing to you on third-party platforms.</li>
          </ul>
          <p>
            <strong>Managing Cookies:</strong> You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">6. Text Messaging (SMS) & A2P 10DLC Compliance</h2>
          <p>
            Due to the time-sensitive nature of freight logistics, we heavily utilize text messaging for dispatch and operational updates. By providing your mobile phone number, you consent to receive automated and manual text messages from RAZ Transportation LLC regarding shipping quotes, dispatch updates, logistics coordination, and promotional offers. Message and data rates may apply. Message frequency varies.
          </p>
          <p>
            <strong>Opting Out:</strong> You may opt out of receiving SMS messages at any time by replying <strong>"STOP"</strong> to any text message you receive from us. For assistance, reply <strong>"HELP"</strong>.
          </p>
          <p>
            <strong>Strict SMS Data Privacy (Zero Third-Party Marketing Sharing):</strong> We rigorously respect your mobile privacy. Mobile information, including phone numbers and SMS opt-in consent data, <strong>will strictly not be shared with, sold to, or distributed to third parties, affiliates, or partners for their own marketing or promotional purposes.</strong> SMS data is only shared with our direct service providers (such as our enterprise text messaging platform) solely for the technical purpose of delivering our communications to you.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">7. Disclosure and Sharing of Personal Information</h2>
          <p>We may disclose your Personal Information to a third party for a business purpose. When we disclose Personal Information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract.</p>
          <p>We share your Personal Information with the following categories of third parties:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Logistics Partners & Independent Contractors:</strong> Owner-operators, partner carriers, and lumpers required to execute the physical transportation of your freight.</li>
            <li><strong>Service Providers:</strong> Cloud hosting providers, Transportation Management Systems (TMS), ELD providers, CRM platforms, and payment processors. <em>(Note: As explicitly stated in Section 6, this excludes mobile phone numbers and SMS consent data, which are never shared with third parties for their own marketing).</em></li>
            <li><strong>Legal & Regulatory Authorities:</strong> State weigh stations, DOT inspectors, FMCSA auditors, law enforcement, and insurance adjusters in the event of an accident, claim, or regulatory audit.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of RAZ Transportation LLC's assets.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">8. State-Specific Privacy Rights (CCPA, CPRA, VCDPA, CPA)</h2>
          <p>
            Depending on your U.S. state of residence (e.g., California, Virginia, Colorado, Connecticut, Utah), you may have specific rights regarding your personal information. RAZ Transportation LLC is committed to honoring these rights nationwide where commercially feasible.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right to Know & Access:</strong> You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months.</li>
            <li><strong>Right to Deletion:</strong> You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions (e.g., we cannot delete data required by the FMCSA for historical safety records, or data required for tax and accounting purposes).</li>
            <li><strong>Right to Correction:</strong> You have the right to request that we correct inaccurate personal information that we maintain about you.</li>
            <li><strong>Right to Opt-Out of the Sale or Sharing of Personal Data:</strong> <em>RAZ Transportation LLC does not sell your personal information for monetary value.</em> However, if the use of third-party advertising cookies constitutes "sharing" under certain state laws, you may opt out by utilizing global privacy controls or contacting us.</li>
            <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising any of your consumer privacy rights (e.g., we will not deny you freight services or charge you different rates).</li>
          </ul>
          <p>To exercise your rights, please submit a verifiable consumer request to us using the contact information provided in Section 13. We must verify your identity before processing your request.</p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">9. Data Security Infrastructure</h2>
          <p>
            We have implemented rigorous administrative, technical, and physical security measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. This includes encryption of financial data, secure TMS access controls, and network firewalls. 
          </p>
          <p>
            However, the transmission of information via the internet and cellular networks is not completely secure. While we do our best to protect your personal information, we cannot guarantee the absolute security of your personal information transmitted to our website or via our dispatch channels. Any transmission of personal information is at your own risk.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">10. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. In the logistics industry, regulatory bodies (like the DOT and IRS) mandate the retention of certain operational records (such as BOLs, HOS logs, and invoices) for a period of up to 3 to 7 years. Once we no longer have a legal or legitimate business need to process your personal data, we will securely delete or anonymize it.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">11. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites, plug-ins, load boards, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">12. Children's Privacy (COPPA)</h2>
          <p>
            Our Services are exclusively intended for commercial logistics professionals and adults over the age of 18. We do not knowingly collect personal identifiable information from children under 18. If you are under 18, do not use or provide any information on this website. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information immediately.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">13. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to amend this Privacy Policy at our discretion and at any time. When we make changes to this Privacy Policy, we will post the updated notice on the website and update the policy's "Last Updated" date. Your continued use of our website and Services following the posting of changes constitutes your acceptance of such changes.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">14. Contact Us & Data Protection Inquiries</h2>
          <p>If you have any questions, comments, or wish to exercise your data privacy rights under this Privacy Policy, please contact our administrative team at:</p>
          <div className="bg-onyx/5 p-6 border border-onyx/10 rounded-sm mt-6">
            <p className="font-bold mb-1">RAZ Transportation LLC</p>
            <p className="text-sm font-bold text-onyx/60 uppercase tracking-widest mb-3">Attn: Privacy & Operations</p>
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
