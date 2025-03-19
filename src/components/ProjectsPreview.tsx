
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, TrendingUp, Database } from 'lucide-react';

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
      title: 'Retail Analytics Dashboard',
      description: 'Developed a comprehensive dashboard to track sales performance, customer behavior, and inventory management.',
      icon: <BarChart className="text-steelblue" size={24} />,
      outcome: '32% increase in inventory turnover'
    },
    {
      id: 2,
      title: 'Process Optimization Initiative',
      description: 'Analyzed and redesigned order fulfillment process, reducing operational inefficiencies and improving customer satisfaction.',
      icon: <TrendingUp className="text-steelblue" size={24} />,
      outcome: '45% decrease in processing time'
    },
    {
      id: 3,
      title: 'Data Warehouse Implementation',
      description: 'Led the requirements gathering and design phase for a new enterprise data warehouse solution.',
      icon: <Database className="text-steelblue" size={24} />,
      outcome: 'Consolidated 7 data sources'
    }
  ];

  return (
    <section ref={sectionRef} className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-steelblue mb-2">Portfolio</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
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
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;
