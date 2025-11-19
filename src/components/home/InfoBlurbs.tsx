import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Item {
  id: string;
  name: string;
  image: string;
  summary: string;
  price: number;
}

export function InfoBlurbs({ items }: { items: Item[] }) {
  return (
    <section className="py-6">
      <div className="w-full px-2 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((i) => (
            <div key={i.id} className="bg-theme-bg-surface border border-theme-border rounded-lg p-4 flex flex-col">
              <div className="relative w-full aspect-[4/3] mb-3">
                <Image src={i.image} alt={i.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover rounded" />
              </div>
              <Link href={`/product/${i.id}`} className="font-bold text-theme-text-primary hover:text-brand-red">
                {i.name}
              </Link>
              <p className="text-sm text-theme-text-secondary mt-2 line-clamp-3">{i.summary}</p>
              <div className="mt-3 text-lg font-bold text-theme-text-primary">Rs. {i.price.toLocaleString()}</div>
              <Button className="mt-3">BUY NOW</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}