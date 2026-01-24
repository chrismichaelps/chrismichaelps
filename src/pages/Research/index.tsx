import { define, useHead } from "@effuse/core";
import { initPageAnimations } from "../../utils/animations";
import { PROJECT_LINKS } from "../../constants";

export const ResearchPage = define({
  script: ({ onMount }) => {
    useHead({
      title: "Research | Chris M. Pérez",
      description: "Research work and academic projects by Chris M. Pérez",
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
      <section class="mb-8 md:mb-12" data-animate="hero">
        <h1 class="heading-hero text-gray-900 mb-4">Research</h1>
        <p class="text-lg text-gray-500 leading-relaxed max-w-xl">
          Academic research and scientific projects.
        </p>
      </section>

      <section data-animate="section">
        <div data-animate="list">
          <div class="space-y-6" data-animate="item">
            <div class="border-b border-gray-100 pb-6">
              <h3 class="text-gray-900 font-medium text-lg">
                Junior Programmer: Research Work
              </h3>
              <p class="text-gray-500 mt-1">
                Medical Science Campus, UPR · San Juan, Puerto Rico
              </p>
              <p class="text-gray-400 text-sm mt-1">
                April 2016 – May 2017 · 1 year 2 months
              </p>
            </div>

            <p class="text-gray-600 leading-relaxed">
              Researched work in the area of bioinformatics constructing,
              combining, optimizing, and searching finite-state transducers
              weighted (FST) in C++ and Python.
            </p>

            <p class="text-gray-600 leading-relaxed mt-4">
              <strong>Example implementation:</strong>{" "}
              <a
                href={PROJECT_LINKS.FASTA_TO_FST}
                class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fast-to-FST: Efficient Conversion of FastA to FST Format
              </a>
             </p>

            <div class="space-y-3">
              <h4 class="text-sm font-medium text-gray-400 uppercase tracking-wide">
                Tools & Technologies
              </h4>
              <ul class="text-gray-600 space-y-2">
                <li class="flex items-start gap-3">
                  <span class="text-gray-400">•</span>
                  <span>
                    <span class="text-gray-900 font-medium">pyfst:</span>{" "}
                    OpenFst in Python
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-gray-400">•</span>
                  <span>
                    <span class="text-gray-900 font-medium">OpenFst:</span> C++
                    Library
                  </span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-gray-400">•</span>
                  <span>Development environment: Linux Ubuntu 14.04</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
});
