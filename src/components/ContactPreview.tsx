
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, FileText } from 'lucide-react';

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
    <section ref={sectionRef} className="section-container bg-steelblue text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Optimize Your Business?</h2>
        <p className="text-lg mb-8 text-white/90">
          Let's discuss how my expertise in business analysis, process optimization, 
          and system implementation can help your organization achieve its goals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div className="glass bg-white/10 p-6 rounded-lg">
            <Mail className="mx-auto mb-4" size={28} />
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <p className="text-white/80">contact@example.com</p>
          </div>
          
          <div className="glass bg-white/10 p-6 rounded-lg">
            <Phone className="mx-auto mb-4" size={28} />
            <h3 className="text-lg font-medium mb-2">Phone</h3>
            <p className="text-white/80">+1 (555) 123-4567</p>
          </div>
          
          <div className="glass bg-white/10 p-6 rounded-lg">
            <MapPin className="mx-auto mb-4" size={28} />
            <h3 className="text-lg font-medium mb-2">Location</h3>
            <p className="text-white/80">Richmond, VA</p>
          </div>
          
          <div className="glass bg-white/10 p-6 rounded-lg">
            <FileText className="mx-auto mb-4" size={28} />
            <h3 className="text-lg font-medium mb-2">Resume</h3>
            <a href="#" className="text-white/80 hover:text-white hover:underline">Download PDF</a>
          </div>
        </div>
        
        <Link 
          to="/contact" 
          className="px-8 py-3 bg-white text-steelblue rounded-md transition-all duration-300 hover:bg-opacity-90 inline-block font-medium"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default ContactPreview;
