"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

export default function WishlistPage() {
    // Demo: Use first 4 products as wishlist items
    const [wishlistItems] = useState(products.slice(0, 4));

    const totalValue = wishlistItems.reduce((sum, item) => sum + item.price, 0);
    const totalSavings = wishlistItems.reduce(
        (sum, item) => sum + (item.originalPrice ? item.originalPrice - item.price : 0),
        0
    );

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />

            <div className="flex-grow">
                <Breadcrumb items={[{ label: "My Wishlist" }]} />

                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    {wishlistItems.length === 0 ? (
                        // Empty Wishlist State
                        <div className="flex flex-col items-center justify-center py-16">
                            <div className="w-32 h-32 bg-theme-bg-surface rounded-full flex items-center justify-center mb-6">
                                <Heart className="h-16 w-16 text-theme-text-secondary" />
                            </div>
                            <h2 className="text-2xl font-bold text-theme-text-primary mb-2">
                                Your Wishlist is Empty
                            </h2>
                            <p className="text-theme-text-secondary mb-6 text-center max-w-md">
                                Start adding products you love to your wishlist. They'll be saved here for later!
                            </p>
                            <Button>
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Continue Shopping
                            </Button>
                        </div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                                <div>
                                    <h1 className="text-3xl font-bold text-theme-text-primary mb-2">
                                        My Wishlist
                                    </h1>
                                    <p className="text-theme-text-secondary">
                                        {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
                                    </p>
                                </div>

                                {/* Summary Card */}
                                <div className="mt-4 md:mt-0 bg-theme-bg-surface border border-theme-border rounded-lg p-4">
                                    <div className="text-sm text-theme-text-secondary mb-1">Total Value</div>
                                    <div className="text-2xl font-bold text-theme-text-primary">
                                        Rs. {totalValue.toLocaleString()}
                                    </div>
                                    {totalSavings > 0 && (
                                        <div className="text-sm text-green-600 font-medium mt-1">
                                            Potential Savings: Rs. {totalSavings.toLocaleString()}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Wishlist Items Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                                {wishlistItems.map((product) => (
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

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="min-w-[200px]">
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    Add All to Cart
                                </Button>
                                <Button variant="outline" size="lg" className="min-w-[200px]">
                                    Share Wishlist
                                </Button>
                            </div>

                            {/* Info Box */}
                            <div className="mt-12 bg-brand-red/10 border border-brand-red/20 rounded-lg p-6 text-center">
                                <h3 className="text-lg font-semibold text-theme-text-primary mb-2">
                                    💡 Price Drop Alerts
                                </h3>
                                <p className="text-sm text-theme-text-secondary">
                                    We'll notify you when items in your wishlist go on sale or drop in price!
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
