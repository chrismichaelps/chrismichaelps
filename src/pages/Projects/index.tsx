import { define, useHead, For, type Signal, signal } from "@effuse/core";
import { initPageAnimations } from "../../utils/animations";
import { themeStore } from "../../store";
import type { Project } from "../../types";
import { PROJECT_LINKS } from "../../constants";

const projects: Project[] = [
  {
    title: "Effuse",
    description:
      "Effuse is a personal exploration into building a modern reactive framework. It prioritizes simplicity and fine-grained reactivity using Signals, offering a familiar developer experience without the complexity of a virtual DOM.\n\nIt's designed to be intuitive and minimalist, helping you build fast, interactive web applications with less boilerplate. While it borrows good ideas from the ecosystem, it aims to remain small and understandable.",
    link: PROJECT_LINKS.EFFUSE,
    logo: "/icons/effuse-logo.svg",
  },
  {
    title: "Effuse Docs",
    description: "Official documentation for the Effuse framework.",
    link: PROJECT_LINKS.EFFUSE_DOCS,
    logo: "/icons/effuse-logo.svg",
  },
];

export const ProjectsPage = define({
  script: ({ onMount }) => {
    useHead({
      title: "Projects | Chris M. Pérez",
      description: "Open source libraries and tools by Chris M. Pérez",
    });

    onMount(() => {
      requestAnimationFrame(() => {
        initPageAnimations();
      });
      return () => {};
    });

    return {
      projects: signal(projects),
      isDark: themeStore.isDark,
    };
  },
  template: ({ projects, isDark }) => (
    <div>
      <section class="mb-8 md:mb-12" data-animate="hero">
        <h1 class="heading-hero text-gray-900 mb-4">Projects</h1>
        <p class="text-lg text-gray-500 leading-relaxed max-w-xl">
          Open source libraries and tools I've built.
        </p>
      </section>

      <section data-animate="section">
        <div data-animate="list" class="space-y-8">
          <For each={projects}>
            {(project: Signal<Project>) => (
              <a
                href={project.value.link}
                target="_blank"
                rel="noopener noreferrer"
                class="group block hover:opacity-100 transition-opacity"
                data-animate="item"
              >
                <div class="flex items-start gap-3 md:gap-4">
                  <div class="flex-shrink-0 mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div class="relative w-8 h-8">
                      <img
                        src={
                          isDark.value
                            ? "/icons/effuse-logo-white.svg"
                            : "/icons/effuse-logo.svg"
                        }
                        alt={`${project.value.title} Logo`}
                        class="absolute inset-0 w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-baseline gap-3">
                      <span class="text-gray-900 font-medium text-lg border-b border-transparent group-hover:border-gray-900 transition-colors">
                        {project.value.title}
                      </span>
                    </div>
                    <p class="text-gray-500 mt-1 leading-relaxed whitespace-pre-line">
                      {project.value.description}
                    </p>
                  </div>
                </div>
              </a>
            )}
          </For>
        </div>
      </section>
    </div>
  ),
});
