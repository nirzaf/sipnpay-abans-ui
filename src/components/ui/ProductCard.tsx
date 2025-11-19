"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
    id: string;
    name: string;
    brand: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image: string;
    rating?: number;
    reviews?: number;
    inStock: boolean;
}

export function ProductCard({
    id,
    name,
    brand,
    price,
    originalPrice,
    discount,
    image,
    rating,
    reviews,
    inStock,
}: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (inStock) {
            addToCart({
                id,
                name,
                brand,
                price,
                image,
                inStock,
            });
        }
    };

    return (
        <div className="group bg-theme-bg-main border border-theme-border rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 relative flex flex-col">
            {/* Discount Badge */}
            {discount && (
                <div className="absolute top-2 left-2 bg-brand-red text-brand-white text-xs font-bold px-2 py-1 rounded z-10">
                    {discount}% OFF
                </div>
            )}

            {/* Stock Status */}
            {!inStock && (
                <div className="absolute top-2 right-2 bg-theme-text-secondary text-brand-white text-xs font-bold px-2 py-1 rounded z-10">
                    Out of Stock
                </div>
            )}

            {/* Wishlist Button */}
            <button
                className="absolute top-2 right-2 p-2 rounded-full bg-theme-bg-surface text-theme-text-primary hover:bg-brand-red hover:text-brand-white transition-colors z-10 opacity-0 group-hover:opacity-100 shadow-sm"
                aria-label="Add to wishlist"
            >
                <Heart className="h-5 w-5" />
            </button>

            {/* Image Area */}
            <Link href={`/product/${id}`} className="relative aspect-square bg-theme-bg-surface p-4 block overflow-hidden">
                <div className="w-full h-full relative group-hover:scale-105 transition-transform duration-500">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, (max-width: 1536px) 20vw, 16vw"
                        className="object-contain rounded-md"
                        priority={false}
                    />
                </div>
            </Link>

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="text-xs text-theme-text-secondary mb-1 flex items-center gap-2">
                    <span className={`inline-block h-2 w-2 rounded-full ${inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                    {brand}
                </div>

                <Link href={`/product/${id}`} className="font-medium text-theme-text-primary hover:text-brand-red line-clamp-2 mb-2 flex-grow transition-colors">
                    {name}
                </Link>

                {/* Rating */}
                {rating && reviews !== undefined && (
                    <div className="flex items-center gap-1 text-xs text-theme-text-secondary mb-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`h-3 w-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-theme-text-secondary'}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span>({reviews})</span>
                    </div>
                )}

                <div className="mt-auto">
                    <div className="flex items-baseline space-x-2">
                        <span className="text-lg font-bold text-theme-text-primary">
                            Rs. {price.toLocaleString()}
                        </span>
                        {originalPrice && (
                            <span className="text-sm text-theme-text-secondary line-through">
                                Rs. {originalPrice.toLocaleString()}
                            </span>
                        )}
                    </div>

                    {originalPrice && price < originalPrice && (
                        <div className="text-xs text-green-600 font-medium mt-1">
                            Save Rs. {(originalPrice - price).toLocaleString()}
                        </div>
                    )}

                    <Button className="w-full mt-4 gap-2" disabled={!inStock} onClick={handleAddToCart}>
                        <ShoppingCart className="h-4 w-4" />
                        {inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                </div>
            </div>
        </div>
    );
}
