import { useState, useRef } from 'react';
import { pulseElement, runTransitionAnimation } from '../../utils/setupAnimations';

const LibrariesPage = () => {
  const [activeLibrary, setActiveLibrary] = useState(0);
  const rootRef = useRef(null);

  const handleLibraryChange = (index) => {
    setActiveLibrary(index);
    // Run transition animation without relying on scope methods
    runTransitionAnimation();
    
    // Add a custom animation for the active library button using pulse directly
    pulseElement(`.library-button-${index}`);
  };

  const libraries = [
    {
      id: 1,
      name: "VEffect",
      language: "TypeScript",
      url: "https://github.com/chrismichaelps/veffect",
      description: "VEffect Validation is a powerful TypeScript validation library built on the robust foundation of Effect, combining exceptional type safety, high performance, and developer experience. Taking inspiration from Effect's functional principles.",
      features: [
        "🔍 Type-Safe - Full TypeScript integration with inferred types",
        "⚡ High Performance - Built on a functional core for speed and reliability",
        "🛡️ Comprehensive Validation - Rich set of validators for common use cases",
        "🧩 Composable - Build complex schemas from simple building blocks",
        "🔄 Functional - Clean API that encourages immutable operations",
        "💬 Detailed Errors - Helpful error messages with path tracking",
        "🔀 Pattern Matching - Dynamic schema selection based on input values",
        "⚖️ Discriminated Unions - First-class support for TypeScript's discriminated unions",
        "📚 Schema Registry - Store and manage schemas with metadata",
        "🧬 Interface Schema - Powerful schema with explicit key optionality",
        "🔄 Recursive Types - True type-safe recursive structures without type assertions",
        "🔄 Key vs Value Optionality - Clear distinction between optional keys and optional values"
      ]
    },
    {
      id: 2,
      name: "QuantumMatcher",
      language: "TypeScript",
      url: "https://github.com/chrismichaelps/quantummatcher",
      description: "QuantumMatcher library is a fuzzy matching algorithm that leverages bitwise operations to efficiently find approximate matches within a collection of items.",
      features: [
        "Fuzzy Matching: Efficiently finds approximate matches in a collection",
        "Customizable Keys: Specify which keys of the items to match against",
        "Match Quality Calculation: Considers match ratio, contiguity, position, and partial matches",
        "Sorted Results: Returns results sorted by match score"
      ]
    },
    {
      id: 3,
      name: "FASTA-to-FST",
      language: "C++",
      url: "https://github.com/chrismichaelps/fasta-to-fst",
      description: "This project demonstrates how to convert FASTA files to Finite State Transducers (FSTs). It provides a simple workflow for building the project, converting a FASTA file to an FST, and visualizing the result.",
      features: [
        "FASTA file parsing",
        "Efficient conversion to FST format",
        "Visualization tools",
        "Command-line interface",
        "Bioinformatics utilities"
      ]
    }
  ];

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
                {libraries.map((lib, index) => (
                  <li key={lib.id} className="list-item">
                    <button
                      onClick={() => handleLibraryChange(index)}
                      className={`library-button-${index} w-full text-left p-2 rounded text-sm sm:text-base ${
                        activeLibrary === index
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
                {libraries[activeLibrary].name}
              </h3>
              <a 
                href={libraries[activeLibrary].url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-terminal-green/20 text-terminal-green px-3 py-1 rounded hover:bg-terminal-green/30 transition-colors text-sm github-link"
                onClick={() => pulseElement('.github-link')}
              >
                View on GitHub
              </a>
            </div>
            
            <div className="mb-4 text-sm sm:text-base bg-terminal-lightBg p-3 rounded dot-pattern-dark">
              <p className="mb-3">{libraries[activeLibrary].description}</p>
            </div>
            
            <div className="mt-4">
              <h4 className="text-base font-semibold mb-2 text-terminal-amber section-title">Key Features</h4>
              <div className="max-h-[300px] overflow-y-auto pr-2">
                <ul className="space-y-1 ml-4 list-disc text-xs sm:text-sm">
                  {libraries[activeLibrary].features.map((feature, idx) => (
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
                        libraries[activeLibrary].language === 'TypeScript' ? '#3178c6' : 
                        libraries[activeLibrary].language === 'C++' ? '#f34b7d' : '#ccc' 
                    }}
                  ></span>
                  {libraries[activeLibrary].language}
                </span>
                <a 
                  href={`${libraries[activeLibrary].url}/fork`}
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