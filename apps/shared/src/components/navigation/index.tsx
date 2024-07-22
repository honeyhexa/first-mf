import {
  Home,
  LineChart,
  Package2,
} from "lucide-react"
import Link from 'next/link'
import { NAV_ITEMS } from "@/constants";

export const SheetNavigation = () => {
  return (
    <nav className="grid gap-2 text-lg font-medium">
      <Link
        href="#"
        className="flex items-center gap-2 text-lg font-semibold"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      {NAV_ITEMS.map(({ label, route }) => (
        <Link
          href={route}
          key={route}
          className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <Home className="h-5 w-5" />
          {label}
        </Link>
      ))}
    </nav>
  )
};

export const SidebarNavigation = () => {
  return (
  <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
    {NAV_ITEMS.map(({ label, route }) => (
      <Link
        href={route}
        key={route}
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <LineChart className="h-4 w-4" />
        {label}
      </Link>
    ))}
  </nav>
);
};