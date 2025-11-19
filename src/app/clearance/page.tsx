import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data";

export default function ClearancePage() {
    // Show products with discounts for clearance section
    const clearanceProducts = products.filter(p => p.discount && p.discount > 0);

    return (
        <main className="min-h-screen w-full flex flex-col bg-theme-bg-main">
            <Header />
            <div className="flex-grow">
                <Breadcrumb items={[{ label: "Clearance Sale" }]} />
                <div className="w-full px-2 sm:px-4 lg:px-8 py-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-brand-red text-brand-white px-4 py-2 rounded-full mb-4">
                            <span className="font-semibold text-sm">LIMITED TIME ONLY</span>
                        </div>
                        <h1 className="text-4xl font-bold text-theme-text-primary mb-4">Clearance Sale</h1>
                        <p className="text-lg text-theme-text-secondary max-w-2xl mx-auto">
                            Huge discounts on commercial kitchen equipment. While stocks last!
                        </p>
                    </div>

                    {clearanceProducts.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-theme-text-secondary text-lg">
                                No clearance items available at the moment. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {clearanceProducts.map((product) => (
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
                </div>
            </div>
            <Footer />
        </main>
    );
}
