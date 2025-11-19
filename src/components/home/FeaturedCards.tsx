import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface FeaturedProduct {
  id: string;
  name: string;
  image: string;
  specs?: string[];
  price: number;
  originalPrice?: number;
}

export function FeaturedCards({ items }: { items: FeaturedProduct[] }) {
  return (
    <section className="py-6">
      <div className="w-full px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((p) => (
            <div key={p.id} className="bg-theme-bg-surface border border-theme-border rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-3">
              <div className="relative aspect-video sm:aspect-square sm:col-span-1">
                <Image src={p.image} alt={p.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-4 sm:col-span-2 flex flex-col">
                <Link href={`/product/${p.id}`} className="text-xl font-bold text-theme-text-primary hover:text-brand-red">
                  {p.name}
                </Link>
                {p.specs && (
                  <ul className="mt-2 text-sm text-theme-text-secondary list-disc list-inside">
                    {p.specs.slice(0, 4).map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-auto flex items-end gap-3">
                  <div className="text-2xl font-bold text-theme-text-primary">Rs. {p.price.toLocaleString()}</div>
                  {p.originalPrice && (
                    <div className="text-sm line-through text-theme-text-secondary">Rs. {p.originalPrice.toLocaleString()}</div>
                  )}
                </div>
                <Button className="mt-4">BUY NOW</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}