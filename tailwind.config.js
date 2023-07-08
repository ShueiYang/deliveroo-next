/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '640px', 
        'md': '768px', 
        'lg': '1024px',
        'xl': '1280px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '5rem',
      },
    },
    extend: {
      fontFamily: {
        "ibm": ['var(--font-ibm)'],
        "strat": ['var(--font-stratos)'],
      },
    },
  },
  plugins: [],
}