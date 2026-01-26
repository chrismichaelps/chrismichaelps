import { define, useHead, type Signal } from "@effuse/core";
import { initPageAnimations } from "../../utils/animations";
import { themeStore } from "../../store";
import { LOCAL_ICONS_PATH, SKILLS_DATA } from "../../constants/skills";
import type { SkillItem, SkillCategoryData } from "../../types";

const getIconUrl = (skill: SkillItem, isDark: boolean): string => {
  if (skill.isEffuse) {
    return isDark ? "/icons/effuse-logo-white.svg" : "/icons/effuse-logo.svg";
  }
  if (skill.iconName.endsWith(".svg")) {
    return `${LOCAL_ICONS_PATH}/${skill.iconName}`;
  }
  if (isDark && skill.hasPlainVariant) {
    return `${LOCAL_ICONS_PATH}/${skill.iconName}-plain.svg`;
  }
  return `${LOCAL_ICONS_PATH}/${skill.iconName}-original.svg`;
};

const SkillCard = ({
  skill,
  isDark,
}: {
  skill: SkillItem;
  isDark: Signal<boolean>;
}) => {
  return (
    <div class="group relative flex items-center gap-4 px-5 py-4 rounded-[var(--radius-sm)] bg-[var(--color-surface-secondary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)] hover:shadow-lg transition-all duration-300 cursor-default">
      <div class="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] group-hover:scale-110 group-hover:shadow-sm transition-all duration-300 overflow-hidden">
        <img
          src={getIconUrl(skill, isDark.value)}
          alt={skill.name}
          class="w-7 h-7 object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
          onError={(e: string | Event) => {
            if (typeof e !== "string") {
              (e.target as HTMLImageElement).parentElement!.style.display =
                "none";
            }
          }}
        />
      </div>
      <span class="text-sm md:text-base font-medium text-[var(--color-on-surface-secondary)] group-hover:text-[var(--color-on-surface)] transition-colors duration-300">
        {skill.name}
      </span>
    </div>
  );
};

const CategorySection = ({
  category,
  isDark,
}: {
  category: SkillCategoryData;
  isDark: Signal<boolean>;
}) => (
  <div class="space-y-6">
    <div class="flex flex-col gap-1 border-b border-[var(--color-border)] pb-4">
      <h3 class="text-xl md:text-2xl font-semibold text-[var(--color-on-surface)] tracking-tight">
        {category.title}
      </h3>
      {category.description && (
        <span class="text-xs md:text-sm text-[var(--color-on-surface-muted)] font-medium italic">
          {category.description}
        </span>
      )}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {category.items.map((skill) => (
        <SkillCard skill={skill} isDark={isDark} />
      ))}
    </div>
  </div>
);

export const TechPage = define({
  script: ({ onMount }) => {
    useHead({
      title: "Tech Stack | Chris M. Pérez",
      description: "My technical skills and technology stack.",
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
    <div class="w-full">
      <section class="max-w-5xl mx-auto px-4 py-8 md:py-16" data-animate="hero">
        <div class="mb-14 text-center md:text-left">
          <h1 class="heading-hero text-[var(--color-on-surface)] mb-5">
            Tech Stack
          </h1>
          <p class="text-lg md:text-xl text-[var(--color-on-surface-secondary)] leading-relaxed max-w-2xl mx-auto md:mx-0">
            A comprehensive overview of the languages, frameworks, and
            infrastructure tools I leverage to build production-grade software
            and high-performance visualizations.
          </p>
        </div>

        <div class="space-y-10 md:space-y-12">
          {SKILLS_DATA.map((category) => (
            <CategorySection category={category} isDark={themeStore.isDark} />
          ))}
        </div>
      </section>
    </div>
  ),
});
