import { define } from "@effuse/core";
import { RouterView } from "@effuse/router";
import { AppLayout } from "./layers/AppLayout";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SmoothScroll } from "./components/SmoothScroll";
import { appStore } from "./store";

export const App = define({
  script: ({}) => {
    return {
      isLoading: appStore.isLoading,
    };
  },
  template: ({ isLoading }) => (
    <AppLayout>
      <SmoothScroll />
      {isLoading.value ? (
        <div class="flex items-center justify-center h-screen">
          <div class="text-center">
            <div class="animate-pulse text-2xl text-white mb-4">Loading...</div>
            <div class="text-gray-400">Setting up the developer profile</div>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <main class="flex-1">
            <RouterView />
          </main>
          <Footer />
        </>
      )}
    </AppLayout>
  ),
});
