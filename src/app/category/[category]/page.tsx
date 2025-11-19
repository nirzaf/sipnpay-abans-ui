"use client";

import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductCard } from "@/components/ui/ProductCard";
import { FilterSidebar } from "@/components/ui/FilterSidebar";
import { Button } from "@/components/ui/button";
import { products, brands } from "@/lib/data";
import { SlidersHorizontal, Grid3x3, List } from "lucide-react";

interface CategoryPageProps {
    params: {
        category: string;
    };
}

// Define available categories
const categories: Record<string, { name: string; description: string }> = {
    "cooking-equipment": {
        name: "Cooking Equipment",
        description: "Commercial ovens, ranges, grills, and cooking appliances",
    },
    "refrigeration": {
        name: "Refrigeration",
        description: "Commercial refrigerators, freezers, and cold storage solutions",
    },
    "food-prep": {
        name: "Food Preparation",
        description: "Mixers, processors, slicers, and prep equipment",
    },
    "dishwashing": {
        name: "Dishwashing",
        description: "Commercial dishwashers and warewashing equipment",
    },
    "serving-equipment": {
        name: "Serving Equipment",
        description: "Display cases, warmers, and serving solutions",
    },
    "storage": {
        name: "Storage & Shelving",
        description: "Shelving units, racks, and storage solutions",
    },
};

