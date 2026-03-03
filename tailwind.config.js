/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // This is a common "Wellness" slate green often found in logos
        'brand-dark': '#2D362D', 
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        playfair: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}