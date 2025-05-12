
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-white to-naqd-light-purple/30 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block text-naqd-purple font-semibold mb-2">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="naqd-gradient-text">Mohammed Bin Jebreen</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Software Engineering Student
            </h2>
            <p className="text-gray-600 max-w-lg mb-8 text-lg">
             A software engineer who builds tools that streamline operations, automate boring stuff, and just make things run smoother. Whether it's managing esports facilities, setting up networks, or creating internal apps, I focus on real-world solutions that save time and reduce headaches. I don’t just write code. <br></br> I solve problems across tech, logistics, and daily workflows. Whatever’s broken, I’ll find a way to fix it or build something better.
            </p>
            <div className="flex flex-wrap gap-4">
            <a 
                href="/Mohammed Bin Jebreen Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="naqd-button group">
                  View My CV
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="border-naqd-purple text-naqd-purple hover:bg-naqd-light-purple/20"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-naqd-purple to-naqd-accent-purple animate-float flex items-center justify-center">
                <div className="w-60 h-60 md:w-76 md:h-76 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src="/mj.svg"
                    alt="Profile" 
                    className="w-56 h-56 md:w-72 md:h-72 object-cover"
                  />
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
