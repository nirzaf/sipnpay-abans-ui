import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ProductSection } from "@/components/home/ProductSection";
import { products } from "@/lib/data";

export default function Home() {
  // Filter products for different sections (mock logic)
  const featuredDeals = products.slice(0, 4);
  const commercialKitchen = products.filter(p => p.category === "Commercial Kitchen");
  const barEquipment = products.filter(p => p.category === "Bar Equipment");
  const newArrivals = products.slice(4, 8);

  return (
    <main className="min-h-screen flex flex-col font-sans bg-[#0a0a0a]">
      <Header />

      <div className="flex-grow">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Featured Deals */}
        <ProductSection
          title="Featured Deals"
          products={featuredDeals}
          className="bg-[#0a0a0a]"
        />

        {/* Banner 1 */}
        <div className="container mx-auto px-4 py-4">
          <div className="w-full h-32 md:h-48 bg-gradient-to-r from-[#1f1f1f] to-[#333333] rounded-lg flex items-center justify-center text-white border border-[#333333]">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Complete Commercial Kitchen Setups</h3>
              <p className="text-[#b3b3b3]">Consultation to Installation - We do it all</p>
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

        {/* Banner 2 */}
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-40 bg-[#1f1f1f] border border-[#333333] rounded-lg flex items-center justify-center text-white font-bold text-xl hover:border-white transition-colors">
              Seasonal Offers
            </div>
            <div className="h-40 bg-[#1f1f1f] border border-[#333333] rounded-lg flex items-center justify-center text-white font-bold text-xl hover:border-white transition-colors">
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
