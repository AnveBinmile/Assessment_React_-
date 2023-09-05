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
        'headerImg': "url('src/assets/CardImages/Rectangle.png')"
      }
    },
  },
  plugins: [],
};
