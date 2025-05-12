
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-bold mb-4 naqd-gradient-text">Omar Ramadan</p>
         
          
          <div className="flex items-center space-x-4 mb-8">
            <button onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-sm text-gray-600 hover:text-naqd-purple transition-colors">
              About
            </button>
            <span className="text-gray-300">•</span>
            <button onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }} className="text-sm text-gray-600 hover:text-naqd-purple transition-colors">
              Contact
            </button>
          </div>
          
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Naqd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
