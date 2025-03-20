
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-lg font-medium tracking-tight">
              <span className="text-steelblue font-bold">Certified</span>Analyst
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Impact-focused Business Systems Analyst driving business transformation through efficient processes and data-driven insights.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium tracking-tight">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-sm text-muted-foreground hover:text-steelblue transition-colors">Home</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-steelblue transition-colors">Experience</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-steelblue transition-colors">Contact</Link>
              <a href="#" className="text-sm text-muted-foreground hover:text-steelblue transition-colors inline-flex items-center">
                <FileText size={14} className="mr-1" /> Resume
              </a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium tracking-tight">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-steelblue transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-steelblue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-500 hover:text-steelblue transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Certified Scrum Master Business Analyst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
