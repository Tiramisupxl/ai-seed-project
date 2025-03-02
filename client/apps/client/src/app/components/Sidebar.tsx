
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  FileText, 
  PlusCircle, 
  Clock, 
  Settings, 
  HelpCircle,
  ChevronUp,
  Upload,
  X
} from "lucide-react";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const sidebarRef = useRef<HTMLDivElement>(null);
  
  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && open && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile, open, setOpen]);

  const navItems = [
    { name: "Recent Scripts", path: "/dashboard", icon: <FileText size={20} /> },
    { name: "Create New Script", path: "/generate", icon: <PlusCircle size={20} /> },
  ];

  // Sidebar progress (for demo purposes)
  const freeTrialsUsed = 1;
  const freeTrialsTotal = 3;
  const progressPercentage = (freeTrialsUsed / freeTrialsTotal) * 100;

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && open && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 pt-16 transition-transform duration-300 ease-in-out ${
          isMobile ? (open ? "translate-x-0" : "-translate-x-full") : "translate-x-0"
        } ${isMobile ? "shadow-xl" : ""}`}
      >
        {isMobile && (
          <button
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        )}
        
        {/* Free trials progress */}
        <div className="px-4 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-brand-700">{freeTrialsUsed} of {freeTrialsTotal} daily free trials used</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-success-500 rounded-full"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <Link
            to="/pricing"
            className="mt-4 w-full py-2.5 bg-black text-white rounded-md text-sm font-medium flex items-center justify-center hover:bg-black/90 transition-all"
          >
            GO UNLIMITED
          </Link>
        </div>
        
        {/* Navigation */}
        <div className="px-3 py-4">
          <h3 className="px-3 mb-2 text-xs font-medium text-brand-500 uppercase">Shortcuts</h3>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center px-3 py-2.5 rounded-md text-sm ${
                  location.pathname === item.path
                    ? "bg-gray-100 text-brand-900 font-medium"
                    : "text-brand-700 hover:bg-gray-50"
                }`}
              >
                <span className="mr-3 text-brand-600">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
