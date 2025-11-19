import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { collections } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, ShoppingCart } from "lucide-react";

export default function CollectionsPage() {
    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />

            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Collections" }]} />

                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    {/* Page Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4">
                            Curated Collections
                        </h1>
                        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
                            Complete kitchen setups handpicked by our experts. Save time and money with our
                            pre-configured bundles designed for specific needs.
                        </p>
                    </div>

                    {/* Collections Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {collections.map((collection, index) => (
                            <div
                                key={collection.id}
                                className="group bg-theme-bg-surface border border-theme-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                            >
                                {/* Image Placeholder */}
                                <div className="relative h-64 bg-gradient-to-br from-brand-red/10 to-theme-bg-main flex items-center justify-center border-b border-theme-border">
                                    <Package className="h-24 w-24 text-brand-red/30" />
                                    <div className="absolute top-4 right-4 bg-brand-red text-brand-white px-3 py-1 rounded-full text-sm font-bold">
                                        {collection.productCount} Items
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-theme-text-primary mb-3 group-hover:text-brand-red transition-colors">
                                        {collection.name}
                                    </h2>
                                    <p className="text-theme-text-secondary mb-4 line-clamp-2">
                                        {collection.description}
                                    </p>

                                    {/* Price */}
                                    <div className="flex items-baseline gap-2 mb-6">
                                        <span className="text-3xl font-bold text-theme-text-primary">
                                            Rs. {collection.price.toLocaleString()}
                                        </span>
                                        <span className="text-sm text-green-600 font-medium">
                                            Save up to 20%
                                        </span>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <Button className="flex-1">
                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                            Add Collection
                                        </Button>
                                        <Link href={`/collections/${collection.id}`} className="flex-1">
                                            <Button variant="outline" className="w-full">
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Why Choose Collections */}
                    <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-8">
                        <h2 className="text-2xl font-bold text-theme-text-primary mb-8 text-center">
                            Why Choose Our Collections?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="h-8 w-8 text-brand-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-theme-text-primary mb-2 text-lg">Cost Savings</h3>
                                <p className="text-sm text-theme-text-secondary">
                                    Save up to 20% compared to buying items individually
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="h-8 w-8 text-brand-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-theme-text-primary mb-2 text-lg">Expert Curated</h3>
                                <p className="text-sm text-theme-text-secondary">
                                    Professionally selected equipment that works perfectly together
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="h-8 w-8 text-brand-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-theme-text-primary mb-2 text-lg">Quick Setup</h3>
                                <p className="text-sm text-theme-text-secondary">
                                    Get your kitchen operational faster with complete solutions
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
