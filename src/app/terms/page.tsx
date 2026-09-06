import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Terms of Service | RAZ Transportation LLC",
  description: "Terms of Service and Use for RAZ Transportation LLC.",
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
          <p className="text-gold-dark uppercase tracking-[0.2em] text-sm font-bold mb-4">Legal</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-onyx">Terms of Service</h1>
          <p className="text-onyx/60 font-medium">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="prose prose-lg prose-onyx max-w-none space-y-8 font-light text-onyx/80">
          <p>
            Welcome to <strong>RAZ Transportation LLC</strong>. These Terms of Service ("Terms") govern your access to and use of our website, as well as any freight, logistics, and transportation services provided by RAZ Transportation LLC ("we," "us," or "our").
          </p>
          <p>
            By accessing our website or utilizing our transportation services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access the website or use our services.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">1. Freight & Transportation Services</h2>
          <p>
            RAZ Transportation LLC operates as a licensed motor carrier. The provision of our freight services is subject to the specific terms outlined in our Bill of Lading, rate confirmations, and individual transportation agreements negotiated with shippers or brokers.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Accuracy of Information:</strong> You agree to provide accurate, complete, and current information regarding the nature, weight, and dimensions of the cargo, as well as accurate pickup and delivery details.</li>
            <li><strong>Prohibited Cargo:</strong> We reserve the right to refuse the transportation of hazardous materials, illegal goods, or any cargo that violates federal or state transportation laws.</li>
          </ul>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">2. Quotes & Payment Terms</h2>
          <p>
            All rate quotes provided via our website, email, or over the phone are estimates based on the information provided at the time of the request. Final charges may vary based on actual weight, dimensions, accessorial charges (such as detention, layovers, or lumper fees), and fuel surcharges.
          </p>
          <p>
            Unless otherwise agreed upon in writing, payment for transportation services is due upon receipt of the invoice. Past due accounts may be subject to late fees and collection costs.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">3. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, RAZ Transportation LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your access to or use of or inability to access or use our website.</li>
            <li>Delays in transit caused by acts of God, extreme weather, highway closures, or other circumstances beyond our reasonable control (force majeure).</li>
          </ul>
          <p>
            Liability for loss or damage to cargo is strictly governed by the Carmack Amendment (49 U.S.C. § 14706) and the specific limitations declared in our standard Bill of Lading, unless a higher declared value is agreed upon in writing prior to transit.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">4. Intellectual Property Rights</h2>
          <p>
            The website and its original content, features, functionality, and design elements (including our logo and branding) are and will remain the exclusive property of RAZ Transportation LLC and its licensors. The website is protected by copyright, trademark, and other laws of the United States. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of RAZ Transportation LLC.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">5. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the State of Minnesota, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our website or services after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="font-heading text-2xl font-bold text-onyx mt-12 mb-4">7. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact our dispatch and operations team at:</p>
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
