
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Github, Linkedin, Calendar } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how my data analysis and business insights can help your organization achieve its goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <Avatar className="h-14 w-14 mr-4">
                    <AvatarImage src="/lovable-uploads/245c5adf-0f4c-436e-82a9-1a7ea95a9b35.png" alt="Yackob Tamire" />
                    <AvatarFallback>YT</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-medium">Yackob Tamire</h3>
                    <p className="text-muted-foreground">Business Systems Analyst</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-primary mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:yackobt@yahoo.com" className="text-primary hover:underline">
                        yackobt@yahoo.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Calendar className="text-primary mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Availability</h4>
                      <p className="text-muted-foreground">Monday - Friday, 9AM - 5PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-medium mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href="https://github.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={20} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href="https://www.linkedin.com/in/yackob-tamire/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={20} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>LinkedIn</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <a 
                          href="mailto:yackobt@yahoo.com"
                          className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors"
                          aria-label="Email"
                        >
                          <Mail size={20} />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Email</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
