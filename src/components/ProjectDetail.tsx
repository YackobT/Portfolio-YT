
import React, { useEffect, useRef } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectDetailProps {
  id: number;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  tools: string[];
  image?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  id,
  title,
  description,
  challenge,
  solution,
  results,
  tools,
  image
}) => {
  const projectRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (projectRef.current) {
      projectRef.current.classList.add('animate-fade-in');
    }
  }, []);

  return (
    <div id={`project-${id}`} ref={projectRef} className="mb-20 opacity-0">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-lg text-muted-foreground mb-6">{description}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-medium mb-3">The Challenge</h4>
              <p className="text-muted-foreground">{challenge}</p>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-3">The Solution</h4>
              <p className="text-muted-foreground">{solution}</p>
            </div>
          </div>
          
          <div className="mb-8">
            <h4 className="text-xl font-medium mb-3">Results</h4>
            <ul className="list-disc pl-5 space-y-1">
              {results.map((result, index) => (
                <li key={index} className="text-muted-foreground">{result}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tools.map((tool, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <Link to="/projects" className="inline-flex items-center text-steelblue hover:underline">
              <ArrowLeft size={16} className="mr-1" /> Back to Projects
            </Link>
            
            <a href="#" className="inline-flex items-center text-steelblue hover:underline">
              Case Study <ExternalLink size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
