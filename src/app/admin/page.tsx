import { StorefrontShell } from "@/components/layout/StorefrontShell";
import { AdminPlaceholderPage } from "@/features/admin/AdminPlaceholderPage";

export default function Page() {
  return (
    <StorefrontShell>
      <AdminPlaceholderPage />
    </StorefrontShell>
  );
}
