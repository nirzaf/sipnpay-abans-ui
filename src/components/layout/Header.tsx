"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, Menu, Phone, MapPin, User, ChevronDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MegaMenu } from "./MegaMenu";
import { cn } from "@/lib/utils";

export function Header() {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    return (
        <header className="w-full flex flex-col border-b border-[#333333]">
            {/* 1. Top Utility Bar */}
            <div className="bg-[#1f1f1f] text-xs py-2 border-b border-[#333333] hidden md:block">
                <div className="w-full px-2 sm:px-4 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center cursor-pointer hover:text-white text-[#b3b3b3] transition-colors">
                            <span>Currency: LKR</span>
                            <ChevronDown className="h-3 w-3 ml-1" />
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-white text-[#b3b3b3] transition-colors">
                            <span>EN</span>
                            <ChevronDown className="h-3 w-3 ml-1" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 text-[#b3b3b3]">
                        <Link href="/track-order" className="flex items-center hover:text-white transition-colors">
                            <MapPin className="h-3 w-3 mr-1" />
                            Track Order
                        </Link>
                        <a href="tel:+94112222888" className="flex items-center hover:text-white transition-colors">
                            <Phone className="h-3 w-3 mr-1" />
                            +94 112 222 888
                        </a>
                        <Link href="/login" className="hover:text-white transition-colors">Login</Link>
                        <Link href="/signup" className="hover:text-white transition-colors">Sign Up</Link>
                    </div>
                </div>
            </div>

            {/* 2. Main Header */}
            <div className="py-6 bg-[#0a0a0a] border-b border-[#333333] sticky top-0 z-40">
                <div className="w-full px-2 sm:px-4 lg:px-8 flex flex-wrap items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-white tracking-tighter">Sip & Play</span>
                            <span className="text-xs text-[#b3b3b3] font-bold tracking-widest uppercase">Commercial Kitchenware</span>
                        </div>
                    </Link>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl relative hidden md:block">
                        <div className="relative flex items-center">
                            <Input
                                type="text"
                                placeholder="Search for commercial ovens, blenders..."
                                className="w-full pl-4 pr-12 py-6 rounded-full border-2 border-[#333333] bg-[#1f1f1f] text-white placeholder:text-[#b3b3b3] focus-visible:ring-white focus-visible:border-white"
                            />
                            <Button
                                size="icon"
                                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 bg-white hover:bg-[#b3b3b3] text-black"
                            >
                                <Search className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2 md:space-x-6">
                        <Link href="/wishlist" className="hidden md:flex flex-col items-center text-[#b3b3b3] hover:text-white transition-colors">
                            <Heart className="h-6 w-6" />
                            <span className="text-xs mt-1 font-medium">Wishlist</span>
                        </Link>

                        <div className="flex flex-col items-center text-[#b3b3b3] hover:text-white transition-colors cursor-pointer relative group">
                            <div className="relative">
                                <ShoppingCart className="h-6 w-6" />
                                <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                                    0
                                </span>
                            </div>
                            <span className="text-xs mt-1 font-medium hidden md:block">Cart</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Navigation Menu */}
            <div className="bg-[#1f1f1f] text-white relative z-30 border-b border-[#333333]">
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
                                    "flex items-center space-x-2 py-3 px-4 font-bold uppercase tracking-wide transition-colors",
                                    isMegaMenuOpen ? "bg-[#333333] text-white" : "bg-[#1f1f1f] hover:bg-[#333333]"
                                )}
                            >
                                <Menu className="h-5 w-5" />
                                <span>All Categories</span>
                                <ChevronDown className="h-4 w-4 ml-1" />
                            </button>

                            {/* Mega Menu Component */}
                            <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
                        </div>

                        {/* Nav Links */}
                        <nav className="hidden md:flex items-center space-x-1 ml-4 overflow-x-auto">
                            <Link href="/brands" className="px-4 py-3 hover:bg-[#333333] text-sm font-medium whitespace-nowrap transition-colors">Brands</Link>
                            <Link href="/offers" className="px-4 py-3 hover:bg-[#333333] text-sm font-medium whitespace-nowrap flex items-center transition-colors">
                                <span className="mr-1">🔥</span> TODAY'S OFFER
                            </Link>
                            <Link href="/commercial-projects" className="px-4 py-3 hover:bg-[#333333] text-sm font-medium whitespace-nowrap transition-colors">Commercial Projects</Link>
                            <Link href="/gift-vouchers" className="px-4 py-3 hover:bg-[#333333] text-sm font-medium whitespace-nowrap transition-colors">Gift Vouchers</Link>
                            <Link href="/support" className="px-4 py-3 hover:bg-[#333333] text-sm font-medium whitespace-nowrap transition-colors">Support</Link>
                        </nav>

                        {/* Mobile Menu Toggle (Placeholder) */}
                        <button className="md:hidden p-3 hover:bg-[#333333] rounded transition-colors">
                            <Menu className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
