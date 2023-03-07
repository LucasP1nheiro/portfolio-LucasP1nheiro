/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'paleBlue': '#01257D',
        'royalBlue': '#ffffff',
        'eggPlant': '#00FFFF',
      },
      textColor: {
        'paleBlue': '#01257D',
        'royalBlue': '#ffffff',
        'eggPlant': '#00FFFF',
      },
      height: {
        '1/10': '10%',
        '9/10': '90%'
      },
      color: {
        'paleBlue': '#01257D',
        'royalBlue': '#ffffff',
        'eggPlant': '#00FFFF',
      },
      borderColor: {
        'paleBlue': '#01257D',
        'royalBlue': '#ffffff',
        'eggPlant': '#00FFFF',
      },
     
    },
  },
  plugins: [],
}
