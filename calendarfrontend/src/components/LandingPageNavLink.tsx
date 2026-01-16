import { ReactNode } from "react";
import Link from "next/dist/client/link";

interface LandingPageNavLinkProps {
  href: string;
  children: ReactNode;
}

export default function LandingPageNavLink({
  href,
  children,
}: LandingPageNavLinkProps) {
  return (
    <Link
      href={href}
      className="text-2xl hover:text-blue-400 transition duration-400 relative inline hover:after:w-full after:absolute after:origin-left after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:transform after:duration-400 after:bg-blue-400"
    >
      {children}
    </Link>
  );
}
