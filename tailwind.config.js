
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: ".1rem",
      screens: {
        xl: "75rem",
        "2xl": "75rem",
      },
    },
  },
  plugins: [require('daisyui')],
}
