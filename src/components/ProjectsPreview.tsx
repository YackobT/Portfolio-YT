
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Users, LineChart } from 'lucide-react';

const ProjectsPreview = () => {
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

  const featuredProjects = [
    {
      id: 1,
      title: 'Healthcare EHR Implementation',
      description: 'Led project planning, requirements gathering, and business process mapping for a seamless EHR system implementation.',
      icon: <FileText className="text-steelblue" size={24} />,
      outcome: 'DS Technologies Inc, 2024-2025',
      company: 'DS Technologies Inc'
    },
    {
      id: 2,
      title: 'Government IT Solutions',
      description: 'Worked with cross-functional teams to ensure project alignment and reduce rework through detailed requirement documentation.',
      icon: <Users className="text-steelblue" size={24} />,
      outcome: '95% stakeholder satisfaction rate',
      company: 'CACI'
    },
    {
      id: 3,
      title: 'Financial Systems Integration',
      description: 'Analyzed business challenges and translated them into system requirements, resulting in operational efficiency improvements.',
      icon: <LineChart className="text-steelblue" size={24} />,
      outcome: 'Automated solutions deployment',
      company: 'Spectrum Financial Services'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-10">
        <div className="mb-16">
          <div className="section-heading-small">Experience</div>
          <h2 className="section-heading relative">
            <span className="large-number absolute -top-14 -left-6 opacity-10">03</span>
            <span className="relative z-10">Professional Journey</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card group"
              style={{ 
                transitionDelay: `${index * 0.1}s` 
              }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-md bg-gray-50">
                  {project.icon}
                </div>
              </div>
              <h4 className="text-xl font-medium mb-3">{project.title}</h4>
              <p className="text-muted-foreground mb-5">{project.description}</p>
              <div className="bg-steelblue/10 text-steelblue px-3 py-1 rounded-full text-sm inline-block mb-5">
                {project.outcome}
              </div>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <Link 
                  to={`/projects#project-${project.id}`} 
                  className="inline-flex items-center text-steelblue group-hover:underline"
                >
                  View Details <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link to="/projects" className="btn-primary group inline-flex items-center">
            View Full Experience
            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
