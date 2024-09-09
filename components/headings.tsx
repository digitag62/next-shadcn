"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const routes = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
]

export default function Headings() {
  const route = usePathname();

  return (
    <div className="container py-6 flex justify-between">
      <div className="flex gap-6 items-center w-full">
        {routes.map(r => <Link key={r.href} className={cn("text-sm hover:text-foreground", route === r.href ? "text-foreground" : "text-muted-foreground")} href={r.href}>{r.name}</Link>)}
      </div>

      {/* <ThemeToggle /> */}
    </div>
  );
}
