import { StorefrontShell } from "@/components/layout/StorefrontShell";
import { ShopPage } from "@/features/shop/ShopPage";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const params = await searchParams;

  return (
    <StorefrontShell>
      <ShopPage category={params.category} search={params.search} />
    </StorefrontShell>
  );
}
