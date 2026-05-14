"use client";

import { useRouter } from "next/navigation";

export function BackButton({
  fallback = "/",
  className = "",
}: {
  fallback?: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
          return;
        }
        router.push(fallback);
      }}
      className={`mb-6 inline-flex min-h-10 items-center gap-2 rounded-full border border-[#E4E7E4] bg-[#FFFFFF] px-4 text-xs font-black uppercase tracking-[0.12em] text-[#0B3221] shadow-sm transition hover:border-[#8FAF98] hover:shadow-md ${className}`}
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#EEF5EE]">
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            d="M15 18 9 12l6-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
          />
        </svg>
      </span>
      Back
    </button>
  );
}
