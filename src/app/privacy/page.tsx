import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | RAZ Transportation LLC",
  description: "Privacy Policy for RAZ Transportation LLC.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-stark text-onyx font-sans">
      {/* Simple Header */}
      <nav className="w-full bg-stark/80 backdrop-blur-md border-b border-onyx/5 px-6 py-4 flex items-center">
        <Link href="/" className="flex items-center gap-2 text-sm uppercase tracking-widest text-onyx/70 hover:text-gold-dark transition-colors font-bold">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </nav>

      <article className="max-w-4xl mx-auto px-6 py-20 md:py-32">
        <div className="mb-16">
          <p className="text-gold-dark uppercase tracking-[0.2em] text-sm font-bold mb-4">Legal</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-onyx">Privacy Policy</h1>
          <p className="text-onyx/60 font-medium">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="prose prose-lg prose-onyx max-w-none space-y-8 font-light text-onyx/80">
          <p>
            At <strong>RAZ Transportation LLC</strong> ("we," "us," or "our"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our logistics and freight services, or interact with us in any way.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when requesting a quote or booking freight services.</li>
            <li><strong>Business Information:</strong> Company name, DOT numbers, billing details, and cargo specifications necessary to execute transportation contracts.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the site.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">2. How We Use Your Information</h2>
          <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our logistics and freight services.</li>
            <li>Process and manage shipping quotes, dispatch orders, and invoices.</li>
            <li>Improve, personalize, and expand our website operations.</li>
            <li>Understand and analyze how you use our website.</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website and our services.</li>
            <li>Send you emails regarding your shipments or account.</li>
            <li>Find and prevent fraud.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">3. Disclosure of Your Information</h2>
          <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">5. Do-Not-Track Features</h2>
          <p>
            Most web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">7. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <div className="bg-onyx/5 p-6 border border-onyx/10 rounded-sm mt-6">
            <p className="font-bold mb-1">RAZ Transportation LLC</p>
            <p>2015 27TH ST SE, APT 105</p>
            <p>ST CLOUD, MN 56304</p>
            <p className="mt-4"><strong>Email:</strong> razdispatch1@raztransportationllc.com</p>
            <p><strong>Phone:</strong> (218) 313-1439</p>
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
