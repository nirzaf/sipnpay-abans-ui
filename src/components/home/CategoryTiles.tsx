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
                className="rounded-lg border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col items-center justify-center text-center gap-2"
              >
                <Icon className="h-6 w-6 text-neutral-700" />
                <span className="text-sm font-semibold text-neutral-900">{cat.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}