
import React, { useEffect, useRef } from 'react';
import { Tv, Gamepad2, Brush, Laptop } from 'lucide-react';

const BeyondResume = () => {
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
    <section ref={sectionRef} id="beyond-resume" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-primary mb-2">Beyond Resume</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">The Person Behind the Professional</h3>
        <div className="h-1 w-16 bg-primary mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
          <Laptop className="text-primary mb-4" size={28} />
          <h4 className="text-xl font-medium mb-3">Tech Exploration</h4>
          <p className="text-muted-foreground">
            I'm a geek for new gadgets and tools—diving in, messing around, and losing track of time figuring out how they work. I'm always hunting for ways they can level up my life or my projects.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
          <Tv className="text-primary mb-4" size={28} />
          <h4 className="text-xl font-medium mb-3">Naruto's #1 Ramen Stan</h4>
          <p className="text-muted-foreground">
            I've watched Naruto so many times I'm basically an honorary Leaf Village ninja—minus the headband and, uh, any actual skills. I'm the dude who'll argue Naruto's a better dad than Goku (low bar) while slurping instant ramen like it's a Chunin Exam. I don't draw or cosplay; I just scream "Believe it!" at my TV and call it passion.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
          <Gamepad2 className="text-primary mb-4" size={28} />
          <h4 className="text-xl font-medium mb-3">Football Enthusiast</h4>
          <p className="text-muted-foreground">
            Fútbol (soccer) is my passion, play it, watch, live it. I am a die-hard Chelsea FC fan.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:translate-y-[-5px]">
          <Brush className="text-primary mb-4" size={28} />
          <h4 className="text-xl font-medium mb-3">Digital Design</h4>
          <p className="text-muted-foreground">
            I also design, sort of like Graphic design, but all the crazy AI's out there nowadays, photoshopping days are behind us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeyondResume;
