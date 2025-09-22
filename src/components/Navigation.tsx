import { School, Clock, Users, BookOpen } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"

export function Navigation() {
  const location = useLocation()

  const navItems = [
    { icon: Clock, label: "Timeline", path: "/" },
    { icon: Users, label: "Governance", path: "/governance" },
    { icon: BookOpen, label: "Works Cited", path: "/citations" }
  ]

  return (
    <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <School className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">UC System</h1>
              <p className="text-sm text-muted-foreground">Historical Timeline</p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}