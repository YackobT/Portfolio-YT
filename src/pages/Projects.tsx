
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectDetail from '@/components/ProjectDetail';
import { BarChart, TrendingUp, Database, AreaChart, Layers, LineChart } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Retail Analytics Dashboard',
    description: 'Developed a comprehensive dashboard to track sales performance, customer behavior, and inventory management for a national retail chain.',
    challenge: 'The client needed a centralized way to visualize store performance across 120 locations, with the ability to drill down into specific metrics and identify trends.',
    solution: 'Designed and implemented a Tableau dashboard that integrated data from multiple sources, providing real-time insights into key performance indicators.',
    results: [
      '32% increase in inventory turnover rate',
      'Reduced stockouts by 45%',
      'Optimized staffing based on customer traffic patterns',
      'Saved over $500K annually through improved inventory management'
    ],
    tools: ['Tableau', 'SQL', 'Python', 'Excel'],
    icon: <BarChart className="text-steelblue" size={24} />
  },
  {
    id: 2,
    title: 'Process Optimization Initiative',
    description: 'Analyzed and redesigned order fulfillment process, reducing operational inefficiencies and improving customer satisfaction.',
    challenge: 'The organization was experiencing delays in order processing, resulting in customer complaints and decreased satisfaction ratings.',
    solution: 'Conducted a thorough workflow analysis, identified bottlenecks, and implemented a streamlined process with automated notifications and improved handoffs.',
    results: [
      '45% decrease in order processing time',
      'Improved customer satisfaction scores by 28%',
      'Reduced error rates by 60%',
      'Enabled employees to handle 35% more orders with the same resources'
    ],
    tools: ['Process Mapping', 'Six Sigma', 'Microsoft Visio', 'Power Automate'],
    icon: <TrendingUp className="text-steelblue" size={24} />
  },
  {
    id: 3,
    title: 'Data Warehouse Implementation',
    description: 'Led the requirements gathering and design phase for a new enterprise data warehouse solution.',
    challenge: 'The company was struggling with siloed data across multiple systems, making it difficult to perform cross-functional analysis and reporting.',
    solution: 'Designed a comprehensive data warehouse architecture that consolidated information from 7 disparate systems, creating a single source of truth for business intelligence.',
    results: [
      'Consolidated 7 separate data sources into a unified platform',
      'Reduced report generation time from days to minutes',
      'Enabled self-service analytics for business users',
      'Improved data quality and consistency across the organization'
    ],
    tools: ['SQL Server', 'SSIS', 'Power BI', 'Data Modeling'],
    icon: <Database className="text-steelblue" size={24} />
  },
  {
    id: 4,
    title: 'Sales Forecasting Model',
    description: 'Developed a predictive model to forecast quarterly sales figures with improved accuracy.',
    challenge: 'The business was using basic historical averaging to forecast sales, resulting in significant variance between projections and actual results.',
    solution: 'Created a machine learning model incorporating seasonal patterns, market trends, and external factors to generate more accurate forecasts.',
    results: [
      'Improved forecast accuracy by 37%',
      'Reduced inventory holding costs by $320K annually',
      'Optimized procurement and staffing based on improved forecasts',
      'Implemented automated monthly forecast updates'
    ],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter Notebooks'],
    icon: <AreaChart className="text-steelblue" size={24} />
  },
  {
    id: 5,
    title: 'Regulatory Compliance Dashboard',
    description: 'Designed a real-time compliance monitoring system for a financial services firm.',
    challenge: 'The organization needed to track compliance with multiple regulatory requirements and quickly identify potential issues before they resulted in penalties.',
    solution: 'Developed a dashboard that automatically monitored key compliance indicators and alerted relevant stakeholders when metrics approached threshold levels.',
    results: [
      'Eliminated compliance-related penalties over a 2-year period',
      'Reduced audit preparation time by 65%',
      'Improved regulatory reporting efficiency',
      'Enhanced visibility into compliance status across the organization'
    ],
    tools: ['Power BI', 'SQL', 'Azure Functions', 'Teams Integration'],
    icon: <Layers className="text-steelblue" size={24} />
  },
  {
    id: 6,
    title: 'Customer Segmentation Analysis',
    description: 'Performed advanced customer segmentation to improve marketing targeting and effectiveness.',
    challenge: 'The marketing team was using broad demographic categories for campaigns, resulting in poor conversion rates and inefficient marketing spend.',
    solution: 'Conducted cluster analysis using behavioral, transactional, and demographic data to identify distinct customer segments with specific needs and preferences.',
    results: [
      'Identified 5 high-value customer segments for targeted marketing',
      'Increased email campaign conversion rates by 45%',
      'Reduced customer acquisition costs by 28%',
      'Improved customer retention rates in key segments'
    ],
    tools: ['R', 'RStudio', 'Cluster Analysis', 'Excel'],
    icon: <LineChart className="text-steelblue" size={24} />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects Portfolio</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work in data analysis, process optimization, and strategic problem-solving.
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
