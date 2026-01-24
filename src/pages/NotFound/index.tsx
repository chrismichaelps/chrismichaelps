import { define, useHead } from "@effuse/core";
import { Link } from "@effuse/router";
import { initPageAnimations } from "../../utils/animations";

export const NotFoundPage = define({
  script: ({ onMount }) => {
    useHead({
      title: "Page Not Found | Chris M. Pérez",
      description: "The page you are looking for does not exist.",
    });

    onMount(() => {
      requestAnimationFrame(() => {
        initPageAnimations();
      });
      return () => {};
    });

    return {};
  },
  template: () => (
    <div
      class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-12"
      data-animate="hero"
    >
      <div class="mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-full">
        <img
          src="/icons/404-icon.svg"
          alt="Page Not Found"
          class="w-16 h-16 text-gray-900 dark:text-white"
        />
      </div>

      <h1 class="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4">
        Page not found
      </h1>

      <p class="text-gray-500 text-lg mb-8 max-w-md leading-relaxed">
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link to="/" class="btn-primary">
        Return Home
      </Link>
    </div>
  ),
});
