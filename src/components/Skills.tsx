
import React, { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const technicalSkills: Skill[] = [
    { name: 'JIRA & Agile Tools', level: 95 },
    { name: 'SQL', level: 85 },
    { name: 'Microsoft Visio', level: 90 },
    { name: 'Trello', level: 95 },
    { name: 'SharePoint', level: 85 },
    { name: 'AWS', level: 75 }
  ];
  
  const businessSkills: Skill[] = [
    { name: 'Requirements Analysis', level: 95 },
    { name: 'Process Optimization', level: 90 },
    { name: 'Stakeholder Management', level: 95 },
    { name: 'Agile & Scrum', level: 90 },
    { name: 'Workflow Design', level: 85 },
    { name: 'System Integration', level: 80 }
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
    <section ref={sectionRef} className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="section-heading-small">Expertise</div>
            <h2 className="section-heading">Skills & Proficiencies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h4 className="text-xl font-medium tracking-tight mb-6 relative">
                <span className="large-number">01</span>
                <span className="relative z-10">Technical Skills</span>
              </h4>
              {technicalSkills.map((skill, index) => (
                <div key={`tech-${index}`} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
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
              <h4 className="text-xl font-medium tracking-tight mb-6 relative">
                <span className="large-number">02</span>
                <span className="relative z-10">Business Skills</span>
              </h4>
              {businessSkills.map((skill, index) => (
                <div key={`biz-${index}`} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
