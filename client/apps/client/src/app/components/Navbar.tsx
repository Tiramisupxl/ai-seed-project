
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, User, LogIn } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
  showSidebarToggle: boolean;
}

const Navbar = ({ toggleSidebar, showSidebarToggle }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Track scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if user is logged in
  const isLoggedIn = false; // This would be replaced with actual auth state

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left section: Logo and toggle */}
          <div className="flex items-center">
            {showSidebarToggle && isMobile && (
              <button
                onClick={toggleSidebar}
                className="mr-4 p-2 rounded-md hover:bg-gray-100"
                aria-label="Toggle sidebar"
              >
                <Menu size={20} />
              </button>
            )}
            
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-brand-900">CopyScript</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-brand-700 hover:text-brand-900 font-medium">
              Pricing
            </Link>
            <Link to="/faqs" className="text-brand-700 hover:text-brand-900 font-medium">
              FAQS
            </Link>
            <Link to="/blog" className="text-brand-700 hover:text-brand-900 font-medium">
              Blog
            </Link>
          </nav>

          {/* Right section: Auth */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-brand-700">yangmingze151@gmail.com</span>
                <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center">
                  <User size={16} className="text-brand-700" />
                </div>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className="px-4 py-2 text-brand-700 hover:text-brand-900 font-medium"
                >
                  Log in
                </Link>
                <Link 
                  to="/signup" 
                  className="px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-black/90"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 ml-4 rounded-md hover:bg-gray-100"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <Link 
              to="/pricing" 
              className="block px-4 py-2 text-brand-700 hover:bg-gray-50 rounded-md"
            >
              Pricing
            </Link>
            <Link 
              to="/faqs" 
              className="block px-4 py-2 text-brand-700 hover:bg-gray-50 rounded-md"
            >
              FAQS
            </Link>
            <Link 
              to="/blog" 
              className="block px-4 py-2 text-brand-700 hover:bg-gray-50 rounded-md"
            >
              Blog
            </Link>
            
            {!isLoggedIn && (
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  to="/login" 
                  className="flex items-center px-4 py-2 text-brand-700 hover:bg-gray-50 rounded-md"
                >
                  <LogIn size={18} className="mr-2" />
                  Log in
                </Link>
                <Link 
                  to="/signup" 
                  className="mt-2 block text-center px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-black/90"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
