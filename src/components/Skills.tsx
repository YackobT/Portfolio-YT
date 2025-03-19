
import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const technicalSkills: Skill[] = [
    { name: 'Data Analysis', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'Excel/Spreadsheets', level: 95 },
    { name: 'Tableau', level: 85 },
    { name: 'Python', level: 75 },
    { name: 'Power BI', level: 85 }
  ];
  
  const businessSkills: Skill[] = [
    { name: 'Requirements Gathering', level: 90 },
    { name: 'Process Optimization', level: 85 },
    { name: 'Stakeholder Management', level: 90 },
    { name: 'Project Management', level: 80 },
    { name: 'Strategic Planning', level: 85 },
    { name: 'Business Process Modeling', level: 90 }
  ];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-steelblue mb-2">Expertise</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Skills & Proficiencies</h3>
        <div className="h-1 w-16 bg-steelblue mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h4 className="text-xl font-medium mb-6">Technical Skills</h4>
          {technicalSkills.map((skill, index) => (
            <div key={`tech-${index}`} className="space-y-2">
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span className="text-steelblue">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transition: `width 1s ease-out ${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-8">
          <h4 className="text-xl font-medium mb-6">Business Skills</h4>
          {businessSkills.map((skill, index) => (
            <div key={`biz-${index}`} className="space-y-2">
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span className="text-steelblue">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transition: `width 1s ease-out ${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
