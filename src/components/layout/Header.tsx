"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, Phone, MapPin, ChevronDown, Heart, Badge, Flame, Gift, LifeBuoy, Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MegaMenu } from "./MegaMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

export function Header() {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { itemCount } = useCart();

    return (
        <header className="w-full flex flex-col border-b border-theme-border">
            <div className="w-full bg-brand-red text-brand-white text-xs md:text-sm">
                <div className="w-full px-2 sm:px-4 lg:px-8 py-2 flex items-center justify-between">
                    <span className="font-semibold">Enjoy an extra 10% OFF on used preowned</span>
                    <Link href="/offers" className="bg-brand-white text-brand-red px-3 py-1 rounded-full font-bold hover:bg-brand-white/90 transition-colors">Shop Deals</Link>
                </div>
            </div>
            {/* 1. Top Utility Bar */}
            <div className="bg-theme-bg-surface text-xs py-2 border-b border-theme-border hidden md:block">
                <div className="w-full px-2 sm:px-4 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center cursor-pointer hover:text-theme-text-primary text-theme-text-secondary transition-colors">
                            <span>Currency: LKR</span>
                            <ChevronDown className="h-3 w-3 ml-1" />
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-theme-text-primary text-theme-text-secondary transition-colors">
                            <span>EN</span>
                            <ChevronDown className="h-3 w-3 ml-1" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 text-theme-text-secondary">
                        <Link href="/track-order" className="flex items-center hover:text-theme-text-primary transition-colors">
                            <MapPin className="h-3 w-3 mr-1" />
                            Track Order
                        </Link>
                        <a href="tel:+94112222888" className="flex items-center hover:text-theme-text-primary transition-colors">
                            <Phone className="h-3 w-3 mr-1" />
                            +94 112 222 888
                        </a>
                        <Link href="/login" className="hover:text-theme-text-primary transition-colors">Login</Link>
                        <Link href="/signup" className="hover:text-theme-text-primary transition-colors">Sign Up</Link>
                    </div>
                </div>
            </div>

            {/* 2. Main Header */}
            <div className="py-6 bg-theme-bg-main border-b border-theme-border sticky top-0 z-40">
                <div className="w-full px-2 sm:px-4 lg:px-8 flex flex-wrap items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-theme-text-primary tracking-tighter">Sip & Play</span>
                            <span className="text-xs text-theme-text-secondary font-bold tracking-widest uppercase">Commercial Kitchenware</span>
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl relative hidden md:block">
                        <div className="relative flex items-center">
                            <Input
                                type="text"
                                placeholder="Search for products, categories and more"
                                className="w-full pl-4 pr-12 py-6 rounded-full border-2 border-theme-border bg-theme-bg-surface text-theme-text-primary placeholder:text-theme-text-secondary focus-visible:ring-brand-red focus-visible:border-brand-red"
                            />
                            <Button
                                size="icon"
                                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 w-10"
                            >
                                <Search className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <ThemeToggle />

                        <Link href="/wishlist" className="hidden md:flex flex-col items-center text-theme-text-secondary hover:text-theme-text-primary transition-colors">
                            <Heart className="h-6 w-6" />
                            <span className="text-xs mt-1 font-medium">Wishlist</span>
                        </Link>

                        <Link href="/cart" className="flex flex-col items-center text-theme-text-secondary hover:text-theme-text-primary transition-colors relative group">
                            <div className="relative">
                                <ShoppingCart className="h-6 w-6" />
                                {itemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-brand-red text-brand-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                                        {itemCount > 99 ? '99+' : itemCount}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs mt-1 font-medium hidden md:block">Cart</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 3. Navigation Menu */}
            <div className="bg-theme-bg-surface text-theme-text-primary relative z-30 border-b border-theme-border">
                <div className="w-full px-2 sm:px-4 lg:px-8">
                    <div className="flex items-center justify-between md:justify-start">
                        {/* All Categories Trigger */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsMegaMenuOpen(true)}
                            onMouseLeave={() => setIsMegaMenuOpen(false)}
                        >
                            <button
                                className={cn(
                                    "flex items-center space-x-3 py-4 px-5 text-sm md:text-base font-bold uppercase tracking-wide transition-colors",
                                    isMegaMenuOpen ? "bg-theme-border" : "bg-theme-bg-surface hover:bg-theme-bg-main"
                                )}
                            >
                                <Menu className="h-6 w-6" />
                                <span>All Categories</span>
                                <ChevronDown className="h-5 w-5 ml-1" />
                            </button>

                            {/* Mega Menu Component */}
                            <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
                        </div>

                        {/* Nav Links */}
                        <nav className="hidden md:flex items-center space-x-1 ml-4 overflow-x-auto">
                            <Link href="/brands" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <Badge className="h-4 w-4" /> Brands
                            </Link>
                            <Link href="/offers" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <Flame className="h-4 w-4" /> Today's Offer
                            </Link>
                            <Link href="/hire-purchase" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap transition-colors">
                                Hire Purchase
                            </Link>
                            <Link href="/commercial-projects" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <Building2 className="h-4 w-4" /> Commercial Projects
                            </Link>
                            <Link href="/gift-vouchers" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <Gift className="h-4 w-4" /> Gift Vouchers
                            </Link>
                            <Link href="/loyalty" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap transition-colors">
                                Loyalty / Rewards
                            </Link>
                            <Link href="/track-order" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <MapPin className="h-4 w-4" /> Track Order
                            </Link>
                            <a href="tel:+94112222888" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <Phone className="h-4 w-4" /> +94 112 222 888
                            </a>
                            <Link href="/locations" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap transition-colors">
                                Showroom Locator
                            </Link>
                            <Link href="/support" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <LifeBuoy className="h-4 w-4" /> Support
                            </Link>
                            <Link href="/new-arrivals" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <Sparkles className="h-4 w-4" /> New Arrivals
                            </Link>
                            <Link href="/clearance" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <Flame className="h-4 w-4" /> Clearance
                            </Link>
                            <Link href="/collections" className="px-5 py-4 hover:bg-theme-bg-main text-sm font-semibold whitespace-nowrap flex items-center gap-2 transition-colors">
                                <Badge className="h-4 w-4" /> Collections
                            </Link>
                        </nav>

                        <button
                            className="md:hidden p-3 hover:bg-theme-bg-main rounded transition-colors"
                            onClick={() => setIsMobileMenuOpen((v) => !v)}
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden w-full bg-theme-bg-main border-t border-theme-border">
                        <div className="px-2 sm:px-4 py-2 grid grid-cols-1">
                            <Link href="/brands" className="px-3 py-3 flex items-center gap-2 border-b border-theme-border">
                                <Badge className="h-4 w-4" /> Brands
                            </Link>
                            <Link href="/offers" className="px-3 py-3 flex items-center gap-2 border-b border-theme-border">
                                <Flame className="h-4 w-4" /> Today's Offer
                            </Link>
                            <Link href="/new-arrivals" className="px-3 py-3 flex items-center gap-2 border-b border-theme-border">
                                <Sparkles className="h-4 w-4" /> New Arrivals
                            </Link>
                            <Link href="/clearance" className="px-3 py-3 flex items-center gap-2 border-b border-theme-border">
                                <Flame className="h-4 w-4" /> Clearance
                            </Link>
                            <Link href="/collections" className="px-3 py-3 flex items-center gap-2 border-b border-theme-border">
                                <Badge className="h-4 w-4" /> Collections
                            </Link>
                            <Link href="/gift-vouchers" className="px-3 py-3 flex items-center gap-2 border-b border-theme-border">
                                <Gift className="h-4 w-4" /> Gift Vouchers
                            </Link>
                            <Link href="/support" className="px-3 py-3 flex items-center gap-2">
                                <LifeBuoy className="h-4 w-4" /> Support
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
