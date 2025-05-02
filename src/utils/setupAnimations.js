import { animate } from "animejs";

// Initialize anime.js globally
if (typeof window !== "undefined") {
  window.anime = animate;
}

// Function to run animations on the current page
export const runPageAnimations = () => {
  if (typeof window === "undefined") return;

  // Add a small delay to ensure DOM elements are fully rendered
  setTimeout(() => {
    try {
      // Page container animation - already visible, animate transition
      const pageContainers = document.querySelectorAll(".page-container");
      if (pageContainers.length > 0) {
        animate(".page-container", {
          translateY: [15, 0],
          duration: 800,
          easing: "easeOutExpo",
        });
      }

      // Section titles animation
      const sectionTitles = document.querySelectorAll(".section-title");
      if (sectionTitles.length > 0) {
        animate(".section-title", {
          translateX: [-15, 0],
          duration: 600,
          delay: (el, i) => i * 120,
          easing: "easeOutCubic",
        });
      }

      // Content cards animation
      const contentCards = document.querySelectorAll(".content-card");
      if (contentCards.length > 0) {
        animate(".content-card", {
          translateY: [10, 0],
          duration: 500,
          delay: (el, i) => i * 100 + 200,
          easing: "easeOutQuad",
        });
      }

      // List items animation
      const listItems = document.querySelectorAll(".list-item");
      if (listItems.length > 0) {
        animate(".list-item", {
          translateX: [-10, 0],
          duration: 400,
          delay: (el, i) => i * 40 + 300,
          easing: "easeOutSine",
        });
      }
    } catch (error) {
      console.error("Animation setup error:", error);
    }
  }, 100);
};

// Helper function for transition animations
export const runTransitionAnimation = () => {
  try {
    animate(".content-transition", {
      opacity: [0.5, 1],
      translateY: [10, 0],
      duration: 400,
      easing: "easeOutQuad",
    });
  } catch (error) {
    console.error("Transition animation error:", error);
  }
};

// Helper function for element pulse animations
export const pulseElement = (selector) => {
  try {
    animate(selector, {
      scale: [1, 1.1, 1],
      duration: 400,
      easing: "easeInOutSine",
    });
  } catch (error) {
    console.error("Pulse animation error:", error);
  }
};

export default {
  runPageAnimations,
  runTransitionAnimation,
  pulseElement,
};
