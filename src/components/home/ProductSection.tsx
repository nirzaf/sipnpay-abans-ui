import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Product {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image: string;
    inStock: boolean;
}

interface ProductSectionProps {
    title: string;
    products: Product[];
    viewAllLink?: string;
    className?: string;
}

export function ProductSection({ title, products, viewAllLink = "#", className }: ProductSectionProps) {
    return (
        <section className={cn("py-8", className)}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-6 border-b border-[#333333] pb-2">
                    <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">
                        {title}
                    </h2>
                    <Link
                        href={viewAllLink}
                        className="text-sm font-bold text-white hover:text-[#b3b3b3] flex items-center transition-colors"
                    >
                        VIEW ALL &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-[#1f1f1f] border border-[#333333] rounded-lg overflow-hidden hover:border-white transition-all duration-300 relative flex flex-col"
                        >
                            {/* Discount Badge */}
                            {product.discount && (
                                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                                    {product.discount}% OFF
                                </div>
                            )}

                            {/* Wishlist Button */}
                            <button className="absolute top-2 right-2 p-2 rounded-full bg-[#0a0a0a]/80 text-[#b3b3b3] hover:text-white hover:bg-[#0a0a0a] transition-colors z-10 opacity-0 group-hover:opacity-100">
                                <Heart className="h-5 w-5" />
                            </button>

                            {/* Image Area */}
                            <Link href={`/product/${product.id}`} className="relative aspect-square bg-[#0a0a0a] p-4 block overflow-hidden">
                                <div className="w-full h-full relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                    {/* Placeholder for actual image */}
                                    <div className="w-3/4 h-3/4 bg-[#333333] rounded-md flex items-center justify-center text-[#b3b3b3] text-xs">
                                        Product Image
                                    </div>
                                </div>
                            </Link>

                            {/* Content */}
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="text-xs text-[#b3b3b3] mb-1">{product.brand}</div>
                                <Link href={`/product/${product.id}`} className="font-medium text-white hover:text-[#b3b3b3] line-clamp-2 mb-2 flex-grow transition-colors">
                                    {product.name}
                                </Link>

                                <div className="mt-auto">
                                    <div className="flex items-baseline space-x-2">
                                        <span className="text-lg font-bold text-white">
                                            Rs. {product.price.toLocaleString()}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="text-sm text-[#b3b3b3] line-through">
                                                Rs. {product.originalPrice.toLocaleString()}
                                            </span>
                                        )}
                                    </div>

                                    {product.originalPrice && product.price < product.originalPrice && (
                                        <div className="text-xs text-white font-medium mt-1">
                                            Save Rs. {(product.originalPrice - product.price).toLocaleString()}
                                        </div>
                                    )}

                                    <Button className="w-full mt-4 bg-white text-black hover:bg-[#b3b3b3] gap-2">
                                        <ShoppingCart className="h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
