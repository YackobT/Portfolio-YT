
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make text visible with a slight delay for fade-in effect
    const elements = document.querySelectorAll('.split-text-container');
    
    setTimeout(() => {
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 120); // Stagger the animations
      });
    }, 300); // Initial delay before starting animations
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background relative">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/5" />
        <div className="absolute bottom-20 left-[20%] w-96 h-96 rounded-full bg-purple/5" />
        <div className="absolute top-1/2 left-[60%] w-48 h-48 rounded-full bg-violet/5" />
      </div>
      
      <div ref={containerRef} className="container mx-auto px-4 md:px-10 lg:px-20 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl">
          <div className="split-text-container overflow-hidden mb-4">
            <div className="split-text text-sm uppercase tracking-widest font-medium text-primary">
              Certified Scrum Master
            </div>
          </div>
          
          <div className="space-y-2 mb-8">
            <div className="split-text-container">
              <h1 className="split-text text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
                Impact-focused
              </h1>
            </div>
            <div className="split-text-container">
              <h1 className="split-text text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
                <span className="highlight">Business Analyst</span>
              </h1>
            </div>
            <div className="split-text-container">
              <h1 className="split-text text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight">
                & Problem Solver
              </h1>
            </div>
          </div>
          
          <div className="split-text-container max-w-2xl mb-12">
            <p className="split-text text-xl text-muted-foreground">
              Crafting solutions that cut process times by 20% and boost efficiency. 
              Skilled in Agile, SDLC, and tools like Visio, JIRA, and Trello.
            </p>
          </div>
          
          <div className="split-text-container">
            <div className="split-text flex flex-col sm:flex-row gap-6 mt-8">
              <Link 
                to="/projects" 
                className="btn-primary inline-flex items-center group bg-primary" 
              >
                View Work
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <button 
                onClick={scrollToNextSection}
                className="px-6 py-3 border border-primary/20 text-primary rounded-md transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection} 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-primary transition-colors animate-pulse"
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
