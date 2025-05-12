
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
     
           
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="naqd-card p-8">
            <div className="h-12 w-12 rounded-full naqd-gradient-bg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Thinking</h3>
            <p className="text-gray-600">
              I approach each project with fresh ideas and innovative solutions to create experiences that stand out.
            </p>
          </Card>
          
          <Card className="naqd-card p-8">
            <div className="h-12 w-12 rounded-full naqd-gradient-bg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Detail-Oriented</h3>
            <p className="text-gray-600">
              I pay close attention to every aspect of the design process, ensuring polished and refined end products.
            </p>
          </Card>
          
          <Card className="naqd-card p-8">
            <div className="h-12 w-12 rounded-full naqd-gradient-bg flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Communicative</h3>
            <p className="text-gray-600">
              I believe in clear, open communication throughout the design process to ensure client satisfaction.
            </p>
          </Card>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">My Background</h3>
          <p className="text-gray-600 mb-4">
          With years of hands-on experience in esports operations, IT infrastructure, and software development, I’ve developed a strong ability to bridge the gap between technical systems and real-world workflows. My journey began in competitive gaming, where I learned the value of performance, precision, and systems that just work under pressure.

Since then, I’ve led the development and management of gaming facilities, internal platforms, and automation tools, streamlining everything from shared services and device management to network optimization. Whether working with startups or building out core infrastructure, I focus on creating intuitive, efficient solutions that support teams at scale.
          </p>
        
        </div>
    </section>
  );
};

export default AboutSection;
