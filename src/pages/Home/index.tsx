import { define, useHead } from "@effuse/core";
import { Link } from "@effuse/router";
import { initPageAnimations } from "../../utils/animations";
import { SOCIAL_LINKS, DOCUMENTS } from "../../constants";

export const HomePage = define({
  script: ({ onMount }) => {
    useHead({
      title: "Chris M. Pérez",
      description:
        "Software developer specializing in 3D mapping, AR, and full-stack development.",
    });

    onMount(() => {
      requestAnimationFrame(() => {
        initPageAnimations();
      });
      return () => {};
    });

    return {};
  },
  template: ({}) => (
    <div>
      <section class="mb-12 md:mb-20" data-animate="hero">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/30 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>
        <h1 class="heading-hero text-gray-900 hover:text-gray-900 mb-4">
          Hey, I'm Chris
        </h1>
        <p class="text-lg text-gray-500 leading-relaxed max-w-xl">
          I'm a software developer with a genuine love for system architecture
          and functional design. I started my journey with Java, but while still
          new to programming, I discovered the world of functional programming
          through Haskell—thanks to creators like Tsoding. Both paradigms shaped
          my early foundation, blending sturdy object-oriented principles with
          functional elegance.
          <br />
          <br />
          Curious about how modern web tools actually work under the hood, I
          built Effuse, my own fine-grained reactive framework. This website is
          a living demo of what it can do, running entirely without a virtual
          DOM.
          <br />
          <br />
          Offline, I'm a percussionist and cultural explorer who cares a lot
          about scientific literacy and staying politically engaged. I thrive in
          tropical weather and am currently looking for the right opportunity to
          build impactful software.
        </p>
        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={DOCUMENTS.RESUME}
            class="btn-primary w-full sm:w-auto text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
          <div class="flex flex-col sm:flex-row gap-3">
            <a
              href={SOCIAL_LINKS.EMAIL}
              class="btn-secondary w-full sm:w-auto text-center"
            >
              Get in touch
            </a>
            <Link
              to="/projects"
              class="btn-secondary w-full sm:w-auto text-center"
            >
              View projects
            </Link>
          </div>
        </div>
        <div class="mt-8 text-left">
          <p class="text-gray-600">
            Contact me:{" "}
            <a href="mailto:chrisperezsantiago1@gmail.com">
              chrisperezsantiago1@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  ),
});
