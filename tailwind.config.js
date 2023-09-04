/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'vdpurple': '#6100C2',
        'greyBlack':'#21201E'
      },
      backgroundImage: {
        'headerImg': "url('/home/anvesha/Documents/Anvesha/VscODE/React/ReactAndTailwind/AssessmentMovieApp/movieApp/src/assets/CardImages/Rectangle 201.png')"
      }
    },
  },
  plugins: [],
};
