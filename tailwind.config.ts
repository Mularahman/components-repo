import type { Config } from "tailwindcss";

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/libs/**/*.{js,jsx,ts,tsx}',
    './src/utils/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
      container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
   
    fontFamily: {
      ubuntu: 'var(--font-ubuntu), sans-serif',
      quicksand: 'var(--font-quicksand), sans-serif',
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports, no-undef
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;

