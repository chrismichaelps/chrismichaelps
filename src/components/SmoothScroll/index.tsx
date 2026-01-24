import { define } from "@effuse/core";
import Lenis from "lenis";
import { isNotNullish } from "../../lib/data/predicate";

export const SmoothScroll = define({
  script: ({ onMount }) => {
    let lenis: Lenis | null = null;

    onMount(() => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      function raf(time: number) {
        if (isNotNullish(lenis)) {
          lenis.raf(time);
        }
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        if (isNotNullish(lenis)) {
          lenis.destroy();
        }
        lenis = null;
      };
    });

    return {};
  },
  template: () => null,
});
