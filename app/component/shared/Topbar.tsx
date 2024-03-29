import Link from "next/link";
import Image from "next/image";
import React from "react";
import { dark } from "@clerk/themes";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="assets/logo.svg" alt="logo" width={28} height={21} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads-Dummy</p>
      </Link>
      <div className="flex item-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image src='assets/logout.svg' height={24} width={24}
                alt="logout"/> 
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default Topbar;
