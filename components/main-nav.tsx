"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface TruncatedLinkProps {
  route: {
    href: string;
    label: string;
    active: boolean;
  };
}

const TruncatedLink: React.FC<TruncatedLinkProps> = ({ route }) => {
  const truncatedLabel =
    route.label.length > 15 ? route.label.substring(0, 12) + "..." : route.label;

  return (
    <Link
      key={route.href}
      href={route.href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-black",
        route.active
          ? "text-black font-bold border-b-2 border-red-500"
          : "text-black"
      )}
    >
      {truncatedLabel}
    </Link>
  );
};

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const limitedRoutes = data.slice(0, 10).map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center justify-between space-x-4 lg:space-x-6">
      {limitedRoutes.map((route) => (
        <TruncatedLink key={route.href} route={route} />
      ))}
    </nav>
  );
};

export default MainNav;