import { useEffect, useRef } from 'react';
import { createScope } from 'animejs';
import { runTransitionAnimation, pulseElement } from '../utils/setupAnimations';

// This is a utility component that can be imported in any page component
// to add standardized animations across the site
const usePageAnimations = (rootRef) => {
  const scopeRef = useRef(null);

  useEffect(() => {
    // Only run animations if the root element exists
    if (!rootRef.current) return;

    // Create animation scope with a small delay to ensure DOM is ready
    setTimeout(() => {
      try {
        // Create scope with rootRef
        const scope = createScope({ root: rootRef });
        
        // Create methods object with animation functions
        scope.methods = {
          transitionContent: runTransitionAnimation,
          pulseElement: pulseElement
        };
        
        // Store the scope
        scopeRef.current = scope;
      } catch (error) {
        console.error("Error initializing animations:", error);
      }
    }, 200);

    // Cleanup
    return () => {
      if (scopeRef.current) {
        try {
          scopeRef.current.revert();
        } catch (error) {
          console.error("Error cleaning up animations:", error);
        }
      }
    };
  }, [rootRef]);

  return scopeRef;
};

export default usePageAnimations; 