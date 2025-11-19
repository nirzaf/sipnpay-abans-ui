"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function OffersMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div
      className="absolute top-full left-0 w-full bg-theme-bg-surface shadow-xl border-t border-theme-border z-50 animate-in fade-in slide-in-from-top-2 duration-200"
      onMouseLeave={onClose}
    >
      <div className="w-full py-8 px-4 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold text-theme-text-primary mb-3">Hot Deals</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/offers" className="hover:text-brand-red">Today’s Offers</Link></li>
              <li><Link href="/clearance" className="hover:text-brand-red">Clearance</Link></li>
              <li><Link href="/collections" className="hover:text-brand-red">Bundles</Link></li>
              <li><Link href="/new-arrivals" className="hover:text-brand-red">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-theme-text-primary mb-3">Price Picks</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/search?price=0-10000" className="hover:text-brand-red">Under Rs. 10,000</Link></li>
              <li><Link href="/search?price=10000-25000" className="hover:text-brand-red">Rs. 10,000 - 25,000</Link></li>
              <li><Link href="/search?price=25000-50000" className="hover:text-brand-red">Rs. 25,000 - 50,000</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-theme-text-primary mb-3">Payment Plans</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/hire-purchase" className="hover:text-brand-red">Hire Purchase</Link></li>
              <li><Link href="/gift-vouchers" className="hover:text-brand-red">Gift Vouchers</Link></li>
              <li><Link href="/support" className="hover:text-brand-red">Warranty</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-theme-text-primary mb-3">Popular</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/brands" className="hover:text-brand-red">Top Brands</Link></li>
              <li><Link href="/offers" className="hover:text-brand-red">Online Exclusive</Link></li>
              <li><Link href="/collections" className="hover:text-brand-red">Top Selling</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}