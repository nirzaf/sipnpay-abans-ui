import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function TermsPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Terms & Conditions" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4 text-center">Terms & Conditions</h1>
                        <p className="text-center text-theme-text-secondary mb-12">Last updated: November 2025</p>

                        <div className="prose prose-lg max-w-none text-theme-text-secondary space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">1. Acceptance of Terms</h2>
                                <p>By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">2. Use of Website</h2>
                                <p>You may use this website for lawful purposes only. You agree not to:</p>
                                <ul className="space-y-2">
                                    <li>Use the website in any way that violates applicable laws</li>
                                    <li>Attempt to gain unauthorized access to our systems</li>
                                    <li>Interfere with the proper working of the website</li>
                                    <li>Use automated systems to access the website without permission</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">3. Product Information</h2>
                                <p>We strive to provide accurate product information, but we do not warrant that product descriptions, prices, or other content is accurate, complete, or error-free.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">4. Pricing and Payment</h2>
                                <p>All prices are in Sri Lankan Rupees (LKR) and are subject to change without notice. Payment must be received before products are shipped.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">5. Limitation of Liability</h2>
                                <p>Sip & Play shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or products purchased.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">6. Governing Law</h2>
                                <p>These terms shall be governed by and construed in accordance with the laws of Sri Lanka.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">7. Changes to Terms</h2>
                                <p>We reserve the right to modify these terms at any time. Continued use of the website constitutes acceptance of modified terms.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
