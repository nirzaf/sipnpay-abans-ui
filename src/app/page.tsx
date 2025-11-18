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
    <main className="min-h-[100dvh] w-full flex flex-col font-sans bg-white">
      <Header />

      <div className="flex-grow">
        <HeroSlider />
        <CategoryTiles />

        {/* Featured Deals */}
        <ProductSection
          title="Featured Deals"
          products={featuredDeals}
          className="bg-[#0a0a0a]"
        />

        <div className="w-full px-2 sm:px-4 lg:px-8 py-4">
          <div className="w-full h-32 md:h-48 bg-neutral-100 rounded-lg flex items-center justify-center text-neutral-900 border border-neutral-200">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Complete Commercial Kitchen Setups</h3>
              <p className="text-neutral-600">Consultation to Installation - We do it all</p>
            </div>
          </div>
        </div>

        {/* Commercial Kitchen */}
        <ProductSection
          title="Commercial Kitchen"
          products={commercialKitchen}
          className="bg-[#0a0a0a]"
        />

        {/* Bar Equipment */}
        <ProductSection
          title="Bar Equipment"
          products={barEquipment}
          className="bg-[#0a0a0a]"
        />

        <div className="w-full px-2 sm:px-4 lg:px-8 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-40 bg-neutral-100 border border-neutral-200 rounded-lg flex items-center justify-center text-neutral-900 font-bold text-xl">
              Seasonal Offers
            </div>
            <div className="h-40 bg-neutral-100 border border-neutral-200 rounded-lg flex items-center justify-center text-neutral-900 font-bold text-xl">
              New Arrivals
            </div>
          </div>
        </div>

        {/* New Arrivals */}
        <ProductSection
          title="New Arrivals"
          products={newArrivals}
          className="bg-[#0a0a0a]"
        />
      </div>

      <Footer />
    </main>
  );
}
