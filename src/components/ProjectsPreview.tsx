
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, Users, Zap, LineChart, BarChart, FileText } from 'lucide-react';

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
    <section ref={sectionRef} className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-steelblue mb-2">Experience</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h3>
        <div className="h-1 w-16 bg-steelblue mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProjects.map((project) => (
          <div 
            key={project.id} 
            className="project-card group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-md bg-gray-50">
                {project.icon}
              </div>
            </div>
            <h4 className="text-xl font-medium mb-2">{project.title}</h4>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="bg-steelblue/10 text-steelblue px-3 py-1 rounded-full text-sm inline-block mb-4">
              {project.outcome}
            </div>
            <div className="mt-2 pt-2 border-t border-gray-100">
              <Link 
                to={`/projects#project-${project.id}`} 
                className="inline-flex items-center text-steelblue hover:underline"
              >
                View Details <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link to="/projects" className="btn-primary">
          View Full Experience
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;
