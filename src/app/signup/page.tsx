import { StorefrontShell } from "@/components/layout/StorefrontShell";
import { AuthPage } from "@/features/auth/AuthPage";

export default function Page() {
  return (
    <StorefrontShell>
      <AuthPage mode="signup" />
    </StorefrontShell>
  );
}
