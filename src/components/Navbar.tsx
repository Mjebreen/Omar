import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-black/90 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
            <img src="/logo.svg" alt="Naqd Logo" className="h-8 w-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white">Mohammed Bin Jebreen</span>
            <span className="text-xs text-purple-300 -mt-1">Naqd App</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#project" className="text-gray-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4 px-4 border-t border-zinc-800 z-50">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors py-2 px-4">About</a>
            <a href="#project" className="text-gray-300 hover:text-white transition-colors py-2 px-4">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors py-2 px-4">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
