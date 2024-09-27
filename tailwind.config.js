/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "pink":"#FF204E",
        "red":"#dc3545"
      }
    },
  },
  plugins: [
      function ({ addUtilities }) {
        addUtilities({
            '.scrollbar-none': {
                'scrollbar-width': 'none',  /* For Firefox */
                '-ms-overflow-style': 'none', /* For IE and Edge */
            },
            '.scrollbar-none::-webkit-scrollbar': {
                'display': 'none', /* For Chrome, Safari, and Opera */
            },
        });
      }
  ],
}

