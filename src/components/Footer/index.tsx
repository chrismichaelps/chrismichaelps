import { define } from "@effuse/core";

export const Footer = define({
  script: ({}) => ({
    year: new Date().getFullYear(),
  }),
  template: ({ year }) => (
    <footer class="mt-20 py-8 text-sm text-gray-400">
      <p>MIT {year} © Chris M. Pérez</p>
    </footer>
  ),
});
