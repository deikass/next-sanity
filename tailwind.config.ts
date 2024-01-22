import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'code': {
              color: '#d9775c', // Custom color for code
              backgroundColor: '#f9f7f3', // Custom background color for code block
              padding: '0.5rem', // Custom padding for code block
              borderRadius: '0.25rem', // Custom border-radius for code block
            },
          },
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}
export default config
