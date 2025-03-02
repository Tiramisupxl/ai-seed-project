
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 py-8 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold text-brand-900">
              CopyScript
            </Link>
            <p className="text-sm text-brand-500 mt-2">
              © {new Date().getFullYear()} CopyScript. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <Link 
              to="/terms" 
              className="text-sm text-brand-600 hover:text-brand-900"
            >
              Terms of Service
            </Link>
            <Link 
              to="/privacy" 
              className="text-sm text-brand-600 hover:text-brand-900"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-brand-600 hover:text-brand-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
