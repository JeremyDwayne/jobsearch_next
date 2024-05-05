import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { FullLogo } from "./logo";
import Link from "next/link";

export const Header = async () => {
  return (
    <nav className="flex w-full items-center justify-between border-b bg-cyan-900 p-4 text-xl font-semibold text-white">
      <div className="flex-1">
        <FullLogo />
      </div>
      <div className="flex flex-row items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <Link href="/applications">Job Applications</Link>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};
