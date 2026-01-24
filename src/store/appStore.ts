import { createStore } from '@effuse/store';
import { taggedEnum } from '../lib/data/tagged-enum';

type AppLoading = { readonly _tag: 'Loading' };
type AppReady = { readonly _tag: 'Ready' };
type AppError = { readonly _tag: 'Error'; readonly message: string };
type AppState = AppLoading | AppReady | AppError;

const State = taggedEnum<AppState>();

export interface AppStoreState {
  appState: AppState;
  isLoading: boolean;
}

export interface AppStoreActions {
  setReady: () => void;
  setError: (message: string) => void;
  getErrorMessage: () => string | null;
}

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
