# Copilot Instructions for sipnpay-abans-ui

## Project Overview

**sipnpay-abans-ui** is a Next.js 16 e-commerce storefront for commercial kitchenware. The application features:
- Dark industrial theme (primary bg: `#0a0a0a`, text: `#ffffff`)
- Category-based product navigation (Commercial Kitchen, Bar Equipment, Tableware, Kitchenware, Furniture)
- Responsive component-driven architecture with Tailwind CSS 4
- Static product data with price/discount calculation
- Radix UI primitive integration via `clsx` and `tailwind-merge`

## Architecture & Key Patterns

### Component Structure
- **`src/components/layout/`**: Header (sticky, mega-menu trigger), MegaMenu (dark portal), Footer
- **`src/components/home/`**: HeroSlider (6-slide auto-rotate carousel), ProductSection (grid with product cards), CategoryTiles
- **`src/components/ui/`**: Button and Input primitives (customizable, inherit Tailwind theme)
- **Data source**: `src/lib/data.ts` exports static `categories`, `brands`, and `products` arrays

### Product Card Pattern (`ProductSection.tsx`)
Products render with:
- Discount badge (red, top-left)
- Wishlist button (heart icon, hover-reveal, top-right)
- Image container with hover zoom (`scale-105`)
- Brand indicator (green dot + text)
- Price with strikethrough originalPrice
- Savings calculation: `originalPrice - price`
- "Add to Cart" button

### Styling Conventions
- **Color palette**: Extend theme in `tailwind.config.js` under `theme.extend.colors`
- **Responsive**: Mobile-first with `hidden md:block` for desktop-only elements
- **Dark sections**: Use `bg-[#0a0a0a]` + `bg-neutral-50` for light sections
- **Border color**: Standardized to `#333333` (`border-[#333333]`)
- **Hover effects**: Prefer subtle transitions (`hover:bg-neutral-100`, `hover:text-neutral-600`)

### Navigation Flow
1. **Header** → "All Categories" button triggers MegaMenu
2. **MegaMenu** → Displays 6 category columns (dynamically mapped from `categories` array)
3. **Category links** → Navigate to `/category/[category]/[subcategory]` (routes not yet implemented)

## Development Workflow

### Start Development Server
```bash
npm run dev
```
Opens on `http://localhost:3000`. Hot-reload enabled for `.tsx`, `.ts`, `.css` files.

### Build & Deployment
```bash
npm run build
npm start
```
Uses Next.js static optimization and image remotePattern for DigitalOcean Spaces CDN (`l4lqatar.blr1.digitaloceanspaces.com`).

### Linting
```bash
npm run lint
```
Runs ESLint config extending Next.js core web vitals + TypeScript rules. Config: `eslint.config.mjs`

### TypeScript Path Alias
Use `@/` to reference `src/` (defined in `tsconfig.json`). Example: `import { cn } from "@/lib/utils"`

## Image & Asset Handling

- **Remote images**: Configure in `next.config.ts` `remotePatterns` (already allows DigitalOcean Spaces)
- **Local images**: Place in `public/` (e.g., `public/kitchenware/`)
- **Image component**: Next.js Image with `fill`, `sizes`, and `priority` props for optimization
- **Aspect ratio**: Use `aspect-square` for product cards, `h-[50vh] md:h-[65vh] lg:h-[75vh]` for hero

## Data & Filtering

### Product Object Structure
```typescript
{
  id: string,           // ULID format: "prod_01KA8..."
  name: string,
  brand: string,
  price: number,        // LKR
  originalPrice: number,
  discount: number,     // percentage
  image: string,        // CDN URL
  rating: number,
  reviews: number,
  inStock: boolean,
  category: string,     // from categories array
  subcategory: string,
  description: string
}
```

### Filtering Pattern (from `src/app/page.tsx`)
```typescript
const filtered = products.filter(p => p.category === "Commercial Kitchen");
const sliced = products.slice(0, 4);
```

## Important Implementation Notes

1. **No Backend Integration Yet**: Products are static. Cart/Wishlist are UI-only (buttons don't persist).
2. **Currency**: Fixed to LKR (Sri Lankan Rupee). Display as `Rs. {price.toLocaleString()}`
3. **Auto-rotating carousel**: `HeroSlider` uses `setInterval(5000ms)`, cleanup in `useEffect` return
4. **"use client" directive**: Required in `Header`, `HeroSlider`, `MegaMenu` due to state/event handlers
5. **Responsive gaps**: Use `gap-3 sm:gap-4` for flexible spacing, not fixed `gap-4`

## Common Tasks

### Adding a New Product Section
1. Filter products in `src/app/page.tsx` or import from `lib/data.ts`
2. Pass to `<ProductSection title="..." products={[...]} className="bg-[#0a0a0a]" />`
3. Update URL if needed: `viewAllLink="/path-to-page"`

### Modifying Header Navigation Links
Edit `src/components/layout/Header.tsx` nav links section. Update both desktop and mobile menu.

### Updating Color Theme
Edit `tailwind.config.js` `theme.extend.colors`. Changes auto-apply via Tailwind's JIT compiler.

### Creating New UI Component
1. Create file in `src/components/ui/`
2. Use className composition with `cn()` utility
3. Accept `className` prop to allow overrides
4. Export as named export

## Useful Utilities

- **`cn()`** (`src/lib/utils.ts`): Combines `clsx` + `tailwind-merge` for safe Tailwind class merging
- **Lucide React icons**: Already installed. Import as `import { IconName } from "lucide-react"`
- **Radix UI Slot**: Use `@radix-ui/react-slot` for component composition (already installed)

## Testing & Debugging

- **Console logs**: Available in browser DevTools → Console (Next.js dev server doesn't require restart)
- **React DevTools**: Install React DevTools extension to inspect component tree
- **Tailwind IntelliSense**: Install "Tailwind CSS IntelliSense" VSCode extension for autocomplete

## Currency & Localization

- **Locale**: Hardcoded to `en` in `src/app/layout.tsx`
- **Currency selector**: Currently UI mock in Header (no backend support)
- **Number formatting**: Use `.toLocaleString('en-LK')` for LKR display

## Known Limitations

1. Cart & wishlist buttons are non-functional (UI only)
2. Search bar not connected to product filtering
3. Category routes (`/category/[category]/[subcategory]`) return 404 (not yet implemented)
4. No user authentication or account system
5. Images require DigitalOcean Spaces access for loading
