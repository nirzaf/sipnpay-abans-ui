import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Users, Target, Award, TrendingUp } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "About Us" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-6 text-center">About Sip & Play</h1>
                        <p className="text-lg text-theme-text-secondary mb-12 text-center">
                            Sri Lanka's premier destination for commercial kitchen equipment since 2010
                        </p>

                        <div className="prose prose-lg max-w-none text-theme-text-secondary mb-12">
                            <p className="mb-4">
                                Sip & Play Commercial Kitchenware has been serving the hospitality industry in Sri Lanka for over a decade.
                                We specialize in providing high-quality, professional-grade kitchen equipment to restaurants, hotels, cafes,
                                and catering businesses across the island.
                            </p>
                            <p>
                                Our mission is to empower food service businesses with the best equipment and support, ensuring they can
                                deliver exceptional culinary experiences to their customers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-8 w-8 text-brand-white" />
                                </div>
                                <h3 className="font-bold text-2xl text-theme-text-primary mb-2">500+</h3>
                                <p className="text-sm text-theme-text-secondary">Happy Clients</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Target className="h-8 w-8 text-brand-white" />
                                </div>
                                <h3 className="font-bold text-2xl text-theme-text-primary mb-2">1000+</h3>
                                <p className="text-sm text-theme-text-secondary">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Award className="h-8 w-8 text-brand-white" />
                                </div>
                                <h3 className="font-bold text-2xl text-theme-text-primary mb-2">15+</h3>
                                <p className="text-sm text-theme-text-secondary">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="h-8 w-8 text-brand-white" />
                                </div>
                                <h3 className="font-bold text-2xl text-theme-text-primary mb-2">98%</h3>
                                <p className="text-sm text-theme-text-secondary">Satisfaction Rate</p>
                            </div>
                        </div>

                        <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8">
                            <h2 className="text-2xl font-bold text-theme-text-primary mb-4">Our Values</h2>
                            <ul className="space-y-3 text-theme-text-secondary">
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-red mt-1">✓</span>
                                    <span><strong>Quality First:</strong> We only stock equipment from trusted global brands</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-red mt-1">✓</span>
                                    <span><strong>Expert Service:</strong> Professional installation and ongoing support</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-red mt-1">✓</span>
                                    <span><strong>Customer Focus:</strong> Your success is our priority</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-brand-red mt-1">✓</span>
                                    <span><strong>Innovation:</strong> Staying ahead with the latest kitchen technology</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
