
import React, { useEffect, useRef } from 'react';
import { AreaChart, Activity, Database, Briefcase, LineChart } from 'lucide-react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-steelblue mb-2">About Me</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Data-Driven Problem Solver</h3>
        <div className="h-1 w-16 bg-steelblue mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            As a business analyst with over 8 years of experience, I specialize in transforming complex data into clear, actionable insights that drive strategic decision-making and business growth.
          </p>
          <p className="text-lg leading-relaxed">
            My expertise spans data analysis, process optimization, requirements gathering, and implementing solutions that align with business objectives and deliver measurable results.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center space-x-3">
              <AreaChart className="text-steelblue" size={24} />
              <span>Data Analysis</span>
            </div>
            <div className="flex items-center space-x-3">
              <Activity className="text-steelblue" size={24} />
              <span>Process Optimization</span>
            </div>
            <div className="flex items-center space-x-3">
              <Database className="text-steelblue" size={24} />
              <span>Data Modeling</span>
            </div>
            <div className="flex items-center space-x-3">
              <LineChart className="text-steelblue" size={24} />
              <span>Business Intelligence</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="text-xl font-medium mb-4">Professional Experience</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Briefcase className="text-steelblue mr-3 mt-1" size={20} />
                <div>
                  <h5 className="font-medium">Senior Business Analyst</h5>
                  <p className="text-sm text-muted-foreground">Global Tech Solutions • 2020 - Present</p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="text-steelblue mr-3 mt-1" size={20} />
                <div>
                  <h5 className="font-medium">Business Analyst</h5>
                  <p className="text-sm text-muted-foreground">Data Insights Inc. • 2017 - 2020</p>
                </div>
              </div>
              <div className="flex items-start">
                <Briefcase className="text-steelblue mr-3 mt-1" size={20} />
                <div>
                  <h5 className="font-medium">Junior Analyst</h5>
                  <p className="text-sm text-muted-foreground">Analytics Partners • 2015 - 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
