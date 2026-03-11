"use client"

import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { BookOpen, Code2, LayoutDashboard, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";


function Logo() {
  return (
    <>
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow">
          <Code2 className="w-5 h-5 text-white" />
        </div>

        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
          <Play className="w-2 h-2 text-white fill-white" />
        </div>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-lg tracking-tight leading-none">
          SONNY
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          Academy
        </span>
      </div>
    </>
  );
}


const Header = () => {
    const pathname = usePathname()
    const {has} = useAuth()

    const isUltra = has?.({plan:"ultra"})
    const loggedInLinks = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },

  { href: "/dashboard/courses", label: "My Courses", icon: BookOpen },

  // Show "Account" for Ultra users, "Upgrade" for others
  ...(isUltra
    ? [{ href: "/pricing", label: "Account", icon: Sparkles }]
    : [{ href: "/pricing", label: "Upgrade", icon: Sparkles }]),
];

const LoggedOutLinks =[
    {href:"#courses", label:"Courses"},
    {href:"/pricing", label:"Pricing"},
    {href:"#testimonials", label:"Review"},
]
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-4 lg:px-12 max-w-7xl mx-auto">
        <div>
        <SignedIn>
            <Link href="/dashboard" className="flex items-center gap-3 group">
                <Logo/>
            </Link>
            
        </SignedIn>
        <SignedOut>
            <Link href="/" className="flex items-center gap-3 group">
                <Logo/>
            </Link>

        </SignedOut>

        </div>
        {/* Center Navigation - absolute positioning for perfect center on desktop */}
<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
  <SignedOut>
    <div className="flex items-center gap-8 text-sm text-zinc-400">
      {LoggedOutLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-white transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </SignedOut>
  <SignedIn>
    <div className="flex items-center gap-8 text-sm text-zinc-400">
      {loggedInLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-white transition-colors duration-200"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </SignedIn>


</div>
        
    </nav>
  )
}

export default Header