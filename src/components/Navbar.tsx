
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 bg-white/80 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold text-foreground transition-colors duration-300 hover:text-steelblue">
          <span className="text-steelblue">Data</span>Analyst
        </Link>

        {isMobile ? (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-2"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        ) : (
          <nav className="flex items-center space-x-8">
            <Link to="/" className={cn('nav-link', isActive('/') && 'active')}>
              Home
            </Link>
            <Link to="/projects" className={cn('nav-link', isActive('/projects') && 'active')}>
              Projects
            </Link>
            <Link to="/contact" className={cn('nav-link', isActive('/contact') && 'active')}>
              Contact
            </Link>
          </nav>
        )}

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <div 
            className={cn(
              'absolute top-full left-0 right-0 bg-white shadow-md transform transition-transform duration-300 ease-in-out',
              mobileMenuOpen ? 'translate-y-0' : '-translate-y-full opacity-0'
            )}
          >
            <nav className="flex flex-col py-4">
              <Link to="/" className={cn('px-6 py-3 hover:bg-gray-100', isActive('/') && 'text-steelblue')}>
                Home
              </Link>
              <Link to="/projects" className={cn('px-6 py-3 hover:bg-gray-100', isActive('/projects') && 'text-steelblue')}>
                Projects
              </Link>
              <Link to="/contact" className={cn('px-6 py-3 hover:bg-gray-100', isActive('/contact') && 'text-steelblue')}>
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
