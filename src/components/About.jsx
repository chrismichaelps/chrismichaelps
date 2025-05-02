import { useState } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState('research');

  // Simulated academic content
  const sections = {
    research: {
      title: 'Current Research',
      content: [
        'Algorithms for Large-Scale Data Processing',
        'Machine Learning Optimization Techniques',
        'Distributed Systems Architecture',
        'Quantum Computing Algorithms'
      ]
    },
    publications: {
      title: 'Selected Publications',
      content: [
        'Smith, J. et al. (2023). "Advanced Algorithms for Quantum Computing." Journal of Computer Science, 45(2), 112-128.',
        'Smith, J. & Johnson, A. (2022). "Optimization Techniques for Large-Scale Data Processing." Proceedings of ICML 2022.',
        'Johnson, A., Smith, J., et al. (2021). "Novel Approaches to Distributed Systems." IEEE Transactions on Parallel Computing, 12(4), 45-67.'
      ]
    },
    teaching: {
      title: 'Teaching Experience',
      content: [
        'CS 401: Advanced Algorithms (TA)',
        'CS 302: Data Structures',
        'CS 101: Introduction to Programming'
      ]
    }
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left column - Academic Profile */}
      <div className="md:col-span-1">
        <div className="retro-paper">
          <div className="mb-6 flex justify-center">
            {/* Placeholder for academic profile photo with retro frame */}
            <div className="w-48 h-48 border-4 border-terminal-green/50 rounded-sm overflow-hidden flex items-center justify-center bg-terminal-bg">
              <span className="text-6xl opacity-50">PhD</span>
            </div>
          </div>
          
          <h2 className="terminal-heading mb-4 text-center">Dr. Jane Smith</h2>
          
          <div className="mb-4 text-center">
            <p className="text-sm opacity-70">PhD Candidate</p>
            <p className="text-sm opacity-70">Department of Computer Science</p>
            <p className="text-sm opacity-70">University of Technology</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs">{'>'}</span>
              <p className="text-sm">smith.j@university.edu</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs">{'>'}</span>
              <p className="text-sm">Office: CS Building, Room 4.12</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs">{'>'}</span>
              <p className="text-sm">Github: github.com/janesmith</p>
            </div>
          </div>
        </div>

        <div className="mt-4 retro-paper">
          <h3 className="mb-3 text-lg">Research Keywords</h3>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Algorithms</span>
            <span className="badge">ML</span>
            <span className="badge">Distributed Systems</span>
            <span className="badge">Quantum</span>
            <span className="badge">Data Mining</span>
          </div>
        </div>
      </div>
      
      {/* Right column - Academic Content */}
      <div className="md:col-span-2">
        <div className="retro-paper grid-paper h-full">
          {/* Tabs for academic sections */}
          <div className="flex space-x-4 border-b border-terminal-green/30 mb-6">
            {Object.keys(sections).map((section) => (
              <button
                key={section}
                className={`pb-2 text-sm uppercase tracking-wide ${
                  activeSection === section
                    ? 'border-b-2 border-terminal-green text-terminal-green'
                    : 'text-gray-500 hover:text-terminal-green'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
          
          {/* Content for selected section */}
          <div>
            <h3 className="text-xl mb-4">{sections[activeSection].title}</h3>
            <ul className="space-y-4">
              {sections[activeSection].content.map((item, index) => (
                <li key={index} className={activeSection === 'publications' ? 'publication-item' : 'flex'}>
                  {activeSection !== 'publications' && <span className="mr-2 opacity-70">[{index + 1}]</span>}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {activeSection === 'research' && (
            <div className="mt-8 citation">
              "Our research focuses on developing novel algorithms for next-generation computing systems,
              with particular emphasis on quantum computing applications and large-scale data processing optimization."
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About; 