/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        hero: {
          text: '#D42222', 
        },
        btn: {
          primary: '#FF585B', 
          hover: '#FF7476',
        },
        bgLight: '#333333',  
        heroLight: '#FF4A4A', 
        btnLight: '#FF7A7B',  
      },
    },
  },
  plugins: [],
}
