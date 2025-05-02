const AcademicPage = () => {
  return (
    <div className="space-y-8">
      <div className="terminal-heading mb-6">
        <span className="text-terminal-amber">_</span> Academic Research
      </div>
      
      <div className="bg-terminal-lightBg p-8 rounded-md shadow-lg border border-terminal-green/20">
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-terminal-green/30">
          Bioinformatics Research
        </h2>
        
        <div className="flex items-start gap-6 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-1/3">
            <div className="bg-terminal-bg p-4 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-terminal-amber text-lg">Junior Developer</h3>
                <span className="text-sm bg-terminal-green/20 text-terminal-green px-2 py-1 rounded">2016 - 2017</span>
              </div>
              <p className="text-gray-400 mb-2">Medical Science Campus, UPR</p>
              <div className="space-y-2 mt-4">
                <div className="flex items-center">
                  <span className="text-terminal-amber mr-2">•</span>
                  <p className="text-gray-300 text-sm">Tools: pyfst (Python), OpenFst (C++)</p>
                </div>
                <div className="flex items-center">
                  <span className="text-terminal-amber mr-2">•</span>
                  <p className="text-gray-300 text-sm">Environment: Linux</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-xl font-bold text-terminal-amber mb-4">Project Overview</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Researched work in the area of bioinformatics constructing, combining, optimizing, and searching 
              finite-state transducers weighted. This research focused on applying computational models to biological data 
              for enhanced sequence analysis and pattern recognition.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-terminal-amber mb-2">Research Focus</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Development of algorithms for finite-state transducers in bioinformatics applications</li>
                  <li>Optimization of weighted transducers for improved performance in sequence analysis</li>
                  <li>Implementation of search algorithms for biological sequence patterns</li>
                  <li>Integration of Python and C++ components for computational biology workflows</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-terminal-amber mb-2">Technical Contributions</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  <li>Implemented custom Python bindings for the OpenFst C++ library</li>
                  <li>Developed optimized algorithms for DNA/RNA sequence pattern matching</li>
                  <li>Created visualization tools for weighted transducer graphs</li>
                  <li>Worked with biological datasets for testing and validation of computational methods</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-terminal-green/30">
              <h4 className="font-bold text-terminal-amber mb-3">About Finite-State Transducers in Bioinformatics</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Finite-state transducers (FSTs) are computational models that map between input and output strings, 
                making them powerful tools for sequence analysis in bioinformatics. Weighted FSTs extend this concept 
                by assigning weights to transitions, allowing for probabilistic analysis of biological sequences.
                This research explored novel applications of these models in DNA/RNA sequence analysis, pattern 
                recognition, and computational genomics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicPage; 