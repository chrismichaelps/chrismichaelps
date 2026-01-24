import { defineLayer } from '@effuse/core';
import { appStore } from '../store/appStore';
import { logger } from '../utils/logger';

export const AppStateLayer = defineLayer({
  name: 'appState',
  provides: {
    appStore: () => appStore,
  },
  setup: () => {
    setTimeout(() => {
      appStore.setReady();
    }, 1000);

    return () => {
      logger.info('AppStateLayer cleanup', { tag: 'AppStateLayer' });
    };
  },
});
