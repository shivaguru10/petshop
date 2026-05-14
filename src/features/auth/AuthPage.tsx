import Link from "next/link";
import { BackButton } from "@/components/common/BackButton";

export function AuthPage({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";

  return (
    <section className="grid min-h-[calc(100vh-85px)] place-items-center bg-[#FAFAF9] px-5 py-12">
      <div className="w-full max-w-md border border-[#E6EAE6] bg-[#FFFFFF] p-8 shadow-sm">
        <BackButton />
        <div className="mb-7 text-center">
          <p className="section-kicker">Blits Pets</p>
          <h1 className="mt-2 text-3xl font-black">
            {isSignup ? "Create Your Account" : "Welcome Back"}
          </h1>
          <p className="mt-2 text-sm text-[#4F4F4F]">
            {isSignup
              ? "Join our pet care shopping community."
              : "Log in to your pet supplies hub."}
          </p>
        </div>
        <form className="grid gap-4">
          {isSignup ? (
            <label className="grid gap-2 text-sm font-bold">
              Full Name
              <input
                className="h-12 border border-[#DADFDA] px-4 outline-none focus:border-[#057429]"
                placeholder="E.g. Alexander McQueen"
              />
            </label>
          ) : null}
          <label className="grid gap-2 text-sm font-bold">
            Email Address
            <input
              className="h-12 border border-[#DADFDA] px-4 outline-none focus:border-[#057429]"
              placeholder="name@example.com"
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-bold">
            Password
            <input
              className="h-12 border border-[#DADFDA] px-4 outline-none focus:border-[#057429]"
              placeholder="Enter your password"
              type="password"
            />
          </label>
          <button className="brand-button mt-2" type="button">
            {isSignup ? "Create Account" : "Log In"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[#4F4F4F]">
          {isSignup ? "Already a member? " : "New to Blits Pets? "}
          <Link
            href={isSignup ? "/login" : "/signup"}
            className="font-black text-[#057429]"
          >
            {isSignup ? "Login here" : "Join now"}
          </Link>
        </p>
      </div>
    </section>
  );
}
