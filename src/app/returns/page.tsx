import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function ReturnsPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Returns & Refunds" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-12 text-center">Returns & Refunds Policy</h1>

                        <div className="prose prose-lg max-w-none text-theme-text-secondary space-y-8">
                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">30-Day Return Policy</h2>
                                <p>We want you to be completely satisfied with your purchase. If you're not happy, you can return unused items in original packaging within 30 days of delivery for a full refund.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Return Conditions</h2>
                                <ul className="space-y-2">
                                    <li>Items must be unused and in original condition</li>
                                    <li>Original packaging and all accessories must be included</li>
                                    <li>Proof of purchase is required</li>
                                    <li>Custom or special orders are non-returnable</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">How to Return</h2>
                                <ol className="space-y-2">
                                    <li>Contact our customer service team to initiate a return</li>
                                    <li>Receive your Return Authorization (RA) number</li>
                                    <li>Pack the item securely in original packaging</li>
                                    <li>Ship the item to our returns center (address provided)</li>
                                    <li>Refund processed within 7-10 business days of receipt</li>
                                </ol>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Refund Methods</h2>
                                <p>Refunds will be issued to the original payment method. Bank transfers may take 5-7 business days to reflect in your account.</p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Warranty Claims</h2>
                                <p>Defective items covered under manufacturer warranty should be reported immediately. We will coordinate repair or replacement according to warranty terms.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
