
import { Button, buttonVariants } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';

const ProjectSection = () => {
  return (
    <section id="project" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="naqd-gradient-text">Featured Project</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            In-depth look at a significant project I've worked on
          </p>
        </div>
        
        <Card className="naqd-card overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-100 p-6 flex items-center justify-center min-h-[300px] lg:min-h-[500px]">
              <img 
                src="/placeholder.svg" 
                alt="Naqd Finance App" 
                className="max-w-full h-auto shadow-lg rounded-lg"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Naqd Finance App</h3>
                <div className="flex space-x-2">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a 
                    href="https://example.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Live Preview</span>
                  </a>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                Naqd is a comprehensive finance application designed to help users manage expenses and gain financial insights through smart analytics and tracking features. The app represents clarity, security, and financial empowerment.
              </p>
              
              <h4 className="font-semibold text-lg mb-2">My Role</h4>
              <p className="text-gray-600 mb-6">
                As the lead designer, I was responsible for developing the UI/UX from concept to implementation. I conducted user research, created wireframes, prototypes, and worked closely with developers to ensure design integrity throughout the development process.
              </p>
              
              <h4 className="font-semibold text-lg mb-2">Key Features</h4>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                <li>Intuitive expense tracking with category recognition</li>
                <li>Budget management with customizable goals</li>
                <li>Financial insights dashboard with visualizations</li>
                <li>Secure multi-device synchronization</li>
                <li>Smart notifications and financial recommendations</li>
              </ul>
              
              <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-naqd-light-purple text-naqd-dark-purple text-sm rounded-full">React Native</span>
                <span className="px-3 py-1 bg-naqd-light-purple text-naqd-dark-purple text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-naqd-light-purple text-naqd-dark-purple text-sm rounded-full">Firebase</span>
                <span className="px-3 py-1 bg-naqd-light-purple text-naqd-dark-purple text-sm rounded-full">Figma</span>
                <span className="px-3 py-1 bg-naqd-light-purple text-naqd-dark-purple text-sm rounded-full">ApexCharts</span>
              </div>
              
              <Button className="naqd-button group">
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Card>
        
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Project Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-naqd-purple text-4xl font-bold mb-2">94%</div>
              <p className="text-gray-600">User Satisfaction Rating</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-naqd-purple text-4xl font-bold mb-2">250K+</div>
              <p className="text-gray-600">App Downloads</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-naqd-purple text-4xl font-bold mb-2">42%</div>
              <p className="text-gray-600">Average Budget Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
