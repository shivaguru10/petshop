import Link from "next/link";
import { BackButton } from "@/components/common/BackButton";

export function AdminPlaceholderPage() {
  return (
    <div className="container-page py-12">
      <BackButton />
      <section className="rounded-none border border-[#E6EAE6] bg-[#FFFFFF] p-8">
        <p className="section-kicker">Admin ready</p>
        <h1 className="mt-2 text-3xl font-black">Admin Console Foundation</h1>
        <p className="mt-3 max-w-2xl text-[#4F4F4F]">
          This route is intentionally reserved for the Next.js admin build.
          The app already has separated providers, catalog services, product
          components, and route boundaries so dashboard, products, categories,
          orders, and CMS pages can be added without touching storefront pages.
        </p>
        <div className="mt-7 grid gap-3 md:grid-cols-4">
          {["Dashboard", "Products", "Categories", "Orders"].map((item) => (
            <div key={item} className="border border-[#E6EAE6] p-5">
              <strong>{item}</strong>
              <p className="mt-2 text-sm text-[#4F4F4F]">Coming next.</p>
            </div>
          ))}
        </div>
        <Link href="/" className="brand-button mt-8 inline-block">
          Back to Store
        </Link>
      </section>
    </div>
  );
}
