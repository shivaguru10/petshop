import Link from "next/link";
import { products } from "@/lib/catalog";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CategoryShowcase } from "./CategoryShowcase";
import { CategoryMarquee } from "./CategoryMarquee";
import { HeroCarousel } from "./HeroCarousel";
import { ImmersiveVideo } from "./ImmersiveVideo";
import { Testimonials } from "./Testimonials";

export function HomePage() {
  const bestSellers = products.filter((product) => product.isBestSeller);

  return (
    <div>
      <HeroCarousel />

      <CategoryMarquee />

      <CategoryShowcase />

      <ImmersiveVideo />

      <section className="bg-[#00321C] py-8 text-white">
        <div className="container-page grid gap-6 md:grid-cols-4 max-md:grid-cols-2">
          {[
            {
              title: "Free Delivery",
              text: "Free shipping worldwide",
              icon: "delivery",
            },
            { title: "Easy Returns", text: "Refund in 7 days", icon: "money" },
            {
              title: "Secure Payment",
              text: "No transaction fees",
              icon: "secure",
            },
            {
              title: "Pet Parent Deals",
              text: "Fresh offers every week",
              icon: "heart",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4 max-md:gap-3">
              <FeatureIcon type={item.icon} />
              <div>
                <strong className="text-sm uppercase tracking-[0.1em] max-md:text-xs">
                  {item.title}
                </strong>
                <p className="mt-1 text-sm text-white/65 max-md:text-[0.65rem]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="container-page py-14">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-black uppercase tracking-[0.05em]">
            Pet Care Bestsellers
          </h2>
          <Link href="/shop" className="text-sm font-black text-[#057429]">
            View All
          </Link>
        </div>
        <ProductGrid products={bestSellers} />
      </section>
    </div>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
  };

  return (
    <span className="h-12 w-12 flex-none text-[#438342] max-md:h-8 max-md:w-8">
      <svg viewBox="0 0 24 24" className="h-full w-full" aria-hidden="true">
        {type === "delivery" ? (
          <>
            <path {...common} d="M5 18H3c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10M16 18h2c1.1 0 2-.9 2-2M1 8h18" />
            <circle {...common} cx="5" cy="19" r="2" />
            <circle {...common} cx="18" cy="19" r="2" />
          </>
        ) : null}
        {type === "money" ? (
          <>
            <circle {...common} cx="12" cy="12" r="10" />
            <path {...common} d="m16 8-4 4-4-4M12 12v7" />
          </>
        ) : null}
        {type === "secure" ? (
          <>
            <rect {...common} x="3" y="11" width="18" height="11" rx="2" />
            <path {...common} d="M7 11V7a5 5 0 0 1 10 0v4" />
          </>
        ) : null}
        {type === "heart" ? (
          <path {...common} d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
        ) : null}
      </svg>
    </span>
  );
}
