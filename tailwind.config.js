const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'bw-pattern':"url('../public/img/bw.png')",
       
        },
        backgroundSize: {
            '40%':'40%',
        },
        fontFamily: {
          'helvetica':'helvetica',
        },
      },
      

  
  },
  plugins: [],
}
