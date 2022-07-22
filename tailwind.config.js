/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary':"#FF7E20",
        'secondary': "#FFDE5A",
        'titles':"#060922",
        'text':"#333232",
        'fondo' : "rgba(255,126,32,0.08)",
        'bg-cards' : "#FFFFFF",
        'dark-bg' : "#24202A"

      }),
      textColor: {
        'primary':"#FF7E20",
        'titles':"#060922",
        'text':"#333232",
        'fondo' : "rgba(255,126,32,0.08)",
        'bg-cards' : "#FFFFFF",
        'dark-bg' : "#24202A",
        'dark-text' : "#ACACAC"
      },
      colors: {
        'primary':"#FF7E20",
        'titles':"#060922",
        'text':"#333232",
        'fondo' : "rgba(255,126,32,0.08)",
        'bg-cards' : "#FFFFFF",
        'dark-bg' : "#24202A",
        'dark-text' : "#ACACAC"
      },
    },
  },
  plugins: [],
}
