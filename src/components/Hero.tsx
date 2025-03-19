
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;

    if (title) title.classList.add('animate-slide-in');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-fade-in');
    }, 400);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-slide-up');
    }, 800);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/5 w-60 h-60 rounded-full bg-steelblue/5" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-steelblue/5" />
      </div>
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 text-balance"
        >
          Transforming <span className="text-steelblue">Data</span> into
          <br /> Business <span className="text-steelblue">Decisions</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 opacity-0 text-balance"
        >
          Business analyst specialized in delivering data-driven insights, process optimization, 
          and strategic solutions to drive organizational success.
        </p>
        
        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 opacity-0"
        >
          <Link 
            to="/projects" 
            className="btn-primary"
          >
            View Projects
          </Link>
          <button 
            onClick={scrollToNextSection}
            className="px-6 py-3 border border-gray-300 rounded-md transition-all duration-300 hover:border-steelblue hover:text-steelblue"
          >
            Learn More
          </button>
        </div>
        
        <button 
          onClick={scrollToNextSection} 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-steelblue transition-colors animate-pulse-slow"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
