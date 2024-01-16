import {
  OrganizationSwitcher,
  SignInButton,
  SignOutButton,
  SignedIn,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

async function TopBar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={40} height={30} />
        <p className="text-heading3-bold text-light-1 max-xs:hiden">Threads</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={40}
                  height={30}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "px-4 py-3",
            },
          }}
        />
      </div>
    </nav>
  );
}
export default TopBar;
