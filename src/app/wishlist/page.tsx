import { StorefrontShell } from "@/components/layout/StorefrontShell";
import { WishlistPage } from "@/features/wishlist/WishlistPage";

export default function Page() {
  return (
    <StorefrontShell>
      <WishlistPage />
    </StorefrontShell>
  );
}
