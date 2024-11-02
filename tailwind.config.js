/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "550px",
      xl: "1440px"
  },
    extend: {
      colors:{
        customOrange:"hsl(26, 100%, 55%)",
        paleOrange:"hsl(25, 100%, 94%)",
        BlackBg:"rgba(0,0,0,0.75)",
        darkGrayBlue:"hsl(220, 13%, 13%)",
        lightGrayBlue:"hsl(223, 64%, 98%)"
      }
    },
    fontFamily:{
      custom:["Kumbh Sans", "sans-serif"]
    }
  },
  plugins: [],
}

