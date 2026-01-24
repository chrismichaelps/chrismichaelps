import { define } from "@effuse/core";
import type { AppLayoutProps } from "../types";

export const AppLayout = define<AppLayoutProps>({
  script: ({}) => ({}),
  template: ({ children }) => (
    <div class="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-4 py-6 transition-colors duration-300">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  ),
});
