import { Crown, Home, Settings, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { CartSidebar } from "./CartSidebar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-gradient-dark shadow-elegant border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Crown className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              BLITZ
            </span>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Button
              variant={isActive("/") ? "secondary" : "ghost"}
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:text-accent"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            
            <Button
              variant={isActive("/dashboard") ? "secondary" : "ghost"}
              onClick={() => navigate("/dashboard")}
              className="text-primary-foreground hover:text-accent"
            >
              <Settings className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            
            <Button
              variant={isActive("/checkout") ? "secondary" : "ghost"}
              onClick={() => navigate("/checkout")}
              className="text-primary-foreground hover:text-accent"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Checkout
            </Button>
            
            <CartSidebar />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;