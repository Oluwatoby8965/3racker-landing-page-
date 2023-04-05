/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#171781",
        linkPry: "#0000ff",
      },
      boxShadow: {
        'Myshadow': '0 35px 60px -15px rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
};
