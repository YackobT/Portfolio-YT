
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Briefcase, Award, Gauge, Users, BarChart } from 'lucide-react';

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
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Problem Solver & Efficiency Expert</h3>
        <div className="h-1 w-16 bg-steelblue mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed">
            As a Certified Scrum Master Business Analyst with over 5 years of experience, I specialize in creating solutions that streamline processes, enhance efficiency, and align with business objectives.
          </p>
          <p className="text-lg leading-relaxed">
            My expertise spans the entire project lifecycle—from requirements gathering and analysis to implementation and validation—with a focus on stakeholder collaboration and Agile methodologies.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center space-x-3">
              <Gauge className="text-steelblue" size={24} />
              <span>Process Optimization</span>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="text-steelblue" size={24} />
              <span>Stakeholder Collaboration</span>
            </div>
            <div className="flex items-center space-x-3">
              <Award className="text-steelblue" size={24} />
              <span>Agile & Scrum</span>
            </div>
            <div className="flex items-center space-x-3">
              <BarChart className="text-steelblue" size={24} />
              <span>Data Analysis</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="text-xl font-medium mb-4">Key Accomplishments</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-steelblue mr-3 mt-1" size={20} />
                <div>
                  <p className="text-muted-foreground">Achieved a <span className="font-medium text-foreground">95% stakeholder satisfaction rate</span> by collaborating effectively with cross-functional teams.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-steelblue mr-3 mt-1" size={20} />
                <div>
                  <p className="text-muted-foreground">Spearheaded requirements-gathering workshops with key stakeholders, enhancing project alignment.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-steelblue mr-3 mt-1" size={20} />
                <div>
                  <p className="text-muted-foreground">Led acquisition of <span className="font-medium text-foreground">$2 million</span> in government relief funds during COVID-19, ensuring critical financial support.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h4 className="text-xl font-medium mb-4">Education & Certification</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Award className="text-steelblue mr-3 mt-1" size={20} />
                <div>
                  <h5 className="font-medium">Certified Scrum Master (CSM)</h5>
                  <p className="text-sm text-muted-foreground">2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="text-steelblue mr-3 mt-1" size={20} />
                <div>
                  <h5 className="font-medium">AWS Cloud Practitioner</h5>
                  <p className="text-sm text-muted-foreground">2022</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="text-steelblue mr-3 mt-1" size={20} />
                <div>
                  <h5 className="font-medium">Associate's in Business Administration</h5>
                  <p className="text-sm text-muted-foreground">NVCC, Annandale, VA</p>
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
