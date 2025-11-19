import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
    const product = products.find((p) => p.id === params.id);

    if (!product) {
        notFound();
    }

    // Get related products (same category)
    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />

            <div className="flex-grow">
                <Breadcrumb
                    items={[
                        { label: product.category, href: `/category/${product.category.toLowerCase().replace(/ /g, "-")}` },
                        { label: product.subcategory, href: `/category/${product.category.toLowerCase().replace(/ /g, "-")}/${product.subcategory.toLowerCase().replace(/ /g, "-")}` },
                        { label: product.name },
                    ]}
                />

                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    {/* Product Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="relative aspect-square bg-theme-bg-surface rounded-lg overflow-hidden border border-theme-border p-8">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                {product.discount && (
                                    <div className="absolute top-4 left-4 bg-brand-red text-brand-white px-3 py-1 rounded-full text-sm font-bold">
                                        {product.discount}% OFF
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <span className="text-sm text-theme-text-secondary">{product.brand}</span>
                            </div>

                            <h1 className="text-3xl font-bold text-theme-text-primary mb-4">
                                {product.name}
                            </h1>

                            {/* Rating */}
                            {product.rating && (
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`h-5 w-5 ${
                                                    i < Math.floor(product.rating!)
                                                        ? "text-yellow-400 fill-current"
                                                        : "text-theme-text-secondary"
                                                }`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <span className="text-sm text-theme-text-secondary">
                                        {product.rating} ({product.reviews} reviews)
                                    </span>
                                </div>
                            )}

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-3">
                                    <span className="text-4xl font-bold text-theme-text-primary">
                                        Rs. {product.price.toLocaleString()}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="text-xl text-theme-text-secondary line-through">
                                            Rs. {product.originalPrice.toLocaleString()}
                                        </span>
                                    )}
                                </div>
                                {product.originalPrice && (
                                    <p className="text-green-600 font-medium mt-2">
                                        You save Rs. {(product.originalPrice - product.price).toLocaleString()}
                                    </p>
                                )}
                            </div>

                            {/* Stock Status */}
                            <div className="mb-6">
                                <span
                                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                                        product.inStock
                                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                            : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                                    }`}
                                >
                                    <span className={`h-2 w-2 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                </span>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h2 className="font-semibold text-theme-text-primary mb-2">Description</h2>
                                <p className="text-theme-text-secondary leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-4 mb-8">
                                <Button size="lg" className="flex-1" disabled={!product.inStock}>
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    Add to Cart
                                </Button>
                                <Button variant="outline" size="lg">
                                    <Heart className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    <Share2 className="h-5 w-5" />
                                </Button>
                            </div>

                            {/* Features */}
                            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-theme-border">
                                <div className="flex flex-col items-center text-center">
                                    <Truck className="h-8 w-8 text-brand-red mb-2" />
                                    <span className="text-xs text-theme-text-secondary">Free Delivery</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <Shield className="h-8 w-8 text-brand-red mb-2" />
                                    <span className="text-xs text-theme-text-secondary">2 Year Warranty</span>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <RotateCcw className="h-8 w-8 text-brand-red mb-2" />
                                    <span className="text-xs text-theme-text-secondary">30 Day Returns</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-bold text-theme-text-primary mb-6">
                                Related Products
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {relatedProducts.map((relatedProduct) => (
                                    <ProductCard
                                        key={relatedProduct.id}
                                        id={relatedProduct.id}
                                        name={relatedProduct.name}
                                        brand={relatedProduct.brand}
                                        price={relatedProduct.price}
                                        originalPrice={relatedProduct.originalPrice}
                                        discount={relatedProduct.discount}
                                        image={relatedProduct.image}
                                        rating={relatedProduct.rating}
                                        reviews={relatedProduct.reviews}
                                        inStock={relatedProduct.inStock}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
