
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.split-text-container');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/5 w-60 h-60 rounded-full bg-steelblue/5" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-steelblue/5" />
      </div>
      
      <div ref={containerRef} className="container mx-auto px-4 md:px-10 lg:px-20 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl space-y-6">
          <div className="split-text-container overflow-hidden">
            <div className="split-text delay-100 text-sm uppercase tracking-widest font-medium text-steelblue">
              Certified Scrum Master
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="split-text-container">
              <h1 className="split-text delay-200 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
                Impact-focused
              </h1>
            </div>
            <div className="split-text-container">
              <h1 className="split-text delay-300 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
                <span className="highlight">Business Analyst</span>
              </h1>
            </div>
            <div className="split-text-container">
              <h1 className="split-text delay-400 text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight">
                & Problem Solver
              </h1>
            </div>
          </div>
          
          <div className="split-text-container max-w-2xl">
            <p className="split-text delay-500 text-lg text-muted-foreground">
              Crafting solutions that cut process times by 20% and boost efficiency. 
              Skilled in Agile, SDLC, and tools like Visio, JIRA, and Trello.
            </p>
          </div>
          
          <div className="split-text-container">
            <div className="split-text delay-600 flex flex-col sm:flex-row gap-6 mt-8">
              <Link 
                to="/projects" 
                className="btn-primary inline-flex items-center group" 
              >
                View Work
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <button 
                onClick={scrollToNextSection}
                className="px-6 py-3 border border-gray-300 rounded-md transition-all duration-300 hover:border-steelblue hover:text-steelblue"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection} 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-muted-foreground hover:text-steelblue transition-colors animate-pulse"
        aria-label="Scroll down"
      >
        <span className="text-sm mb-2">Scroll</span>
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Hero;
