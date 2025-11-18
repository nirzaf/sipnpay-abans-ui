import Link from "next/link";
import { categories } from "@/lib/data";

export function CategoryTiles() {
  const tiles = categories.slice(0, 6);
  return (
    <section className="py-6">
      <div className="w-full px-2 sm:px-4 lg:px-8">
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(160px,1fr))] gap-3 sm:gap-4">
          {tiles.map((cat) => (
            <Link
              key={cat.name}
              href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`}
              className="rounded-lg border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow p-4 flex items-center justify-center text-center"
            >
              <span className="text-sm font-semibold text-neutral-900">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}