import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, CreditCard, ShieldCheck } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-theme-bg-main text-theme-text-secondary pt-16 pb-8 border-t border-theme-border">
            <div className="w-full px-2 sm:px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <h3 className="text-theme-text-primary font-bold text-lg mb-6">About Sip & Play</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-theme-text-primary transition-colors">Our Story</Link></li>
                            <li><Link href="/locations" className="hover:text-theme-text-primary transition-colors">Showroom Locations</Link></li>
                            <li><Link href="/careers" className="hover:text-theme-text-primary transition-colors">Careers</Link></li>
                            <li><Link href="/press" className="hover:text-theme-text-primary transition-colors">Press & Media</Link></li>
                            <li><Link href="/projects" className="hover:text-theme-text-primary transition-colors">Commercial Projects</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Shop */}
                    <div>
                        <h3 className="text-theme-text-primary font-bold text-lg mb-6">Shop</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/categories" className="hover:text-theme-text-primary transition-colors">All Categories</Link></li>
                            <li><Link href="/brands" className="hover:text-theme-text-primary transition-colors">Brands</Link></li>
                            <li><Link href="/deals" className="hover:text-theme-text-primary transition-colors">Daily Deals</Link></li>
                            <li><Link href="/gift-cards" className="hover:text-theme-text-primary transition-colors">Gift Cards</Link></li>
                            <li><Link href="/new-arrivals" className="hover:text-theme-text-primary transition-colors">New Arrivals</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="text-theme-text-primary font-bold text-lg mb-6">Support</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/contact" className="hover:text-theme-text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="/faq" className="hover:text-theme-text-primary transition-colors">FAQs</Link></li>
                            <li><Link href="/shipping" className="hover:text-theme-text-primary transition-colors">Shipping Policy</Link></li>
                            <li><Link href="/returns" className="hover:text-theme-text-primary transition-colors">Returns & Refunds</Link></li>
                            <li><Link href="/track-order" className="hover:text-theme-text-primary transition-colors">Track Your Order</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Follow & Newsletter */}
                    <div>
                        <h3 className="text-theme-text-primary font-bold text-lg mb-6">Stay Connected</h3>
                        <div className="flex space-x-4 mb-8">
                            <a href="#" className="bg-theme-bg-surface p-2 rounded-full hover:bg-brand-red hover:text-brand-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-theme-bg-surface p-2 rounded-full hover:bg-brand-red hover:text-brand-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-theme-bg-surface p-2 rounded-full hover:bg-brand-red hover:text-brand-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="bg-theme-bg-surface p-2 rounded-full hover:bg-brand-red hover:text-brand-white transition-colors">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                        <h4 className="text-theme-text-primary font-bold text-sm mb-3">Secure Payments</h4>
                        <div className="flex items-center space-x-2 text-theme-text-secondary">
                            <CreditCard className="h-8 w-8" />
                            <span className="text-xs">Visa, Mastercard, Amex</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-theme-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-theme-text-secondary">
                    <div className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Sip & Play Commercial Kitchenware. All Rights Reserved.
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="hover:text-theme-text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-theme-text-primary transition-colors">Terms & Conditions</Link>
                        <Link href="/cookies" className="hover:text-theme-text-primary transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

