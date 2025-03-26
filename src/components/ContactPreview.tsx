
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, FileText } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ContactPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-section');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Ready to Optimize Your Business?</h2>
          <p className="text-lg mb-12 text-white/90 max-w-2xl mx-auto">
            Let's discuss how my expertise in business analysis, process optimization, 
            and system implementation can help your organization achieve its goals.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="glass bg-white/10 p-6 rounded-lg transition-transform hover:translate-y-[-5px] duration-300">
              <Mail className="mx-auto mb-4" size={28} />
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <p className="text-white/80 break-words">yackobt@yahoo.com</p>
            </div>
            
            <div className="glass bg-white/10 p-6 rounded-lg transition-transform hover:translate-y-[-5px] duration-300">
              <FileText className="mx-auto mb-4" size={28} />
              <h3 className="text-lg font-medium mb-2">Resume</h3>
              <a href="#" className="text-white/80 hover:text-white hover:underline">Download PDF</a>
            </div>
          </div>
          
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-white text-primary rounded-md transition-all duration-300 hover:bg-opacity-90 inline-block font-medium group"
          >
            Get in Touch
            <svg className="ml-2 w-4 h-4 inline-block transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
