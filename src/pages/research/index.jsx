const ExperiencePage = () => {
  return (
    <div className="space-y-8">
      <div className="terminal-heading mb-6">
        <span className="text-terminal-amber">&gt;</span> Experience
      </div>
      
      <div className="space-y-8 max-h-[70vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-terminal-green scrollbar-track-terminal-lightBg">
        <div className="bg-terminal-lightBg p-6 rounded">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">MeshMap</h2>
            <span className="text-terminal-amber">January 2025 - Present</span>
          </div>
          
          <p className="mb-4">
            Building a 3D map of the world and a network of AR content at MeshMap. Working on cutting-edge 3D 
            mapping technologies and developing tools for creating immersive AR experiences.
          </p>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Key Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Developing 3D mapping applications using Cesium and Gaussian splatting</li>
              <li>Working with Next.js and React.js to create modern web applications</li>
              <li>Creating interactive 3D visualization tools for geospatial data</li>
              <li>Remote position based in San Juan, Puerto Rico</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Technologies</h3>
            <p>Next.js, React.js, Cesium, Gaussian Splatting, 3D Visualization, WebGL</p>
          </div>
        </div>
        
        <div className="bg-terminal-lightBg p-6 rounded">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">VoyTuristeando</h2>
            <span className="text-terminal-amber">2022 - Present</span>
          </div>
          
          <p className="mb-4">
            A comprehensive tourism application for Puerto Rico, available on web, Android, and iOS platforms.
            As Lead Developer, I directed both back-end and front-end development to create a seamless user experience
            for exploring tourist attractions, events, and services throughout Puerto Rico.
          </p>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Interactive maps and location-based recommendations</li>
              <li>User profiles and personalized itineraries</li>
              <li>Local business directory and event calendar</li>
              <li>Real-time updates and notifications</li>
              <li>Optimized for 1,000-5,000 daily users</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Technologies</h3>
            <p>Next.js, React Native, PostgreSQL, Strapi</p>
          </div>
          
          <a href="https://app.voyturisteando.com/" className="text-terminal-amber hover:underline">
            Visit project: https://app.voyturisteando.com/
          </a>
        </div>
        
        <div className="bg-terminal-lightBg p-6 rounded">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Travelsafe</h2>
            <span className="text-terminal-amber">2021 - 2022</span>
          </div>
          
          <p className="mb-4">
            A COVID-19 travel tracking application developed for the government of Puerto Rico.
            As a Front-End Developer, I contributed to creating an intuitive interface for travelers
            to report their COVID-19 status, access testing locations, and receive travel advisories.
          </p>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responsive design accessible on all devices</li>
              <li>User-friendly COVID-19 status reporting</li>
              <li>Interactive maps of testing and vaccination centers</li>
              <li>Travel requirement updates and notifications</li>
              <li>Supported over 20,000 daily users</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Technologies</h3>
            <p>ReactJS, Redux, JavaScript, HTML5, CSS3</p>
          </div>
        </div>
        
        <div className="bg-terminal-lightBg p-6 rounded">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Vector Surveillance Laboratory</h2>
            <span className="text-terminal-amber">2020 - 2021</span>
          </div>
          
          <p className="mb-4">
            A virtual laboratory web application for vector surveillance, monitoring Zika, Chikungunya, and Dengue in Puerto Rico.
            As a Developer, I was responsible for both front-end and back-end implementation, creating a platform for
            scientists and health officials to track mosquito populations and disease outbreaks.
          </p>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Real-time monitoring dashboards</li>
              <li>Geospatial visualization of outbreak data</li>
              <li>Secure data collection and management</li>
              <li>Automated alerts and reporting systems</li>
              <li>Analytics tools for trend identification</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Technologies</h3>
            <p>React, Node.js, PostgreSQL, SQL Server</p>
          </div>
          
          <a href="https://lab.prvectorcontrol.org/" className="text-terminal-amber hover:underline">
            Visit project: https://lab.prvectorcontrol.org/
          </a>
        </div>
        
        <div className="bg-terminal-lightBg p-6 rounded">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold">Quality Risk Management App</h2>
            <span className="text-terminal-amber">2018</span>
          </div>
          
          <p className="mb-4">
            Developed a Quality Risk Management application for life sciences companies while working at CINCO Engineering.
            The application helped organizations identify, assess, and mitigate risks in their operational processes.
          </p>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Key Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Risk assessment workflow automation</li>
              <li>User authentication and role-based permissions</li>
              <li>Document management and version control</li>
              <li>Compliance reporting and audit trails</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold text-terminal-amber mb-2">Technologies</h3>
            <p>MongoDB, Express.js, Angular, Node.js (MEAN stack)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage; 