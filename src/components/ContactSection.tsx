import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="naqd-gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together? Connect with me on social media or send me a message.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="naqd-card p-8 md:p-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4 mb-8 flex flex-col items-center">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full naqd-gradient-bg flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <a href="mailto:me@mjebreen.com" className="text-gray-700 hover:text-naqd-purple transition-colors">
                    me@mjebreen.com
                  </a>
                </div>
              </div>
              
              <h4 className="font-semibold mb-3">Find me on</h4>
              <div className="flex space-x-4 justify-center">
                <a 
                  href="https://github.com/Mjebreen" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-12 w-12 rounded-full bg-gray-100 hover:bg-naqd-light-purple transition-colors flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-6 w-6 text-gray-700" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mjebreen/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-12 w-12 rounded-full bg-gray-100 hover:bg-naqd-light-purple transition-colors flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-6 w-6 text-gray-700" />
                </a>
                <a 
                  href="https://x.com/msjebreen" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-12 w-12 rounded-full bg-gray-100 hover:bg-naqd-light-purple transition-colors flex items-center justify-center"
                  aria-label="X Profile"
                >
                  <img src="/xlogo.svg" alt="X Logo" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
