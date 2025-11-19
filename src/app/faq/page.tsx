import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function FAQPage() {
    const faqs = [
        { q: "What are your delivery options?", a: "We offer free delivery for orders over Rs. 50,000 within Colombo. Other areas have varying delivery charges based on distance." },
        { q: "Do you provide installation services?", a: "Yes, professional installation is included with all major equipment purchases. Our certified technicians will ensure proper setup." },
        { q: "What warranty do products come with?", a: "All products include manufacturer's warranty (typically 1-2 years). Extended warranty options are available for purchase." },
        { q: "Can I return a product?", a: "Yes, we accept returns within 30 days of purchase for unused items in original packaging. Custom orders are non-returnable." },
        { q: "Do you offer financing?", a: "We offer flexible payment plans for commercial clients. Contact our sales team for details on financing options." },
        { q: "How do I track my order?", a: "Once your order ships, you'll receive a tracking number via email. You can also track orders from your account dashboard." },
        { q: "Do you provide training?", a: "Yes, we offer free training sessions on equipment usage and maintenance with qualifying purchases." },
        { q: "What payment methods do you accept?", a: "We accept cash, credit/debit cards (Visa, Mastercard, Amex), bank transfers, and company purchase orders." },
    ];

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "FAQs" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <h1 className="text-4xl font-bold text-theme-text-primary mb-4 text-center">Frequently Asked Questions</h1>
                    <p className="text-lg text-theme-text-secondary mb-12 text-center">
                        Find answers to common questions about our products and services
                    </p>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <details key={index} className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 group">
                                <summary className="font-semibold text-theme-text-primary cursor-pointer list-none flex items-center justify-between">
                                    {faq.q}
                                    <svg className="h-5 w-5 text-theme-text-secondary group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <p className="text-sm text-theme-text-secondary mt-4">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
