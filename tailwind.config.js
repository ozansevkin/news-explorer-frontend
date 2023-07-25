/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-roboto-slab)", ...defaultTheme.fontFamily.serif],
      inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      "source-sans-3": [
        "var(--font-source-sans-3)",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    padding: {
      adaptive: "calc(8px + 4.25vw)",
    },
  },
};
