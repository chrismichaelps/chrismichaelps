import { define, For, type Signal, signal } from "@effuse/core";
import { Link } from "@effuse/router";
import { themeStore } from "../../store";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import type { NavItem, SocialLink } from "../../types";
import { SOCIAL_LINKS, ICON_SIZES } from "../../constants";

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/tech", label: "Skills" },
];

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: SOCIAL_LINKS.GITHUB,
    icon: "/icons/github.svg",
  },
  {
    name: "LinkedIn",
    url: SOCIAL_LINKS.LINKEDIN,
    icon: "/icons/linkedin.svg",
  },
  { name: "RSS", url: "/rss.xml", icon: "/icons/rss.svg" },
];

const AnimatedLogo = () => <div class="signature-logo">Chris</div>;

export const Header = define({
  script: ({}) => {
    const mobileMenu = useMobileMenu({});

    return {
      navItems: signal(navItems),
      socialLinks: signal(socialLinks),
      isDark: themeStore.isDark,
      toggleTheme: themeStore.toggleTheme,
      isMenuOpen: mobileMenu.isOpen,
      toggleMobileMenu: mobileMenu.toggle,
      closeMobileMenu: mobileMenu.close,
    };
  },
  template: ({
    navItems,
    socialLinks,
    isDark,
    toggleTheme,
    isMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
  }) => (
    <header class="mb-8 md:mb-12 relative">
      <nav class="flex items-center justify-between py-4 px-4 md:px-0">
        <Link
          to="/"
          class="logo-link hover:opacity-70 transition-opacity text-gray-900 dark:text-white"
        >
          <AnimatedLogo />
        </Link>

        <div class="flex items-center gap-3 md:gap-6">
          <div class="hidden md:flex items-center gap-6">
            <div class="flex items-center gap-5">
              <For each={navItems}>
                {(item: Signal<NavItem>) => (
                  <Link to={item.value.to} class="nav-link">
                    {item.value.label}
                  </Link>
                )}
              </For>
            </div>

            <div class="flex items-center gap-3">
              <For each={socialLinks}>
                {(link: Signal<SocialLink>) => (
                  <a
                    href={link.value.url}
                    target={link.value.name === "RSS" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    class="icon-btn"
                    title={link.value.name}
                  >
                    <img
                      src={link.value.icon}
                      alt={link.value.name}
                      class="icon-img"
                      style={`width: ${ICON_SIZES.SMALL}; height: ${ICON_SIZES.SMALL};`}
                    />
                  </a>
                )}
              </For>
            </div>

            <button
              onClick={toggleTheme}
              class="icon-btn theme-toggle"
              title="Toggle theme"
            >
              <img
                src={isDark.value ? "/icons/sun.svg" : "/icons/moon.svg"}
                alt="Toggle theme"
                class="icon-img"
                style={`width: ${ICON_SIZES.SMALL}; height: ${ICON_SIZES.SMALL};`}
              />
            </button>
          </div>

          <div class="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              class="icon-btn theme-toggle p-2"
              title="Toggle theme"
            >
              <img
                src={isDark.value ? "/icons/sun.svg" : "/icons/moon.svg"}
                alt="Toggle theme"
                class="icon-img"
                style={`width: ${ICON_SIZES.SMALL}; height: ${ICON_SIZES.SMALL};`}
              />
            </button>

            <button
              class="icon-btn p-3 transition-transform duration-300 ease-in-out"
              title={isMenuOpen.value ? "Close menu" : "Open menu"}
              onClick={toggleMobileMenu}
            >
              <div
                class={`transition-transform duration-300 ease-in-out ${isMenuOpen.value ? "rotate-90" : "rotate-0"}`}
              >
                <img
                  src={
                    isMenuOpen.value
                      ? "/icons/close.svg"
                      : "/icons/hamburger.svg"
                  }
                  alt={isMenuOpen.value ? "Close menu" : "Open menu"}
                  class="icon-img transition-transform duration-300 ease-in-out"
                  style={`width: ${ICON_SIZES.SMALL}; height: ${ICON_SIZES.SMALL};`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        class={`bg-white dark:bg-[#121212] border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen.value ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav class="px-6 py-4">
          <div class="flex flex-col space-y-4">
            <For each={navItems}>
              {(item: Signal<NavItem>) => (
                <Link
                  to={item.value.to}
                  class="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors block py-2"
                  onClick={closeMobileMenu}
                >
                  {item.value.label}
                </Link>
              )}
            </For>
          </div>
        </nav>

        <div class="px-6 pb-6 mt-2">
          <div class="flex items-center justify-center gap-8 pt-4 border-t border-gray-100 dark:border-gray-800">
            <For each={socialLinks}>
              {(link: Signal<SocialLink>) => (
                <a
                  href={link.value.url}
                  target={link.value.name === "RSS" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  title={link.value.name}
                >
                  <img
                    src={link.value.icon}
                    alt={link.value.name}
                    class="icon-img"
                    style={`width: 20px; height: 20px;`}
                  />
                </a>
              )}
            </For>
          </div>
        </div>
      </div>
    </header>
  ),
});
