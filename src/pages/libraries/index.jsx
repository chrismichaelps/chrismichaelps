import { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pulseElement, runTransitionAnimation } from '../../utils/setupAnimations';
import LIBRARIES from '../../assets/json/libraries.json';
import { setActiveLibrary } from '../../store/librarySlice';

const LibrariesPage = () => {
  const activeLibraryIndex = useSelector((state) => state.library.activeLibrary);
  const dispatch = useDispatch();
  const rootRef = useRef(null);

  // Memoized handler to prevent unnecessary re-renders
  const handleLibraryChange = useCallback((index) => {
    dispatch(setActiveLibrary(index));
    runTransitionAnimation();
    pulseElement(`.library-button-${index}`);
  }, [dispatch]);

  // Memoized handler for GitHub link clicks
  const handleGitHubClick = useCallback(() => {
    pulseElement('.github-link');
  }, []);

  const activeLibrary = LIBRARIES[activeLibraryIndex];

  return (
    <div className="space-y-6 max-w-full overflow-x-hidden page-container" ref={rootRef}>
      <div className="terminal-heading mb-4 section-title">
        <span className="text-terminal-amber">_</span> Open Source Libraries
      </div>
      
      <div className="bg-terminal-lightBg p-3 sm:p-6 rounded-md shadow-lg border border-terminal-green/20 dot-pattern content-card">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b border-terminal-green/30 pb-3 sm:pb-4 section-title">
          Software Libraries & Projects
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <div className="p-3 sm:p-4 bg-terminal-bg rounded content-card">
              <h3 className="text-lg font-bold mb-3 text-terminal-amber section-title">Libraries</h3>
              <ul className="space-y-2">
                {LIBRARIES.map((lib, index) => (
                  <li key={lib.id} className="list-item">
                    <button
                      onClick={() => handleLibraryChange(index)}
                      className={`library-button-${index} w-full text-left p-2 rounded text-sm sm:text-base ${
                        activeLibraryIndex === index
                          ? 'bg-terminal-green text-terminal-bg font-bold'
                          : 'hover:bg-terminal-bg/60'
                      }`}
                    >
                      <span className="text-terminal-amber mr-2">&gt;</span>
                      {lib.name}
                      <span className="ml-2 text-xs opacity-70">{lib.language}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 p-3 sm:p-4 bg-terminal-bg rounded content-card content-transition">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-terminal-amber section-title">
                {activeLibrary.name}
              </h3>
              <a 
                href={activeLibrary.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-terminal-green/20 text-terminal-green px-3 py-1 rounded hover:bg-terminal-green/30 transition-colors text-sm github-link"
                onClick={handleGitHubClick}
              >
                View on GitHub
              </a>
            </div>
            
            <div className="mb-4 text-sm sm:text-base bg-terminal-lightBg p-3 rounded dot-pattern-dark">
              <p className="mb-3">{activeLibrary.description}</p>
            </div>
            
            <div className="mt-4">
              <h4 className="text-base font-semibold mb-2 text-terminal-amber section-title">Key Features</h4>
              <div className="max-h-[300px] overflow-y-auto pr-2">
                <ul className="space-y-1 ml-4 list-disc text-xs sm:text-sm">
                  {activeLibrary.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 list-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-5 pt-3 border-t border-terminal-green/30">
              <div className="flex items-center text-xs text-gray-400">
                <span className="mr-4">
                  <span className="inline-block w-3 h-3 rounded-full mr-1" 
                    style={{ 
                      backgroundColor: 
                      activeLibrary.language === 'TypeScript' ? '#3178c6' : 
                      activeLibrary.language === 'C++' ? '#f34b7d' : '#ccc' 
                    }}
                  ></span>
                  {activeLibrary.language}
                </span>
                <a 
                  href={`${activeLibrary.url}/fork`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mr-4 hover:text-terminal-amber"
                >
                  Fork
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrariesPage; 