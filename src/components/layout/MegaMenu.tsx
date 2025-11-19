"use client";

import Link from "next/link";
import { categories } from "@/lib/data";
import { cn } from "@/lib/utils";
import { CookingPot, CupSoda, Utensils, UtensilsCrossed, Armchair } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
    "Commercial Kitchen": CookingPot,
    "Bar Equipment": CupSoda,
    "Tableware": Utensils,
    "Kitchenware": UtensilsCrossed,
    "Furniture": Armchair,
};

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="absolute top-full left-0 w-full bg-theme-bg-surface shadow-2xl border-t border-theme-border z-50 animate-in fade-in slide-in-from-top-2 duration-200" onMouseLeave={onClose}>
            <div className="w-full py-6 px-4 lg:px-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-theme-text-primary tracking-wider uppercase">Shop by Category</h3>
                    <Link href="/categories" className="text-xs font-semibold text-brand-red">VIEW ALL →</Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-10">
                    <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {categories.map((category) => {
                            const Icon = categoryIcons[category.name] ?? CookingPot;
                            return (
                                <div key={category.name} className="space-y-3">
                                    <div className="flex items-center gap-2 border-b border-theme-border pb-2">
                                        <Icon className="h-5 w-5 text-theme-text-primary" />
                                        <span className="font-semibold text-theme-text-primary text-sm">{category.name}</span>
                                    </div>
                                    <ul className="space-y-1">
                                        {category.subcategories.map((sub) => (
                                            <li key={sub}>
                                                <Link href={`/category/${category.name.toLowerCase().replace(/ /g, "-")}/${sub.toLowerCase().replace(/ /g, "-")}`} className="text-theme-text-secondary hover:text-brand-red text-xs transition-colors" onClick={onClose}>
                                                    {sub}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 gap-3">
                        <Link href="/offers" className="relative h-28 rounded-lg overflow-hidden border border-theme-border">
                            <img src="/sipnplay-slide1.jpg" alt="Deal" className="w-full h-full object-cover" />
                        </Link>
                        <Link href="/collections" className="relative h-28 rounded-lg overflow-hidden border border-theme-border">
                            <img src="/sipnplay2.jpg" alt="Collection" className="w-full h-full object-cover" />
                        </Link>
                        <div className="grid grid-cols-2 gap-3">
                            <Link href="/brands" className="px-3 py-2 border border-theme-border rounded-md text-xs font-semibold hover:bg-theme-bg-main">Top Brands</Link>
                            <Link href="/clearance" className="px-3 py-2 border border-theme-border rounded-md text-xs font-semibold hover:bg-theme-bg-main">Clearance</Link>
                        </div>
                    </div>
                </div>
                <div className="h-4" />
            </div>
        </div>
    );
}
