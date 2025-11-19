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
        <div
            className="absolute top-full left-0 w-full bg-theme-bg-surface shadow-xl border-t border-theme-border z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            onMouseLeave={onClose}
        >
            <div className="w-full py-10 px-4 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10">
                    {categories.map((category) => {
                        const Icon = categoryIcons[category.name] ?? CookingPot;
                        return (
                            <div key={category.name} className="space-y-4">
                                <div className="flex items-center gap-2 border-b border-theme-border pb-3">
                                    <Icon className="h-5 w-5 text-theme-text-primary" />
                                    <h3 className="font-bold text-theme-text-primary text-lg">{category.name}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {category.subcategories.map((sub) => (
                                        <li key={sub}>
                                            <Link
                                                href={`/category/${category.name.toLowerCase().replace(/ /g, "-")}/${sub.toLowerCase().replace(/ /g, "-")}`}
                                                className="text-theme-text-secondary hover:text-theme-text-primary hover:underline text-sm transition-colors"
                                                onClick={onClose}
                                            >
                                                {sub}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Overlay backing to close on click outside if needed, though mouseleave handles most */}
        </div>
    );
}
