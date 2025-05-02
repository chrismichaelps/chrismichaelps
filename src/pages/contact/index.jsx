const ContactPage = () => {
  return (
    <div className="space-y-8">
      <div className="terminal-heading mb-6">
        <span className="text-terminal-amber">_</span> Contact
      </div>
      
      <div className="bg-terminal-lightBg p-8 rounded-md shadow-lg border border-terminal-green/20">
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-terminal-green/30">
          Professional Information
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-terminal-green/10 p-3 rounded-md w-12 h-12 flex items-center justify-center">
                <span className="text-terminal-amber text-xl">📍</span>
              </div>
              <div>
                <h3 className="font-bold text-terminal-amber text-lg mb-1">Location</h3>
                <p className="text-gray-300">Canóvanas, Puerto Rico (Remote)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-terminal-green/10 p-3 rounded-md w-12 h-12 flex items-center justify-center">
                <span className="text-terminal-amber text-xl">✉️</span>
              </div>
              <div>
                <h3 className="font-bold text-terminal-amber text-lg mb-1">Email</h3>
                <a 
                  href="mailto:chrisperezsantiago1@gmail.com"
                  className="text-gray-300 hover:text-terminal-green transition-colors"
                >
                  chrisperezsantiago1@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-terminal-green/10 p-3 rounded-md w-12 h-12 flex items-center justify-center">
                <span className="text-terminal-amber text-xl">🐙</span>
              </div>
              <div>
                <h3 className="font-bold text-terminal-amber text-lg mb-1">GitHub</h3>
                <a 
                  href="https://github.com/chrismichaelps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-terminal-green transition-colors"
                >
                  github.com/chrismichaelps
                </a>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-terminal-green/10 p-3 rounded-md w-12 h-12 flex items-center justify-center">
                <span className="text-terminal-amber text-xl">📱</span>
              </div>
              <div>
                <h3 className="font-bold text-terminal-amber text-lg mb-1">Phone</h3>
                <a 
                  href="tel:9396555195"
                  className="text-gray-300 hover:text-terminal-green transition-colors"
                >
                  939-655-5195
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-terminal-green/10 p-3 rounded-md w-12 h-12 flex items-center justify-center">
                <span className="text-terminal-amber text-xl">💼</span>
              </div>
              <div>
                <h3 className="font-bold text-terminal-amber text-lg mb-1">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/chrisperezsantiago/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-terminal-green transition-colors"
                >
                  linkedin.com/in/chrisperezsantiago
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-terminal-green/30">
          <p className="text-gray-400 text-sm">
            I'm currently working as a Software Developer at MeshMap, focused on 3D mapping and AR technologies. 
            Feel free to reach out if you'd like to discuss collaboration opportunities or have any questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 