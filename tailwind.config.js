/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'hotpink': '#fc4897',
      'softpink': '#f097bc',
      'black': '#0c0608',
      'darkbrown': '#401416',
      'tan': '#dda786',
      'velvet': '#591123',
      'velvet-clear': '#66591123',
      'white': '#ffffff',
    },
    extend: {
      fontFamily: {
        'custom': ['Bebas', 'system-ui'], // Use your font name here
      },
    },
  },
  plugins: [],
}

