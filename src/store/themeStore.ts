import { createStore } from '@effuse/store';
import { taggedEnum } from '../lib/data/tagged-enum';
import { TaggedError } from '../lib/data/tagged-error';
import { STORAGE_KEYS } from '../constants';
import { logger } from '../utils/logger';
import { animateThemeTransition } from '../utils/animations';
import { ThemeState, ThemeStoreState, ThemeStoreActions } from '../types';

const Theme = taggedEnum<ThemeState>();

function applyTheme(isDark: boolean): void {
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem(STORAGE_KEYS.THEME, 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem(STORAGE_KEYS.THEME, 'light');
  }
}

export const themeStore = createStore<ThemeStoreActions & ThemeStoreState>(
  'theme',
  {
    theme: Theme.Light({}),
    isDark: false,

    initTheme() {
      if (typeof window === 'undefined') return;

      try {
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

        this.theme.value = shouldBeDark ? Theme.Dark({}) : Theme.Light({});
        this.isDark.value = shouldBeDark;
        applyTheme(shouldBeDark);
      } catch (error) {
        const themeError = new (TaggedError('ThemeInitFailed'))({ cause: error, message: 'Failed to initialize theme' });
        logger.error(themeError, { tag: 'ThemeStore' });
        this.theme.value = Theme.Light({});
        this.isDark.value = false;
        document.documentElement.classList.remove('dark');
      }
    },

    setTheme(isDark: boolean, animate: boolean = true) {
      if (animate && typeof window !== 'undefined') {
        animateThemeTransition(() => {
          this.theme.value = isDark ? Theme.Dark({}) : Theme.Light({});
          this.isDark.value = isDark;
          applyTheme(isDark);
        });
      } else {
        this.theme.value = isDark ? Theme.Dark({}) : Theme.Light({});
        this.isDark.value = isDark;
        applyTheme(isDark);
      }
    },

    toggleTheme() {
      const newTheme = !this.isDark.value;

      animateThemeTransition(() => {
        this.theme.value = newTheme ? Theme.Dark({}) : Theme.Light({});
        this.isDark.value = newTheme;
        applyTheme(newTheme);
      });
    },
  },
  { devtools: true }
);