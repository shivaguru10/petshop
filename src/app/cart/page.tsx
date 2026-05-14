import { StorefrontShell } from "@/components/layout/StorefrontShell";
import { CartPage } from "@/features/cart/CartPage";

export default function Page() {
  return (
    <StorefrontShell>
      <CartPage />
    </StorefrontShell>
  );
}
