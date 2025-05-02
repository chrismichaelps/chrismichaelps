import { useState, useRef } from 'react';
import usePageAnimations from '../../components/PageAnimations';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const rootRef = useRef(null);
  const scopeRef = usePageAnimations(rootRef);

  const handleSectionChange = (key) => {
    setActiveSection(key);
    // Use the animation scope's transition method
    if (scopeRef.current && scopeRef.current.methods) {
      scopeRef.current.methods.transitionContent();
    }
  };

  const sections = {
    summary: {
      title: 'Summary',
      content: [
        'Results-driven software developer with strong expertise in both front-end and back-end development.',
        'Currently working on 3D mapping and AR technologies at MeshMap, building immersive spatial computing experiences.',
        'Skilled in creating scalable, high-performance applications with a focus on user experience and clean, maintainable code.',
        'Proven ability to collaborate effectively in cross-functional teams, delivering innovative solutions under pressure while meeting deadlines and business objectives.'
      ]
    },
    experience: {
      title: 'Experience Highlights',
      content: [
        'Software Developer at MeshMap (2025-Present) - Building a 3D map of the world and network of AR content.',
        'Lead Developer at Techno&Logic Corp (2022-Present) - Directed development of VoyTuristeando, a tourism app for Puerto Rico.',
        'Front-End Developer at Digheontech (2021-2022) - Contributed to Travelsafe, a COVID-19 tracking app with 20,000+ daily users.',
        'Developer at Puerto Rico Science, Technology & Research Trust (2020-2021) - Built a virtual laboratory for vector surveillance.'
      ]
    },
    skills: {
      title: 'Technical Skills',
      content: [
        'Languages: JavaScript, TypeScript, Python, SQL, C++, WebGL',
        '3D Technologies: Cesium, Gaussian Splatting, 3D Visualization',
        'Frontend: React, React.js, Next.js, Vue.js',
        'Backend: Node.js, Express.js, Spring Boot',
        'Databases: PostgreSQL, MySQL, MongoDB',
        'Deployment: Vercel',
        'Version Control: Git',
        'API Development: RESTful APIs, MVC design pattern'
      ]
    }
  };

  return (
    <div className="space-y-6 max-w-full overflow-x-hidden page-container" ref={rootRef}>
      <div className="terminal-heading mb-4 section-title">
        <span className="text-terminal-amber">&gt;</span> Welcome to my developer profile
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/3">
          <div className="p-3 sm:p-4 bg-terminal-lightBg rounded content-card">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 section-title">Navigation</h2>
            <ul className="space-y-2">
              {Object.keys(sections).map((key) => (
                <li key={key} className="list-item">
                  <button
                    onClick={() => handleSectionChange(key)}
                    className={`w-full text-left p-2 rounded text-sm sm:text-base ${
                      activeSection === key
                        ? 'bg-terminal-green text-terminal-bg font-bold'
                        : 'hover:bg-terminal-bg'
                    }`}
                  >
                    <span className="text-terminal-amber mr-2">&gt;</span>
                    {sections[key].title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-terminal-lightBg rounded content-card">
            <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 section-title">Contact</h2>
            <ul className="space-y-2 text-sm">
              <li className="break-words list-item">
                <span className="text-terminal-amber">Location:</span> Canóvanas, Puerto Rico (Remote)
              </li>
              <li className="break-words list-item">
                <span className="text-terminal-amber">Email:</span> chrisperezsantiago1@gmail.com
              </li>
              <li className="break-words list-item">
                <span className="text-terminal-amber">Phone:</span> 939-655-5195
              </li>
              <li className="break-words list-item">
                <span className="text-terminal-amber">LinkedIn:</span> 
                <a href="https://www.linkedin.com/in/chrisperezsantiago/" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-amber">
                  {" "}chrisperezsantiago
                </a>
              </li>
              <li className="break-words list-item">
                <span className="text-terminal-amber">GitHub:</span> 
                <a href="https://github.com/chrismichaelperez" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-amber">
                 {" "} chrismichaelperez
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-2/3 p-3 sm:p-4 bg-terminal-lightBg rounded content-card content-transition">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 section-title">
            <span className="text-terminal-amber">&gt;</span> {sections[activeSection].title}
          </h2>
          <ul className="space-y-4">
            {sections[activeSection].content.map((item, index) => (
              <li key={index} className="flex list-item">
                <span className="text-terminal-amber mr-2 flex-shrink-0">$</span>
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 