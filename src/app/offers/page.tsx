import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductCard } from "@/components/ui/ProductCard";
import { offers, products } from "@/lib/data";
import Link from "next/link";
import { Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OffersPage() {
    // Get products with discounts
    const discountedProducts = products.filter(p => p.discount && p.discount > 0);

    const calculateTimeLeft = (validUntil: string) => {
        const difference = new Date(validUntil).getTime() - new Date().getTime();
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        return `${days} days left`;
    };

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />

            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Today's Offers" }]} />

                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-brand-red text-brand-white px-4 py-2 rounded-full mb-4">
                            <Tag className="h-4 w-4" />
                            <span className="font-semibold text-sm">LIMITED TIME OFFERS</span>
                        </div>
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
                            Today's Hot Deals
                        </h1>
                        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
                            Save big on premium commercial kitchen equipment. Limited stock available!
                        </p>
                    </div>

                    {/* Featured Offers */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        {offers.map((offer) => (
                            <div
                                key={offer.id}
                                className="group bg-gradient-to-br from-brand-red to-brand-red/80 text-brand-white rounded-lg p-6 relative overflow-hidden"
                            >
                                {/* Decorative Background */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-white rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-white rounded-full translate-y-1/2 -translate-x-1/2" />
                                </div>

                                <div className="relative z-10">
                                    {/* Discount Badge */}
                                    <div className="inline-block bg-brand-white text-brand-red font-bold text-2xl px-4 py-2 rounded-lg mb-4">
                                        {offer.discount}% OFF
                                    </div>

                                    {/* Offer Title */}
                                    <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
                                    <p className="text-brand-white/90 mb-4">{offer.description}</p>

                                    {/* Time Remaining */}
                                    <div className="flex items-center gap-2 text-sm mb-4">
                                        <Clock className="h-4 w-4" />
                                        <span>{calculateTimeLeft(offer.validUntil)}</span>
                                    </div>

                                    {/* CTA Button */}
                                    <Button
                                        variant="secondary"
                                        className="w-full bg-brand-white text-brand-red hover:bg-brand-white/90"
                                    >
                                        Shop Now
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Products on Sale */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-theme-text-primary">
                                Products on Sale
                            </h2>
                            <Link
                                href="/clearance"
                                className="text-brand-red hover:text-brand-red/80 font-semibold flex items-center gap-1"
                            >
                                View All Clearance
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {discountedProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    brand={product.brand}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    discount={product.discount}
                                    image={product.image}
                                    rating={product.rating}
                                    reviews={product.reviews}
                                    inStock={product.inStock}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Deal Alert Signup */}
                    <div className="mt-16 bg-theme-bg-surface border border-theme-border rounded-lg p-8 text-center">
                        <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
                            Never Miss a Deal!
                        </h2>
                        <p className="text-theme-text-secondary mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter and be the first to know about exclusive offers,
                            flash sales, and new product launches.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg border border-theme-border bg-theme-bg-main text-theme-text-primary focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none"
                            />
                            <Button className="px-8">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
