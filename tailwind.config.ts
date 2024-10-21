import type { Config } from "tailwindcss";

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/libs/**/*.{js,jsx,ts,tsx}',
    './src/utils/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;

