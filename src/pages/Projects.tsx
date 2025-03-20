
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectDetail from '@/components/ProjectDetail';
import { FileText, Users, Database, LineChart, LayoutDashboard, ClipboardCheck } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Healthcare EHR Implementation - DS Technologies Inc',
    description: 'Supported healthcare IT initiatives, specializing in system integration and Electronic Health Records (EHR) deployment.',
    challenge: 'The healthcare organization needed a seamless integration of new EHR systems with existing infrastructure while ensuring minimal disruption to patient care and staff operations.',
    solution: 'Led project planning, requirements gathering, and business process mapping to ensure smooth implementation. Collaborated with stakeholders and SMEs to develop workflows and identify integration points.',
    results: [
      'Successfully deployed integrated EHR system',
      'Resolved system capability gaps',
      'Developed comprehensive test plans and UAT',
      'Created user documentation and training materials'
    ],
    tools: ['SQL', 'SDLC', 'Microsoft Visio', 'SharePoint', 'Teams'],
    icon: <FileText className="text-steelblue" size={24} />,
    date: 'July 2024 – February 2025'
  },
  {
    id: 2,
    title: 'Government IT Solutions - CACI',
    description: 'Provided IT solutions and services to government and commercial clients, focusing on innovation and efficiency as Senior Business Analyst.',
    challenge: 'Needed to align diverse stakeholder requirements across multiple government departments while ensuring project delivery within strict timelines and compliance standards.',
    solution: 'Collaborated with product managers, developers, and QA teams to ensure project alignment. Conducted requirement-gathering sessions and created detailed business requirement documents.',
    results: [
      'Achieved 95% stakeholder satisfaction rate',
      'Reduced rework by 30%',
      'Improved development cycle times by 15%',
      'Successfully facilitated stakeholder workshops and UAT'
    ],
    tools: ['Agile', 'JIRA', 'Requirement Documentation', 'UAT', 'Stakeholder Management'],
    icon: <Users className="text-steelblue" size={24} />,
    date: 'May 2023 – June 2024'
  },
  {
    id: 3,
    title: 'Financial Systems Analysis - Spectrum Financial Services',
    description: 'Offered financial and operational solutions, enhancing efficiency through technology and process improvements as Business Systems Analyst.',
    challenge: 'The financial services firm needed to modernize legacy systems while ensuring compliance with evolving regulatory requirements and maintaining operational continuity.',
    solution: 'Analyzed key business challenges and translated them into system requirements. Created technical documentation to facilitate clear communication and effective system implementation.',
    results: [
      'Improved operational efficiency through automated solutions',
      'Created comprehensive technical documentation',
      'Conducted extensive system testing',
      'Ensured regulatory compliance across systems'
    ],
    tools: ['Financial Systems', 'Process Analysis', 'Technical Documentation', 'Compliance Management'],
    icon: <LineChart className="text-steelblue" size={24} />,
    date: 'July 2022 – May 2023'
  },
  {
    id: 4,
    title: 'Property Management Systems - CIM Group',
    description: 'Focused on property management systems and operational efficiency for real estate portfolios as Business Systems Support Analyst.',
    challenge: 'The real estate management company needed to optimize property management systems to handle a growing portfolio while improving reporting capabilities and operational efficiency.',
    solution: 'Conducted comprehensive analysis of property management systems to identify inefficiencies and implement solutions that enhanced performance.',
    results: [
      'Enhanced system performance across property portfolio',
      'Served as liaison between business users and technical teams',
      'Translated requirements into technical specifications',
      'Provided ongoing support and troubleshooting'
    ],
    tools: ['Property Management Systems', 'Requirements Analysis', 'Technical Support', 'System Integration'],
    icon: <Database className="text-steelblue" size={24} />,
    date: 'June 2020 – July 2022'
  },
  {
    id: 5,
    title: 'Residential Portfolio Management - Bell Partners',
    description: 'Managed leasing operations and property financial health for residential portfolios as Senior Leasing Manager.',
    challenge: 'The residential property management company needed to optimize leasing operations, improve financial performance, and develop standardized processes across a diverse portfolio.',
    solution: 'Streamlined financial transactions such as rent collection and banking while safeguarding property assets. Monitored financial health against annual budgets.',
    results: [
      'Improved budgeted NOI through strategic management',
      'Mentored leasing teams to high performance',
      'Implemented standardized rental policies',
      'Tracked and improved key performance metrics'
    ],
    tools: ['Financial Analysis', 'Team Leadership', 'Performance Metrics', 'Operational Management'],
    icon: <LayoutDashboard className="text-steelblue" size={24} />,
    date: 'May 2018 – June 2020'
  },
  {
    id: 6,
    title: 'COVID-19 Relief Fund Acquisition',
    description: 'Led the successful acquisition of $2 million in government relief funds during the COVID-19 pandemic.',
    challenge: 'During the uncertainty of the COVID-19 pandemic, there was an urgent need to secure financial support for residents and maintain operational stability across a large community.',
    solution: 'Managed a complex application process for government relief funds, coordinating documentation requirements and navigating evolving federal guidelines.',
    results: [
      'Secured $2 million in relief funding',
      'Provided critical financial support for residents',
      'Maintained operational stability during crisis',
      'Implemented efficient fund distribution system'
    ],
    tools: ['Grant Applications', 'Government Relations', 'Crisis Management', 'Financial Planning'],
    icon: <ClipboardCheck className="text-steelblue" size={24} />,
    date: '2020'
  }
];

const Projects = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle hash links for direct navigation to specific projects
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };
    
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A journey through my career in business analysis, process optimization, and system implementation.
            </p>
          </div>
          
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectDetail
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                challenge={project.challenge}
                solution={project.solution}
                results={project.results}
                tools={project.tools}
                date={project.date}
              />
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
