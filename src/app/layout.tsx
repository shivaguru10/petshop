import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blits Pets | Pet Food, Medicine & Accessories",
  description:
    "Shop dog food, bird supplies, hamster care, pet medicine, leashes, collars, bowls, toys, and cages at Blits Pets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className="flex min-h-full flex-col antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
