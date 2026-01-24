import { defineHook, type Signal } from '@effuse/core';

export interface UseMobileMenuReturn {
  readonly isOpen: Signal<boolean>;
  readonly toggle: () => void;
  readonly open: () => void;
  readonly close: () => void;
}

export const useMobileMenu = defineHook<{}, UseMobileMenuReturn>({
  name: 'useMobileMenu',
  setup: ({ signal }) => {
    const isOpen = signal(false);

    const updateMenuVisibility = (open: boolean) => {
      isOpen.value = open;
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileMenu) {
        if (open) {
          mobileMenu.classList.remove('hidden');
        } else {
          mobileMenu.classList.add('hidden');
        }
      }
    };

    const toggle = () => {
      updateMenuVisibility(!isOpen.value);
    };

    const open = () => {
      updateMenuVisibility(true);
    };

    const close = () => {
      updateMenuVisibility(false);
    };

    return {
      isOpen,
      toggle,
      open,
      close,
    };
  },
});