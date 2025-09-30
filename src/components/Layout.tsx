import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Target, LayoutDashboard } from "lucide-react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen bg-gradient-hero">
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">PM Internship Scheme</h1>
                <p className="text-xs text-muted-foreground">AI-Powered Matching Platform</p>
              </div>
            </Link>
            
            <div className="flex items-center gap-2">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to="/">
                  <Briefcase className="h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Button
                variant={isActive("/profile") ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to="/profile">
                  <Users className="h-4 w-4" />
                  Profile
                </Link>
              </Button>
              <Button
                variant={isActive("/opportunities") ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to="/opportunities">
                  <Briefcase className="h-4 w-4" />
                  Opportunities
                </Link>
              </Button>
              <Button
                variant={isActive("/matches") ? "default" : "ghost"}
                size="sm"
                asChild
              >
                <Link to="/matches">
                  <LayoutDashboard className="h-4 w-4" />
                  My Matches
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2025 PM Internship Scheme. Empowering India's Youth.
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="link" size="sm" asChild>
                <a href="#">About</a>
              </Button>
              <Button variant="link" size="sm" asChild>
                <a href="#">Guidelines</a>
              </Button>
              <Button variant="link" size="sm" asChild>
                <a href="#">Support</a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
