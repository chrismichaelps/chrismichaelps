import { useState, useRef } from 'react';
import { pulseElement, runTransitionAnimation } from '../../utils/setupAnimations';

const PapersPage = () => {
  const [selectedPaper, setSelectedPaper] = useState(0);
  const rootRef = useRef(null);

  const handlePaperSelection = (index) => {
    setSelectedPaper(index);
    // Run transition animation directly
    runTransitionAnimation();
  };

  const handleDownloadClick = () => {
    // Pulse the download button directly
    pulseElement('.download-button');
  };

  const papers = [
    {
      id: 1,
      title: "The Benefits of Converting FASTA to FST: A Computational Perspective",
      authors: "Chris M. Pérez",
      date: "February 16, 2025",
      path: "/paper-fasta-to-fst.pdf"
    }
  ];

  return (
    <div className="space-y-6 max-w-full overflow-x-hidden page-container" ref={rootRef}>
      <div className="terminal-heading mb-4 section-title">
        <span className="text-terminal-amber">_</span> Published Papers
      </div>
      
      <div className="bg-terminal-lightBg p-3 sm:p-6 rounded-md shadow-lg border border-terminal-green/20 dot-pattern content-card">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 border-b border-terminal-green/30 pb-3 sm:pb-4 section-title">
          Research Publications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 max-h-[300px] overflow-y-auto pr-2">
          {papers.map((paper, index) => (
            <div 
              key={paper.id} 
              className={`bg-terminal-bg p-3 sm:p-4 rounded-md hover:border-terminal-green/50 border ${selectedPaper === index ? 'border-terminal-green' : 'border-terminal-green/20'} transition-colors cursor-pointer content-card list-item`}
              onClick={() => handlePaperSelection(index)}
            >
              <h3 className="font-bold text-terminal-amber mb-2 break-words">{paper.title}</h3>
              <p className="text-gray-400 text-sm mb-2 break-words">{paper.authors}</p>
              <p className="text-gray-500 text-xs mb-3 sm:mb-4 break-words">{paper.date}</p>
              <div className="flex justify-between items-center">
                <span className="bg-terminal-green/20 text-terminal-green px-2 py-1 rounded text-xs">PDF</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-terminal-bg p-3 sm:p-6 rounded-md content-card content-transition">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <h3 className="font-bold text-terminal-amber text-base sm:text-lg break-words section-title">
              {papers[selectedPaper].title}
            </h3>
            <a 
              href={papers[selectedPaper].path} 
              download
              className="bg-terminal-green/20 text-terminal-green px-3 py-2 rounded hover:bg-terminal-green/30 transition-colors text-sm whitespace-nowrap download-button"
              onClick={handleDownloadClick}
            >
              Download PDF
            </a>
          </div>
          
          <div className="rounded-md overflow-hidden min-h-[300px] sm:min-h-[600px] bg-white mb-4">
            <iframe 
              src={papers[selectedPaper].path} 
              title={papers[selectedPaper].title}
              className="w-full h-[300px] sm:h-[600px]"
            ></iframe>
          </div>
          
          <div className="text-gray-400 text-sm list-item">
            <p className="break-words">
              <span className="text-terminal-green">Authors:</span> {papers[selectedPaper].authors}
            </p>
            <p className="break-words">
              <span className="text-terminal-green">Year:</span> {papers[selectedPaper].date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PapersPage; 