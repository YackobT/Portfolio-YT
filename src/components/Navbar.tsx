
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
        <Link to="/" className="text-xl font-medium tracking-tight transition-colors duration-300 hover:text-steelblue flex items-center">
          <span className="text-steelblue font-bold mr-1">Certified</span>
          <span>Analyst</span>
        </Link>

        {isMobile ? (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-2 focus:outline-none"
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
              Experience
            </Link>
            <Link to="/contact" className={cn('nav-link', isActive('/contact') && 'active')}>
              Contact
            </Link>
            <a 
              href="#" 
              className="px-4 py-2 border border-steelblue text-steelblue rounded-md hover:bg-steelblue hover:text-white transition-colors duration-300 inline-flex items-center"
            >
              <FileText size={16} className="mr-2" /> Resume
            </a>
          </nav>
        )}

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <div 
            className={cn(
              'absolute top-full left-0 right-0 bg-white shadow-md transform transition-all duration-500 ease-in-out',
              mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
            )}
          >
            <nav className="flex flex-col py-4">
              <Link to="/" className={cn('px-6 py-3 hover:bg-gray-50', isActive('/') && 'text-steelblue')}>
                Home
              </Link>
              <Link to="/projects" className={cn('px-6 py-3 hover:bg-gray-50', isActive('/projects') && 'text-steelblue')}>
                Experience
              </Link>
              <Link to="/contact" className={cn('px-6 py-3 hover:bg-gray-50', isActive('/contact') && 'text-steelblue')}>
                Contact
              </Link>
              <a href="#" className={cn('px-6 py-3 hover:bg-gray-50 flex items-center')}>
                <FileText size={16} className="mr-2" /> Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