export default function CategoryPage({ params }: CategoryPageProps) {
    const [showFilters, setShowFilters] = useState(false);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [sortBy, setSortBy] = useState("featured");
    const [filters, setFilters] = useState<Record<string, string[]>>({});

    const categoryInfo = categories[params.category] || {
        name: params.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase()),
        description: "Browse our selection of commercial kitchen equipment",
    };

    // Define filter configuration
    const filterConfig = [
        {
            title: "Brand",
            options: brands.map((b) => ({ value: b.name, label: b.name })),
        },
        {
            title: "Price Range",
            options: [
                { value: "0-50000", label: "Under Rs. 50,000" },
                { value: "50000-100000", label: "Rs. 50,000 - 100,000" },
                { value: "100000-250000", label: "Rs. 100,000 - 250,000" },
                { value: "250000-500000", label: "Rs. 250,000 - 500,000" },
                { value: "500000+", label: "Over Rs. 500,000" },
            ],
        },
        {
            title: "Availability",
            options: [
                { value: "in-stock", label: "In Stock" },
                { value: "pre-order", label: "Pre-Order" },
            ],
        },
        {
            title: "Special Offers",
            options: [
                { value: "on-sale", label: "On Sale" },
                { value: "clearance", label: "Clearance" },
            ],
        },
    ];

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = [...products];

        // Apply brand filter
        if (filters.brand && filters.brand.length > 0) {
            result = result.filter((p) => filters.brand.includes(p.brand));
        }

        // Apply price range filter
        if (filters["Price Range"] && filters["Price Range"].length > 0) {
            result = result.filter((p) => {
                return filters["Price Range"].some((range) => {
                    if (range === "0-50000") return p.price < 50000;
                    if (range === "50000-100000") return p.price >= 50000 && p.price < 100000;
                    if (range === "100000-250000") return p.price >= 100000 && p.price < 250000;
                    if (range === "250000-500000") return p.price >= 250000 && p.price < 500000;
                    if (range === "500000+") return p.price >= 500000;
                    return false;
                });
            });
        }

        // Apply availability filter
        if (filters["Availability"] && filters["Availability"].length > 0) {
            result = result.filter((p) => {
                if (filters["Availability"].includes("in-stock")) return p.inStock;
                if (filters["Availability"].includes("pre-order")) return !p.inStock;
                return false;
            });
        }

        // Apply discount filter
        if (filters["Special Offers"] && filters["Special Offers"].length > 0) {
            result = result.filter((p) => {
                if (filters["Special Offers"].includes("on-sale")) return p.discount && p.discount > 0;
                if (filters["Special Offers"].includes("clearance"))
                    return p.discount && p.discount >= 20;
                return false;
            });
        }

        // Apply sorting
        if (sortBy === "price-low-high") {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-high-low") {
            result.sort((a, b) => b.price - a.price);
        } else if (sortBy === "name-a-z") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "rating") {
            result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }

        return result;
    }, [filters, sortBy]);

    const handleFilterChange = (newFilters: Record<string, string[]>) => {
        setFilters(newFilters);
    };

    const handleClearFilters = () => {
        setFilters({});
    };

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />

            <div className="flex-grow">
                <Breadcrumb
                    items={[
                        { label: "Shop", href: "/shop" },
                        { label: categoryInfo.name },
                    ]}
                />

                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    {/* Category Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-theme-text-primary mb-2">
                            {categoryInfo.name}
                        </h1>
                        <p className="text-theme-text-secondary">{categoryInfo.description}</p>
                    </div>

                    {/* Toolbar */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowFilters(!showFilters)}
                                className="lg:hidden"
                            >
                                <SlidersHorizontal className="h-4 w-4 mr-2" />
                                Filters
                            </Button>
                            <p className="text-sm text-theme-text-secondary">
                                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* View Mode Toggle */}
                            <div className="flex items-center gap-2 border border-theme-border rounded-md p-1">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-1.5 rounded ${viewMode === "grid" ? "bg-theme-bg-main" : ""}`}
                                    aria-label="Grid view"
                                >
                                    <Grid3x3 className="h-4 w-4 text-theme-text-primary" />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-1.5 rounded ${viewMode === "list" ? "bg-theme-bg-main" : ""}`}
                                    aria-label="List view"
                                >
                                    <List className="h-4 w-4 text-theme-text-primary" />
                                </button>
                            </div>

                            {/* Sort Dropdown */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 rounded-md border border-theme-border bg-theme-bg-surface text-theme-text-primary text-sm focus:ring-2 focus:ring-brand-red focus:border-brand-red outline-none"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low-high">Price: Low to High</option>
                                <option value="price-high-low">Price: High to Low</option>
                                <option value="name-a-z">Name: A-Z</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex gap-8">
                        {/* Filter Sidebar */}
                        <aside
                            className={`
                                ${showFilters ? "block" : "hidden lg:block"}
                                fixed lg:static inset-0 z-50 lg:z-0
                                bg-theme-bg-main lg:bg-transparent
                                overflow-y-auto
                                lg:w-64 lg:flex-shrink-0
                            `}
                        >
                            <div className="lg:sticky lg:top-4">
                                <FilterSidebar
                                    filters={filterConfig}
                                    onFilterChange={handleFilterChange}
                                    onClear={handleClearFilters}
                                />
                            </div>
                            {showFilters && (
                                <Button
                                    variant="outline"
                                    className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
                                    onClick={() => setShowFilters(false)}
                                >
                                    Close Filters
                                </Button>
                            )}
                        </aside>

                        {/* Products Grid/List */}
                        <div className="flex-1 min-w-0">
                            {filteredProducts.length === 0 ? (
                                <div className="text-center py-16">
                                    <p className="text-theme-text-secondary text-lg mb-4">
                                        No products found matching your filters.
                                    </p>
                                    <Button variant="outline" onClick={handleClearFilters}>
                                        Clear All Filters
                                    </Button>
                                </div>
                            ) : (
                                <div
                                    className={
                                        viewMode === "grid"
                                            ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                                            : "space-y-6"
                                    }
                                >
                                    {filteredProducts.map((product) => (
                                        <ProductCard
                                            key={product.id}
                                            id={product.id}
                                            name={product.name}
                                            brand={product.brand}
                                            price={product.price}
                                            originalPrice={product.originalPrice}
                                            discount={product.discount}
                                            image={product.image}
                                            rating={product.rating}
                                            reviews={product.reviews}
                                            inStock={product.inStock}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Pagination Placeholder */}
                            {filteredProducts.length > 12 && (
                                <div className="mt-12 flex justify-center gap-2">
                                    <Button variant="outline" size="sm" disabled>
                                        Previous
                                    </Button>
                                    <Button variant="outline" size="sm" className="bg-brand-red text-brand-white">
                                        1
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        2
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        3
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        Next
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
