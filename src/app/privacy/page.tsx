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
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance. <em>(Note: As stated below, this excludes mobile phone numbers and SMS consent data, which are never shared with third parties for their own marketing).</em></li>
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">4. Cookies, Tracking, and Third-Party Marketing Tools</h2>
          <p>
            We use cookies, web beacons, pixels, and similar tracking technologies to operate our website, analyze site traffic, and deliver targeted marketing campaigns. These tools automatically collect your Derivative Data to help us understand how you interact with our site and allow us to serve relevant advertisements to you on third-party platforms.
          </p>
          <p>
            We may share your general browsing and interaction data with trusted third-party analytics and marketing partners (such as email service providers or advertising networks) to help us optimize our business. You can manage, control, or disable cookies through your web browser settings. Please note that disabling cookies may affect your ability to use certain features of our website.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">5. Text Messaging (SMS) Communications</h2>
          <p>
            By providing your mobile phone number, you consent to receive automated text messages from RAZ Transportation LLC regarding shipping quotes, dispatch updates, logistics coordination, and promotional offers. Message and data rates may apply. Message frequency varies.
          </p>
          <p>
            You may opt out of receiving SMS messages at any time by replying <strong>"STOP"</strong> to any text message you receive from us. For assistance, reply <strong>"HELP"</strong>.
          </p>
          <p>
            <strong>SMS Data Sharing:</strong> We respect your privacy. Mobile information, including phone numbers and SMS opt-in consent data, will strictly not be shared with, sold to, or distributed to third parties or affiliates for their own marketing or promotional purposes. SMS data is only shared with our direct service providers (such as our text messaging platform) solely for the purpose of delivering our communications to you.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">6. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law for tax, accounting, and regulatory purposes. Once we no longer need to process your personal data, we will either delete or anonymize it.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">7. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">8. User Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including the right to request access to, correction of, or deletion of your data from our systems. If you would like to exercise any of these rights, please contact us using the information provided below.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">9. Do-Not-Track Features</h2>
          <p>
            Most web browsers and some mobile operating systems include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">10. Children's Privacy</h2>
          <p>
            Our website and services are not intended for anyone under the age of 18. We do not knowingly collect personal identifiable information from minors. If we become aware that we have collected personal data from a child under 18, we will take steps to securely delete that information as quickly as possible.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">12. Contact Us</h2>
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
