
import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Close sidebar on location change (for mobile)
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [location, isMobile]);

  // Check if the route is dashboard or its subpages
  const showSidebar = 
    location.pathname.startsWith('/dashboard') || 
    location.pathname.startsWith('/generate') || 
    location.pathname.startsWith('/scripts');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)} 
        showSidebarToggle={showSidebar}
      />
      
      <div className="flex flex-1">
        {showSidebar && (
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        )}
        
        <main className={`flex-1 transition-all duration-300 ${showSidebar && !isMobile ? 'ml-64' : ''}`}>
          <div className="animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;
