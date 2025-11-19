import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { brands } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Package } from "lucide-react";

export default function BrandsPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />

            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Brands" }]} />

                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
                            Our Premium Brands
                        </h1>
                        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
                            We partner with the world's leading manufacturers of commercial kitchen equipment
                            to bring you the best quality products for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {brands.map((brand) => (
                            <Link
                                key={brand.name}
                                href={`/brands/${brand.name.toLowerCase().replace(/ /g, "-")}`}
                                className="group bg-theme-bg-surface border border-theme-border rounded-lg p-6 hover:border-brand-red hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    {/* Brand Logo Placeholder */}
                                    <div className="w-32 h-32 bg-theme-bg-main border border-theme-border rounded-lg flex items-center justify-center group-hover:border-brand-red transition-colors">
                                        <Package className="h-16 w-16 text-theme-text-secondary group-hover:text-brand-red transition-colors" />
                                    </div>

                                    {/* Brand Name */}
                                    <h2 className="text-xl font-bold text-theme-text-primary group-hover:text-brand-red transition-colors">
                                        {brand.name}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-sm text-theme-text-secondary line-clamp-3">
                                        {brand.description}
                                    </p>

                                    {/* Product Count */}
                                    <div className="mt-auto pt-4 border-t border-theme-border w-full">
                                        <p className="text-sm text-theme-text-secondary">
                                            <span className="font-semibold text-theme-text-primary">
                                                {brand.productsCount}
                                            </span>{" "}
                                            Products Available
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Brand Benefits Section */}
                    <div className="mt-16 bg-theme-bg-surface border border-theme-border rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-theme-text-primary mb-6 text-center">
                            Why Choose Authorized Brands?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="h-8 w-8 text-brand-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-theme-text-primary mb-2">Genuine Products</h3>
                                <p className="text-sm text-theme-text-secondary">
                                    100% authentic products directly from manufacturers
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="h-8 w-8 text-brand-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-theme-text-primary mb-2">Warranty Support</h3>
                                <p className="text-sm text-theme-text-secondary">
                                    Full manufacturer warranty and service support
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="h-8 w-8 text-brand-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-theme-text-primary mb-2">Expert Training</h3>
                                <p className="text-sm text-theme-text-secondary">
                                    Professional installation and staff training included
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
