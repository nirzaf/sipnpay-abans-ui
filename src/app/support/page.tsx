import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MessageCircle, FileText, Video, Wrench } from "lucide-react";

export default function SupportPage() {
    const faqs = [
        {
            question: "What are your business hours?",
            answer: "We're open Monday-Friday 9:00 AM - 6:00 PM, Saturday 9:00 AM - 2:00 PM. Closed on Sundays.",
        },
        {
            question: "Do you provide installation services?",
            answer: "Yes, we provide professional installation services for all commercial kitchen equipment.",
        },
        {
            question: "What warranty do you offer?",
            answer: "All products come with manufacturer's warranty. Extended warranty options are available.",
        },
        {
            question: "Do you offer financing options?",
            answer: "Yes, we offer flexible financing options for commercial clients. Contact us for details.",
        },
    ];

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />

            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Support" }]} />

                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
                            How Can We Help?
                        </h1>
                        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
                            Get in touch with our support team or find answers in our help center
                        </p>
                    </div>

                    {/* Contact Methods */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 text-center hover:border-brand-red transition-colors">
                            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="h-8 w-8 text-brand-white" />
                            </div>
                            <h3 className="font-semibold text-theme-text-primary mb-2">Call Us</h3>
                            <p className="text-sm text-theme-text-secondary mb-4">
                                Speak directly with our support team
                            </p>
                            <a href="tel:+94112222888" className="text-brand-red font-semibold hover:text-brand-red/80">
                                +94 112 222 888
                            </a>
                        </div>

                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 text-center hover:border-brand-red transition-colors">
                            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="h-8 w-8 text-brand-white" />
                            </div>
                            <h3 className="font-semibold text-theme-text-primary mb-2">Email Us</h3>
                            <p className="text-sm text-theme-text-secondary mb-4">
                                Get a response within 24 hours
                            </p>
                            <a href="mailto:support@sipandplay.lk" className="text-brand-red font-semibold hover:text-brand-red/80">
                                support@sipandplay.lk
                            </a>
                        </div>

                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 text-center hover:border-brand-red transition-colors">
                            <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="h-8 w-8 text-brand-white" />
                            </div>
                            <h3 className="font-semibold text-theme-text-primary mb-2">Live Chat</h3>
                            <p className="text-sm text-theme-text-secondary mb-4">
                                Chat with us in real-time
                            </p>
                            <Button variant="link" className="text-brand-red font-semibold p-0">
                                Start Chat
                            </Button>
                        </div>
                    </div>

                    {/* Support Resources */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-theme-text-primary mb-6 text-center">
                            Support Resources
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6">
                                <FileText className="h-8 w-8 text-brand-red mb-4" />
                                <h3 className="font-semibold text-theme-text-primary mb-2">Documentation</h3>
                                <p className="text-sm text-theme-text-secondary mb-4">
                                    User manuals and product guides
                                </p>
                                <Button variant="outline" size="sm">Browse Docs</Button>
                            </div>

                            <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6">
                                <Video className="h-8 w-8 text-brand-red mb-4" />
                                <h3 className="font-semibold text-theme-text-primary mb-2">Video Tutorials</h3>
                                <p className="text-sm text-theme-text-secondary mb-4">
                                    Step-by-step installation guides
                                </p>
                                <Button variant="outline" size="sm">Watch Videos</Button>
                            </div>

                            <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6">
                                <Wrench className="h-8 w-8 text-brand-red mb-4" />
                                <h3 className="font-semibold text-theme-text-primary mb-2">Service Request</h3>
                                <p className="text-sm text-theme-text-secondary mb-4">
                                    Schedule a service appointment
                                </p>
                                <Button variant="outline" size="sm">Book Service</Button>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-theme-text-primary mb-6 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 group"
                                >
                                    <summary className="font-semibold text-theme-text-primary cursor-pointer list-none flex items-center justify-between">
                                        {faq.question}
                                        <svg
                                            className="h-5 w-5 text-theme-text-secondary group-open:rotate-180 transition-transform"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <p className="text-sm text-theme-text-secondary mt-4">{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Button variant="link" className="text-brand-red">
                                View All FAQs →
                            </Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-2xl mx-auto bg-theme-bg-surface border border-theme-border rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-theme-text-primary mb-6 text-center">
                            Send Us a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-theme-text-primary mb-2">
                                        Name
                                    </label>
                                    <Input placeholder="Your name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-theme-text-primary mb-2">
                                        Email
                                    </label>
                                    <Input type="email" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-theme-text-primary mb-2">
                                    Subject
                                </label>
                                <Input placeholder="How can we help?" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-theme-text-primary mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full px-3 py-2 rounded-md border border-theme-border bg-theme-bg-main text-theme-text-primary focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none"
                                    placeholder="Tell us more about your inquiry..."
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
