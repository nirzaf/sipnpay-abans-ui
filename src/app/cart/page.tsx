"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, itemCount, subtotal, clearCart } = useCart();

    const shipping = subtotal > 100000 ? 0 : 5000;
    const tax = subtotal * 0.08; // 8% VAT
    const total = subtotal + shipping + tax;

    if (items.length === 0) {
        return (
            <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
                <Header />
                <div className="flex-grow">
                    <Breadcrumb items={[{ label: "Shopping Cart" }]} />
                    <div className="w-full px-2 sm:px-4 lg:px-8 py-16">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="w-32 h-32 bg-theme-bg-surface rounded-full flex items-center justify-center mx-auto mb-6">
                                <ShoppingBag className="h-16 w-16 text-theme-text-secondary" />
                            </div>
                            <h1 className="text-3xl font-bold text-theme-text-primary mb-4">
                                Your Cart is Empty
                            </h1>
                            <p className="text-theme-text-secondary mb-8">
                                Looks like you haven't added any items to your cart yet.
                            </p>
                            <Button asChild size="lg">
                                <Link href="/">
                                    Continue Shopping
                                    <ArrowRight className="h-5 w-5 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Shopping Cart" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="text-2xl font-bold text-theme-text-primary">
                                    Shopping Cart ({itemCount} {itemCount === 1 ? "item" : "items"})
                                </h1>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={clearCart}
                                    className="text-brand-red hover:text-brand-red/80"
                                >
                                    Clear Cart
                                </Button>
                            </div>

                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-theme-bg-surface border border-theme-border rounded-lg p-4 sm:p-6"
                                    >
                                        <div className="flex gap-4">
                                            {/* Product Image */}
                                            <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-theme-bg-main rounded-lg overflow-hidden">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between gap-4">
                                                    <div>
                                                        <Link
                                                            href={`/product/${item.id}`}
                                                            className="text-lg font-semibold text-theme-text-primary hover:text-brand-red transition-colors line-clamp-2"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                        <p className="text-sm text-theme-text-secondary mt-1">
                                                            {item.brand}
                                                        </p>
                                                        {!item.inStock && (
                                                            <p className="text-sm text-brand-red mt-2">
                                                                Currently out of stock
                                                            </p>
                                                        )}
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-xl font-bold text-theme-text-primary">
                                                            Rs. {item.price.toLocaleString()}
                                                        </p>
                                                        {item.quantity > 1 && (
                                                            <p className="text-sm text-theme-text-secondary">
                                                                Rs. {(item.price * item.quantity).toLocaleString()} total
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Quantity and Remove */}
                                                <div className="flex items-center justify-between mt-4">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(item.id, item.quantity - 1)
                                                            }
                                                            className="w-8 h-8 rounded-md border border-theme-border bg-theme-bg-main hover:bg-theme-bg-surface flex items-center justify-center text-theme-text-primary"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            <Minus className="h-4 w-4" />
                                                        </button>
                                                        <input
                                                            type="number"
                                                            min="1"
                                                            max="99"
                                                            value={item.quantity}
                                                            onChange={(e) => {
                                                                const value = parseInt(e.target.value);
                                                                if (!isNaN(value) && value > 0) {
                                                                    updateQuantity(item.id, value);
                                                                }
                                                            }}
                                                            className="w-16 h-8 text-center rounded-md border border-theme-border bg-theme-bg-main text-theme-text-primary focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none"
                                                        />
                                                        <button
                                                            onClick={() =>
                                                                updateQuantity(item.id, item.quantity + 1)
                                                            }
                                                            className="w-8 h-8 rounded-md border border-theme-border bg-theme-bg-main hover:bg-theme-bg-surface flex items-center justify-center text-theme-text-primary"
                                                            aria-label="Increase quantity"
                                                        >
                                                            <Plus className="h-4 w-4" />
                                                        </button>
                                                    </div>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-brand-red hover:text-brand-red/80"
                                                    >
                                                        <Trash2 className="h-4 w-4 mr-2" />
                                                        Remove
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Continue Shopping */}
                            <div className="mt-6">
                                <Button variant="outline" asChild>
                                    <Link href="/">Continue Shopping</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:w-96">
                            <div className="bg-theme-bg-surface border border-theme-border rounded-lg p-6 sticky top-4">
                                <h2 className="text-xl font-bold text-theme-text-primary mb-6">
                                    Order Summary
                                </h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-theme-text-secondary">
                                        <span>Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
                                        <span className="text-theme-text-primary font-medium">
                                            Rs. {subtotal.toLocaleString()}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-theme-text-secondary">
                                        <span>Shipping</span>
                                        <span className="text-theme-text-primary font-medium">
                                            {shipping === 0 ? (
                                                <span className="text-green-600">FREE</span>
                                            ) : (
                                                `Rs. ${shipping.toLocaleString()}`
                                            )}
                                        </span>
                                    </div>
                                    {shipping > 0 && (
                                        <p className="text-xs text-theme-text-secondary">
                                            Free shipping on orders over Rs. 100,000
                                        </p>
                                    )}
                                    <div className="flex justify-between text-theme-text-secondary">
                                        <span>VAT (8%)</span>
                                        <span className="text-theme-text-primary font-medium">
                                            Rs. {tax.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>
                                    <div className="border-t border-theme-border pt-4">
                                        <div className="flex justify-between">
                                            <span className="text-lg font-bold text-theme-text-primary">Total</span>
                                            <span className="text-2xl font-bold text-brand-red">
                                                Rs. {total.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full mb-4" size="lg">
                                    Proceed to Checkout
                                    <ArrowRight className="h-5 w-5 ml-2" />
                                </Button>

                                <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg p-4 text-center">
                                    <p className="text-sm text-theme-text-primary">
                                        <span className="font-semibold">Secure Checkout</span>
                                        <br />
                                        Your payment information is protected
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
