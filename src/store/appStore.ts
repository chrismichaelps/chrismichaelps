import { createStore } from '@effuse/store';
import { taggedEnum } from '../lib/data/tagged-enum';
import { AppState, AppStoreState, AppStoreActions } from '../types';

const State = taggedEnum<AppState>();

export const appStore = createStore<AppStoreActions & AppStoreState>(
  'app',
  {
    appState: State.Loading({}),
    isLoading: true,

    setReady() {
      this.appState.value = State.Ready({});
      this.isLoading.value = false;
    },

    setError(message: string) {
      this.appState.value = State.Error({ message });
      this.isLoading.value = false;
    },

    getErrorMessage() {
      return State.$match(this.appState.value, {
        Loading: () => null,
        Ready: () => null,
        Error: ({ message }) => message,
      });
    },
  },
  { devtools: true }
);

export type { AppState };
