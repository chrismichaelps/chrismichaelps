import { defineLayer } from "@effuse/core";
import { useBreakpoint } from "../hooks/useBreakpoint";

export const LayoutLayer = defineLayer({
  name: "layout",
  provides: {
    useBreakpoint: () => useBreakpoint,
  },
  setup: () => {
    return () => {};
  },
});
