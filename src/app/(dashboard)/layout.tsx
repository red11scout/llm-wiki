"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Network, ScrollText, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/wiki", label: "Wiki", icon: BookOpen },
  { href: "/graph", label: "Graph", icon: Network },
  { href: "/log", label: "Log", icon: ScrollText },
  { href: "/contradictions", label: "Contradictions", icon: AlertTriangle },
] as const;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 bg-brand-navy text-white flex flex-col">
        <div className="px-5 py-6 border-b border-white/10">
          <Link href="/wiki" className="text-lg font-bold tracking-tight">
            LLM Wiki
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href || pathname.startsWith(href + "/");

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "bg-white/15 text-white"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="px-5 py-4 border-t border-white/10 text-xs text-white/40">
          Karpathy pattern
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-background overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  );
}
