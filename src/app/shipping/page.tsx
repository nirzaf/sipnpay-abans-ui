import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Truck, Package, MapPin, Clock } from "lucide-react";

export default function ShippingPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Shipping Policy" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-12 text-center">Shipping Policy</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                            <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 text-center">
                                <Truck className="h-12 w-12 text-brand-red mx-auto mb-4" />
                                <h3 className="font-bold text-theme-text-primary mb-2">Free Shipping</h3>
                                <p className="text-sm text-theme-text-secondary">Orders over Rs. 50,000 within Colombo</p>
                            </div>
                            <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 text-center">
                                <Clock className="h-12 w-12 text-brand-red mx-auto mb-4" />
                                <h3 className="font-bold text-theme-text-primary mb-2">Fast Delivery</h3>
                                <p className="text-sm text-theme-text-secondary">3-5 business days for standard items</p>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none text-theme-text-secondary space-y-6">
                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Delivery Zones</h2>
                                <ul className="space-y-2">
                                    <li><strong>Zone 1 (Colombo):</strong> Free delivery on orders over Rs. 50,000</li>
                                    <li><strong>Zone 2 (Western Province):</strong> Rs. 2,500 delivery fee</li>
                                    <li><strong>Zone 3 (Other Provinces):</strong> Rs. 5,000 - 10,000 based on distance</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Delivery Timeframes</h2>
                                <ul className="space-y-2">
                                    <li><strong>In-Stock Items:</strong> 3-5 business days</li>
                                    <li><strong>Made-to-Order Items:</strong> 2-4 weeks</li>
                                    <li><strong>International Orders:</strong> 4-8 weeks</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Installation Services</h2>
                                <p>Professional installation is included with all major equipment purchases. Our certified technicians will coordinate with you for a convenient installation date.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
