import Image from "next/image";
import { notFound } from "next/navigation";
import { BackButton } from "@/components/common/BackButton";
import { StorefrontShell } from "@/components/layout/StorefrontShell";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getDiscountedPrice, getProductById, products } from "@/lib/catalog";
import { ProductActions } from "./product-actions";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);
  const price = getDiscountedPrice(product);
  const detailItems =
    ["Dogs", "Birds", "Cats"].includes(product.category)
      ? [
          ["Category", product.category],
          ["Type", product.material],
          ["Health Check", "Included"],
          ["Record", "Vaccination"],
        ]
      : [
          ["Category", product.category],
          ["Material", product.material],
          ["Delivery", "3-7 Days"],
          ["Warranty", "12 Months"],
        ];

  return (
    <StorefrontShell>
      <article className="overflow-hidden bg-[#FAFAF9] py-8 max-md:py-0">
        <div className="container-page max-md:hidden">
          <BackButton
            fallback={`/shop?category=${encodeURIComponent(product.category)}`}
          />
        </div>
        <div className="mx-auto grid max-w-[1280px] items-start gap-[34px] px-9 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] max-lg:grid-cols-1 max-lg:px-10 max-md:gap-3 max-md:px-0">
          <div className="grid gap-4 max-md:gap-0">
            <div className="sticky top-[108px] z-10 grid min-h-[520px] place-items-center overflow-hidden rounded-lg border border-[#E6EAE6] bg-[#EEF5EE] shadow-[0_22px_70px_#E8ECE8] max-lg:static max-lg:aspect-[16/10] max-lg:min-h-0 max-md:relative max-md:h-[218px] max-md:aspect-auto max-md:w-full max-md:rounded-none max-md:border-x-0 max-md:border-t-0 max-md:shadow-none">
              <BackButton
                fallback={`/shop?category=${encodeURIComponent(product.category)}`}
                className="absolute left-3 top-3 z-20 mb-0 min-h-8 bg-white/95 px-3 text-[0.64rem] shadow-md md:hidden [&>span]:h-5 [&>span]:w-5"
              />
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover transition duration-700 hover:scale-[1.025]"
              />
            </div>
            <div className="relative z-0 rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] p-4 max-md:mx-4 max-md:mt-3 max-md:p-3">
              <strong className="text-xs uppercase tracking-[0.12em]">
                Pet-care delivery
              </strong>
              <p className="mt-1 text-sm text-[#4F4F4F] max-md:text-xs max-md:leading-5">
                Carefully packed food, medicine, cages, and accessories for
                your pet-care routine.
              </p>
            </div>
          </div>

          <div className="sticky top-[108px] rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] p-7 shadow-[0_22px_70px_#E8ECE8] max-lg:static max-md:mx-4 max-md:p-4 max-md:shadow-sm">
            <div className="mb-5 border-b border-[#DDE6DD] pb-5">
              <p className="mb-3 w-max text-xs font-black uppercase tracking-[0.16em] text-[#145615] max-md:text-[0.68rem]">
                {product.category}
              </p>
              <h1 className="text-[clamp(2rem,3.2vw,3.35rem)] font-black leading-none max-md:text-[1.65rem] max-md:leading-[1.03]">{product.name}</h1>
              <h2 className="mt-2 text-base font-bold text-[#4F4F4F] max-md:text-sm">by {product.brand}</h2>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <strong className="text-3xl max-md:text-2xl">Rs. {price.toLocaleString("en-IN")}</strong>
              {product.discount ? (
                <>
                  <span className="text-[#4F4F4F] line-through">
                    Rs. {product.price.toLocaleString("en-IN")}
                  </span>
                  <span className="bg-[#EEF5EE] px-2 py-1 text-xs font-black text-[#037733]">
                    {product.discount}% OFF
                  </span>
                </>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-[#4F4F4F] max-md:text-xs">
              Inclusive of all taxes. Free delivery available.
            </p>
            <ProductActions product={product} />
            <div className="mt-7 grid grid-cols-2 gap-3 max-md:mt-5 max-md:gap-2">
              {detailItems.map(([label, value]) => (
                <div key={label} className="rounded-lg border border-[#E6EAE6] bg-[#F8F8F8] p-4 max-md:p-3">
                  <span className="text-xs uppercase tracking-[0.12em] text-[#4F4F4F] max-md:text-[0.62rem]">
                    {label}
                  </span>
                  <strong className="mt-1 block max-md:text-sm">{value}</strong>
                </div>
              ))}
            </div>
            <div className="mt-7 border-t border-[#DDE6DD] pt-6">
              <h3 className="font-black">Product Description</h3>
              <p className="mt-2 leading-7 text-[#4F4F4F]">{product.description}</p>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 max-md:grid-cols-1">
              {[
                ["Free Delivery", "On eligible pet supply orders"],
                ["Easy Support", "Help with size and product choice"],
                ["Secure Checkout", "Protected payment flow"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-[#E6EAE6] bg-[#FFFFFF] p-3">
                  <strong className="block text-xs font-black">{label}</strong>
                  <span className="mt-1 block text-xs leading-5 text-[#4F4F4F]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="mx-auto mt-14 max-w-[1280px] px-9 max-md:mt-8 max-md:px-4">
          <div className="mb-5">
            <p className="section-kicker">Related Products</p>
            <h2 className="mt-2 text-3xl font-black max-md:text-2xl">Complete This Pet Kit</h2>
          </div>
          <ProductGrid products={related} variant="related" />
        </section>
      </article>
    </StorefrontShell>
  );
}
