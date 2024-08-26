module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['InterVariable', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};