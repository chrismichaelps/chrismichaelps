import { define } from "@effuse/core";
import { themeStore } from "../../store";

export const Footer = define({
  script: ({}) => ({
    year: new Date().getFullYear(),
    isDark: themeStore.isDark,
  }),
  template: ({ year, isDark }) => (
    <footer class="mt-20 py-8 text-sm text-gray-400">
      <div class="flex items-center justify-between">
        <p>MIT {year} © Chris M. Pérez</p>
        <div class="flex items-center gap-2 text-xs">
          <img
            src={
              isDark.value
                ? "/icons/effuse-logo-white.svg"
                : "/icons/effuse-logo.svg"
            }
            alt="Effuse Logo"
            class="h-4 w-4"
          />
          <span>Powered by Effuse</span>
        </div>
      </div>
    </footer>
  ),
});
