import { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pulseElement } from '../../utils/setupAnimations';
import { setViewingPdf } from '../../store/cvSlice';

const ResumePage = () => {
  const viewingPdf = useSelector((state) => state.cv.viewingPdf);
  const dispatch = useDispatch();
  const resumeContainerRef = useRef(null);

  const handleViewResumeClick = useCallback(() => {
    dispatch(setViewingPdf(true));
    // Scroll to PDF container
    setTimeout(() => {
      if (resumeContainerRef.current) {
        resumeContainerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    pulseElement('.pdf-container');
  }, [dispatch]);

  const handleDownloadClick = useCallback(() => {
    pulseElement('.download-button');
  }, []);

  return (
    <div className="space-y-8">
      <div className="terminal-heading mb-6">
        <span className="text-terminal-amber">&gt;</span> Resume
      </div>
      
      <section className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4 bg-terminal-lightBg p-4 rounded">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold mb-2">Chris M. Pérez</h2>
          <p className="opacity-70 mb-2">Software Developer specializing in web and 3D technologies</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={handleViewResumeClick}
            className="bg-terminal-green/20 text-terminal-green px-4 py-2 rounded hover:bg-terminal-green/30 transition-colors view-button"
          >
            {viewingPdf ? 'Viewing PDF' : 'View PDF Resume'}
          </button>
          <a 
            href="/Chris_Resume___2025_Apr.pdf" 
            download
            className="bg-terminal-green/20 text-terminal-green px-4 py-2 rounded hover:bg-terminal-green/30 transition-colors download-button"
            onClick={handleDownloadClick}
          >
            Download PDF
          </a>
        </div>
      </section>
      
      {viewingPdf && (
        <section ref={resumeContainerRef} className="mb-8 pdf-container">
          <div className="bg-terminal-lightBg p-4 rounded">
            <h2 className="text-xl font-bold mb-4">PDF Resume</h2>
            <div className="rounded-md overflow-hidden bg-white mb-4">
              <iframe 
                src="/Chris_Resume___2025_Apr.pdf"
                title="Chris Pérez Resume"
                className="w-full h-[600px] border-0"
              ></iframe>
            </div>
          </div>
        </section>
      )}
      
      <section className="mb-8">
        <div className="bg-terminal-lightBg p-4 rounded mb-4">
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <div className="border-l-2 border-terminal-amber pl-4 py-2">
            <h3 className="font-bold">Bachelor of Science in Computer Science</h3>
            <p>Interamerican University, Metropolitan Campus</p>
            <p className="text-sm opacity-70">Graduation: 2019</p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <div className="bg-terminal-lightBg p-4 rounded mb-4">
          <h2 className="text-xl font-bold mb-4">Work Experience</h2>
          
          <div className="border-l-2 border-terminal-amber pl-4 py-2 mb-6">
            <div className="flex justify-between">
              <h3 className="font-bold">Software Developer</h3>
              <span className="text-terminal-amber">January 2025 - Present | MeshMap</span>
            </div>
            <p className="my-2">Building a 3D map of the world and a network of AR content at MeshMap.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Developing 3D mapping applications using Cesium and Gaussian splatting.</li>
              <li>Working with Next.js and React.js to create modern web applications.</li>
              <li>Creating interactive 3D visualization tools for geospatial data.</li>
              <li>Remote position based in San Juan, Puerto Rico.</li>
              <li>Tech Stack: Next.js, React.js, Cesium, Gaussian Splatting, WebGL</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-terminal-amber pl-4 py-2 mb-6">
            <div className="flex justify-between">
              <h3 className="font-bold">Lead Developer</h3>
              <span className="text-terminal-amber">2022 - Present | Techno&Logic Corp</span>
            </div>
            <p className="my-2">Directed development of VoyTuristeando, a tourism app for Puerto Rico on web, Android, and iOS.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Led both back-end and front-end development, delivering a seamless, robust user experience.</li>
              <li>Coordinated with design and cross-functional teams to align technical features with user-centered goals.</li>
              <li>Optimized app performance, supporting 1,000 to 5,000 daily users.</li>
              <li>Project URL: https://app.voyturisteando.com/</li>
              <li>Tech Stack: Next.js, React Native, PostgreSQL, Strapi</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-terminal-amber pl-4 py-2 mb-6">
            <div className="flex justify-between">
              <h3 className="font-bold">Front-End Developer</h3>
              <span className="text-terminal-amber">2021 - 2022 | Digheontech</span>
            </div>
            <p className="my-2">Contributed to front-end development for Travelsafe, a COVID-19 travel tracking app developed by the government of Puerto Rico to monitor the COVID-19 situation, with over 20,000 daily users.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Implemented responsive UI components and optimized user experience to ensure accessibility and performance on all devices.</li>
              <li>Tech Stack: ReactJS, Redux, JavaScript, HTML5, CSS3</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-terminal-amber pl-4 py-2 mb-6">
            <div className="flex justify-between">
              <h3 className="font-bold">Developer</h3>
              <span className="text-terminal-amber">2020 - 2021 | Puerto Rico Science, Technology & Research Trust</span>
            </div>
            <p className="my-2">Built a virtual laboratory web application for vector surveillance, monitoring Zika, Chikungunya, and Dengue in Puerto Rico.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Developed both front-end and back-end for real-time monitoring, surveillance, and mosquito identification.</li>
              <li>Managed SQL Server and PostgreSQL databases for secure data handling.</li>
              <li>Project URL: https://lab.prvectorcontrol.org/</li>
              <li>Tech Stack: React, Node.js, PostgreSQL, SQL Server</li>
            </ul>
          </div>
          
          <div className="border-l-2 border-terminal-amber pl-4 py-2">
            <div className="flex justify-between">
              <h3 className="font-bold">Junior Developer</h3>
              <span className="text-terminal-amber">2018 | CINCO Engineering</span>
            </div>
            <p className="my-2">Developed a Quality Risk Management app for life sciences.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Focused on MEAN stack, database design, and user authentication.</li>
              <li>Tech Stack: MongoDB, Express.js, Angular, Node.js</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <div className="bg-terminal-lightBg p-4 rounded mb-4">
          <h2 className="text-xl font-bold mb-4">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-terminal-amber mb-2">Languages</h3>
              <p>JavaScript, TypeScript, Python, SQL, C++, WebGL</p>
            </div>
            
            <div>
              <h3 className="font-bold text-terminal-amber mb-2">Frontend</h3>
              <p>React, React Native, Vue.js, Next.js</p>
            </div>
            
            <div>
              <h3 className="font-bold text-terminal-amber mb-2">Backend</h3>
              <p>Node.js, Express.js, Spring Boot</p>
            </div>
            
            <div>
              <h3 className="font-bold text-terminal-amber mb-2">Databases</h3>
              <p>PostgreSQL, MySQL, MongoDB, SQL Server</p>
            </div>
            
            <div>
              <h3 className="font-bold text-terminal-amber mb-2">3D</h3>
              <p>Cesium, Gaussian Splatting, 3D Visualization</p>
            </div>
            
            <div>
              <h3 className="font-bold text-terminal-amber mb-2">Other</h3>
              <p>Git, RESTful APIs, MVC, Agile/SCRUM</p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <div className="bg-terminal-lightBg p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Achievements</h2>
          <div className="border-l-2 border-terminal-amber pl-4 py-2">
            <div className="flex justify-between">
              <h3 className="font-bold">Codetrotters Scholarship</h3>
              <span className="text-terminal-amber">2017</span>
            </div>
            <p className="my-2">Full Stack Web Development, Mentored by Jonathan Agosto Cruz</p>
            <p>Tech Stack: JavaScript, Express.js, and Node.js</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage; 