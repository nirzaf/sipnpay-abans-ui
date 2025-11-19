import Link from "next/link";
import { categories } from "@/lib/data";
import { CookingPot, CupSoda, Utensils, UtensilsCrossed, Armchair } from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  "Commercial Kitchen": CookingPot,
  "Bar Equipment": CupSoda,
  "Tableware": Utensils,
  "Kitchenware": UtensilsCrossed,
  "Furniture": Armchair,
};

export function CategoryTiles() {
  const tiles = categories.slice(0, 6);
  return (
    <section className="py-6">
      <div className="w-full px-2 sm:px-4 lg:px-8">
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))] gap-3 sm:gap-4">
          {tiles.map((cat) => {
            const Icon = categoryIcons[cat.name] ?? CookingPot;
            return (
              <Link
                key={cat.name}
                href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
                className="rounded-lg border border-theme-border bg-theme-bg-surface shadow-sm hover:shadow-md hover:border-brand-red transition-all p-4 flex flex-col items-center justify-center text-center gap-2"
              >
                <Icon className="h-6 w-6 text-theme-text-secondary" />
                <span className="text-sm font-semibold text-theme-text-primary">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}