import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ProductSection } from "@/components/home/ProductSection";
import { products } from "@/lib/data";
import { CategoryTiles } from "@/components/home/CategoryTiles";

export default function Home() {
  // Filter products for different sections (mock logic)
  const featuredDeals = products.slice(0, 4);
  const commercialKitchen = products.filter(p => p.category === "Commercial Kitchen");
  const barEquipment = products.filter(p => p.category === "Bar Equipment");
  const newArrivals = products.slice(4, 8);

  return (
    <main className="min-h-[100dvh] w-full flex flex-col font-sans bg-theme-bg-main">
      <Header />

      <div className="flex-grow">
        <HeroSlider />
        <CategoryTiles />

        {/* Featured Deals */}
        <ProductSection
          title="Featured Deals"
          products={featuredDeals}
          className="bg-theme-bg-surface"
        />

        <div className="w-full px-2 sm:px-4 lg:px-8 py-4">
          <div className="w-full h-32 md:h-48 bg-theme-bg-surface rounded-lg flex items-center justify-center text-theme-text-primary border border-theme-border">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Complete Commercial Kitchen Setups</h3>
              <p className="text-theme-text-secondary">Consultation to Installation - We do it all</p>
            </div>
          </div>
        </div>

        {/* Commercial Kitchen */}
        <ProductSection
          title="Commercial Kitchen"
          products={commercialKitchen}
          className="bg-theme-bg-surface"
        />

        {/* Bar Equipment */}
        <ProductSection
          title="Bar Equipment"
          products={barEquipment}
          className="bg-theme-bg-surface"
        />

        <div className="w-full px-2 sm:px-4 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-40 bg-theme-bg-surface border border-theme-border rounded-lg flex items-center justify-center text-theme-text-primary font-bold text-xl">
              Seasonal Offers
            </div>
            <div className="h-40 bg-theme-bg-surface border border-theme-border rounded-lg flex items-center justify-center text-theme-text-primary font-bold text-xl">
              New Arrivals
            </div>
          </div>
        </div>

        {/* New Arrivals */}
        <ProductSection
          title="New Arrivals"
          products={newArrivals}
          className="bg-theme-bg-surface"
        />
      </div>

      <Footer />
    </main>
  );
}
