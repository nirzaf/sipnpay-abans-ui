import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Privacy Policy" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4 text-center">Privacy Policy</h1>
                        <p className="text-center text-theme-text-secondary mb-12">Last updated: November 2025</p>

                        <div className="prose prose-lg max-w-none text-theme-text-secondary space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Information We Collect</h2>
                                <p>We collect information that you provide directly to us, including:</p>
                                <ul className="space-y-2">
                                    <li>Name, email address, phone number, and shipping address</li>
                                    <li>Payment information (processed securely through our payment partners)</li>
                                    <li>Purchase history and preferences</li>
                                    <li>Communications with our customer service team</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">How We Use Your Information</h2>
                                <p>We use the information we collect to:</p>
                                <ul className="space-y-2">
                                    <li>Process and fulfill your orders</li>
                                    <li>Communicate with you about your orders and our services</li>
                                    <li>Send promotional materials (with your consent)</li>
                                    <li>Improve our website and services</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Information Sharing</h2>
                                <p>We do not sell your personal information. We may share your information with:</p>
                                <ul className="space-y-2">
                                    <li>Service providers who assist in our operations (shipping, payment processing)</li>
                                    <li>Legal authorities when required by law</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Data Security</h2>
                                <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Your Rights</h2>
                                <p>You have the right to:</p>
                                <ul className="space-y-2">
                                    <li>Access and receive a copy of your personal data</li>
                                    <li>Correct inaccurate personal data</li>
                                    <li>Request deletion of your personal data</li>
                                    <li>Opt-out of marketing communications</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Contact Us</h2>
                                <p>If you have questions about this Privacy Policy, please contact us at privacy@sipandplay.lk</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
